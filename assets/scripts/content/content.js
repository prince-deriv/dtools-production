//  Global Variables and Configurations
const version = "1.1.8";
const feature_version = "1b";
const hostname = window.location.hostname;

const log = (m) => {
  console.log(
    `%c DTools: %c ${m} `,
    "color: #ff444f;font-weight:bold",
    "color:white"
  );
};

messagehandler = (request, sender, sendResponse) => {
  const { action, data } = request;

  switch (action) {
    case "changeEndPoint":
      const { app_id, server_url, is_dashboard, debug_service_worker } = data;
      log(`Changing Endpoint into APP_ID:${app_id} SERVER URL:${server_url}`);
      localStorage.setItem("config.app_id", app_id);
      localStorage.setItem("config.server_url", server_url);
      localStorage.setItem("is_dashboard", is_dashboard);
      localStorage.setItem("debug_service_worker", debug_service_worker);
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
  const account_id = localStorage["active_loginid"];
  const client_details = JSON.parse(localStorage["client.accounts"]);

  chrome.storage.local.set({ app_id: getAppId() });
  chrome.storage.local.set({ server_url: getSocketURL() });
  chrome.storage.local.set({ account_id });
  chrome.storage.local.set({ client_details: client_details[account_id] });
  chrome.storage.local.set({ is_dashboard: localStorage["is_dashboard"] });
  chrome.storage.local.set({
    debug_service_worker: localStorage["debug_service_worker"],
  });
};

const profileBuilder = () => {
  if (hostname == "mail.google.com") {
    const account = document.querySelectorAll(
      '[aria-label^="Google Account"]'
    )[0];

    const account_photo = document.querySelectorAll(
      '[aria-label^="Google Account"] img'
    )[0];

    if (account && account_photo) {
      const label = account.getAttribute("aria-label");

      const info = label.replace("Google Account: ", "").split("\n");

      const profile_name = info[0];
      const profile_email = info[1];
      const profile_photo = account_photo.src;

      if (profile_photo && profile_name && profile_email) {
        chrome.storage.local.set({
          dtools_profile_name: profile_name,
          dtools_profile_email: profile_email,
          dtools_profile_photo: profile_photo,
        });
      }
    }
  }
};

const toast = {
  build: () => {
    const toast_container = document.createElement("div");
    toast_container.id = "dtools-toast-container";

    toast_container.style.position = "fixed";
    toast_container.style.zIndex = "9999999999";
    toast_container.style.bottom = "10px";
    toast_container.style.right = "-500px";
    toast_container.style.width = "auto";
    toast_container.style.minWidth = "200px";
    toast_container.style.height = "auto";
    toast_container.style.backgroundColor = "#ff444f";
    toast_container.style.opacity = "0.9";
    toast_container.style.borderRadius = "4px";
    toast_container.style.boxShadow = "#bbb 0px 0px 13px";
    toast_container.style.backgroundColor = "#000";
    toast_container.style.display = "flex";
    toast_container.style.padding = "10px";
    toast_container.style.color = "white";
    toast_container.style.fontSize = "15px";
    toast_container.style.fontWeight = "bold";
    toast_container.style.alignItems = "center";
    toast_container.style.transition = "all 0.5s ease-out";

    document.body.prepend(toast_container);

    return toast_container;
  },
  show: (e, time) => {
    const counter = time ? time : 10000;
    const toaster = toast.build();

    setTimeout(() => {
      toaster.style.right = "10px";
    }, 300);

    setTimeout(() => {
      toaster.style.opacity = "0";
    }, counter);

    const add_ons = `
      <img style="height:20px;margin-right: 10px;" src="${url}/assets/images/icon.png" />
    `;

    toaster.innerHTML = add_ons + "" + e;
  },
};

const versionChecker = {
  dtools_version: null,
  dtools_last_updated: null,
  loadData: async () => {
    ["dtools_version", "dtools_last_updated"].map((key) => {
      chrome.storage.local.get(key, function (value) {
        const val = value[key];
        versionChecker[key] = val;
      });
    });
  },
  run: () => {
    versionChecker.loadData();

    setTimeout(() => {
      const dtools_version = versionChecker.dtools_version;

      if (dtools_version != version) {
        toast.show(`DTools is now version ${version}`);
        chrome.storage.local.set({ dtools_version: version });
      }
    }, 1500);
  },
};

profileBuilder();
versionChecker.run();
