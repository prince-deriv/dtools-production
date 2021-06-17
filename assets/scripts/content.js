const log = (m) => {
  console.log(
    `%c DTools: %c ${m} `,
    "color: #ff444f;font-weight:bold",
    "color:white"
  );
};

const messagehandler = (request, sender, sendResponse) => {
  const { action, data } = request;

  switch (action) {
    case "changeEndPoint":
      const { app_id, server_url } = data;
      log(`Changing Endpoint into APP_ID:${app_id} SERVER URL:${server_url}`);
      localStorage.setItem("config.app_id", app_id);
      localStorage.setItem("config.server_url", server_url);
      location.reload();
      break;
    case "resetEndPoint":
      log("Resetting Endpoint");
      localStorage.removeItem("config.app_id");
      localStorage.removeItem("config.server_url");
      location.reload();
      break;
    case "fetchEndPoint":
      fetchEndPoint();
      break;
  }
};

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  messagehandler(request, sender, sendResponse);
});

const domain_app_ids = {
  "deriv.app": 16929,
  "app.deriv.com": 16929,
  "myapps.deriv.com": 1411,
  "app.deriv.me": 1411,
  "binary.com": 1,
};

const isBot = () =>
  /^\/bot/.test(window.location.pathname) ||
  (/^\/(br_)/.test(window.location.pathname) &&
    window.location.pathname.split("/")[2] === "bot");

const isMT5 = () =>
  /^\/mt5/.test(window.location.pathname) ||
  (/^\/(br_)/.test(window.location.pathname) &&
    window.location.pathname.split("/")[2] === "mt5");

const getCurrentProductionDomain = () =>
  !/^staging\./.test(window.location.hostname) &&
  Object.keys(domain_app_ids).find(
    (domain) => window.location.hostname === domain
  );

const isProduction = () => {
  const all_domains = Object.keys(domain_app_ids).map(
    (domain) => `(www\\.)?${domain.replace(".", "\\.")}`
  );
  return new RegExp(`^(${all_domains.join("|")})$`, "i").test(
    window.location.hostname
  );
};

const isTestLink = () => {
  return /^((.*)\.binary\.sx)$/i.test(window.location.hostname);
};

const getAppId = () => {
  let app_id = null;
  const user_app_id = ""; // you can insert Application ID of your registered application here
  const config_app_id = window.localStorage.getItem("config.app_id");

  if (config_app_id) {
    app_id = config_app_id;
  } else if (user_app_id.length) {
    window.localStorage.setItem("config.default_app_id", user_app_id);
    app_id = user_app_id;
  } else if (isStaging()) {
    window.localStorage.removeItem("config.default_app_id");
    app_id = isBot() ? 19112 : 16303; // it's being used in endpoint chrome extension - please do not remove
  } else if (/localhost/i.test(window.location.hostname)) {
    app_id = 17044;
  } else {
    window.localStorage.removeItem("config.default_app_id");
    const current_domain = getCurrentProductionDomain();
    app_id = (isBot() ? 19111 : domain_app_ids[current_domain]) || 16929;
  }
  return app_id;
};

const getSocketURL = () => {
  const local_storage_server_url =
    window.localStorage.getItem("config.server_url");
  if (local_storage_server_url) return local_storage_server_url;

  let active_loginid_from_url;
  const search = window.location.search;
  if (search) {
    const params = new URLSearchParams(document.location.search.substring(1));
    active_loginid_from_url = params.get("acct1");
  }

  const loginid =
    window.localStorage.getItem("active_loginid") || active_loginid_from_url;
  const is_real = loginid && !/^VRT/.test(loginid);

  const server = is_real ? "green" : "blue";
  const server_url = `${server}.binaryws.com`;

  return server_url;
};

const checkAndSetEndpointFromUrl = () => {
  if (isStaging() || isTestLink()) {
    const url_params = new URLSearchParams(location.search.slice(1));

    if (url_params.has("qa_server") && url_params.has("app_id")) {
      const qa_server = url_params.get("qa_server");
      const app_id = url_params.get("app_id");

      url_params.delete("qa_server");
      url_params.delete("app_id");

      if (
        /^(www\.binaryqa[0-9]{1,2}\.com|(.*)\.binaryws\.com)$/.test(
          qa_server
        ) &&
        /^[0-9]+$/.test(app_id)
      ) {
        localStorage.setItem("config.app_id", app_id);
        localStorage.setItem("config.server_url", qa_server);
      }

      const params = url_params.toString();
      const hash = location.hash;

      location.href = `${location.protocol}//${location.hostname}${
        location.pathname
      }${params ? `?${params}` : ""}${hash || ""}`;
    }
  }
};

const getUrlSmartTrader = () => {
  const { is_staging_deriv_app } = getPlatformFromUrl();
  const i18n_language = window.localStorage.getItem("i18n_language") || "en";

  let base_link = "";

  if (is_staging_deriv_app) {
    base_link = deriv_urls.SMARTTRADER_STAGING;
  } else {
    base_link = deriv_urls.SMARTTRADER_PRODUCTION;
  }

  return `${base_link}/${i18n_language.toLowerCase()}/trading.html`;
};

const getPlatformFromUrl = (domain = window.location.hostname) => {
  const resolutions = {
    is_staging_deriv_app: /^staging-app\.deriv\.com$/i.test(domain),
    is_deriv_app: /^app\.deriv\.com$/i.test(domain),
    is_test_link: /^(.*)\.binary\.sx$/i.test(domain),
  };

  return {
    ...resolutions,
    is_staging: resolutions.is_staging_deriv_app,
  };
};

const isStaging = (domain = window.location.hostname) => {
  const { is_staging_deriv_app } = getPlatformFromUrl(domain);

  return is_staging_deriv_app;
};

const fetchEndPoint = () => {
  chrome.storage.local.set({ app_id: getAppId() });
  chrome.storage.local.set({ server_url: getSocketURL() });
  chrome.storage.local.set({ account_id: localStorage["active_loginid"] });
};
