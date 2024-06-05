const hostname = window.location.hostname;
const pathname = window.location.pathname;

const log = (m) => {
  return false; // Turn Off Consoles
  // console.log(
  //   `%c DTools: %c ${m} `,
  //   "color: #ff444f;font-weight:bold",
  //   "color:white"
  // );
};

const messagehandler = (request, sender, sendResponse) => {
  const { action, data } = request;

  switch (action) {
    case "changeEndPoint":
      const { app_id, server_url, is_dashboard, debug_service_worker } = data;
      log(`Changing Endpoint into APP_ID:${app_id} SERVER URL:${server_url}`);
      localStorage.setItem("config.app_id", app_id);
      localStorage.setItem("config.server_url", server_url);
      localStorage.setItem("is_dashboard", is_dashboard);
      localStorage.setItem("debug_service_worker", debug_service_worker);

      chrome.storage.local.set({
        app_id,
        server_url,
        is_dashboard,
        debug_service_worker,
      });

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
    case "changeAutoLogin":
      {
        const { is_checked } = data;
        Cookies.remove("client_information");
        if (!is_checked) {
          chrome.storage.local.set({ auto_login: "off" });
          chrome.storage.local.remove("deriv_client");
          Cookies.remove("client_information");
        } else {
          chrome.storage.local.set({ auto_login: "" });
        }
      }
      break;
    case "updateDerivLocalCookie":
      {
        const { new_client_info } = data;
        const auto_login_key = "auto_login";
        chrome.storage.local.get([auto_login_key], function (value) {
          const auto_login = value[auto_login_key];

          console.log(new_client_info);

          chrome.storage.local.set({ deriv_client: new_client_info });

          if (auto_login != "off") {
            Cookies.remove("client_information");

            setTimeout(() => {
              Cookies.set(
                "client_information",
                JSON.stringify(new_client_info)
              );
            }, 1000);
          }
        });
      }
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

const deriv_com_url = "deriv.com";
const deriv_me_url = "deriv.me";

const supported_domains = [deriv_com_url, deriv_me_url];

const domain_url = supported_domains.includes(hostname)
  ? hostname
  : deriv_com_url;

const getDomain = () =>
  hostname.includes(domain_url) ? domain_url : "binary.sx";

const isBot = () =>
  /^\/bot/.test(pathname) ||
  (/^\/(br_)/.test(pathname) && pathname.split("/")[2] === "bot");

const isMT5 = () =>
  /^\/mt5/.test(pathname) ||
  (/^\/(br_)/.test(pathname) && pathname.split("/")[2] === "mt5");

const getCurrentProductionDomain = () =>
  !/^staging\./.test(hostname) &&
  Object.keys(domain_app_ids).find((domain) => hostname === domain);

const isProduction = () => {
  const all_domains = Object.keys(domain_app_ids).map(
    (domain) => `(www\\.)?${domain.replace(".", "\\.")}`
  );
  return new RegExp(`^(${all_domains.join("|")})$`, "i").test(hostname);
};

const isTestLink = () => {
  return /^((.*)\.binary\.sx)$/i.test(hostname);
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
  } else if (/localhost/i.test(hostname)) {
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

const getPlatformFromUrl = (domain = hostname) => {
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

const isStaging = (domain = hostname) => {
  const { is_staging_deriv_app } = getPlatformFromUrl(domain);

  return is_staging_deriv_app;
};

const fetchEndPoint = () => {
  const account_id = localStorage["active_loginid"];
  const client_details = JSON.parse(localStorage["client.accounts"]);

  chrome.storage.local.set({
    app_id: getAppId(),
    server_url: getSocketURL(),
    account_id,
    client_details: client_details[account_id],
    is_dashboard: localStorage["is_dashboard"],
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

const showToast = (message, counterText = null) => {
  // Create the toast container
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.style.visibility = "hidden";
  toast.style.width = "100%";
  toast.style.maxWidth = "300px";
  toast.style.backgroundColor = "#333";
  toast.style.color = "#fff";
  toast.style.borderRadius = "2px";
  toast.style.padding = "16px";
  toast.style.position = "fixed";
  toast.style.zIndex = "1";
  toast.style.right = "30px";
  toast.style.bottom = "30px";
  toast.style.fontSize = "15px";
  toast.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
  toast.style.transition = "visibility 0.5s, opacity 0.5s linear";

  // Create the header container
  let header = document.createElement("div");
  header.style.display = "flex";
  header.style.alignItems = "center";
  header.style.justifyContent = "space-between"; // To space out the elements
  header.style.marginBottom = "8px";

  // Create the left part of the header
  let headerLeft = document.createElement("div");
  headerLeft.style.display = "flex";
  headerLeft.style.alignItems = "center";

  // Create the icon element
  let icon = document.createElement("img");
  icon.src =
    "https://prince-deriv.github.io/dtools-production/assets/images/icon.png";
  icon.style.width = "24px";
  icon.style.height = "24px";
  icon.style.marginRight = "8px";

  // Create the title element
  let titleElem = document.createElement("span");
  titleElem.textContent = "DTools";
  titleElem.style.fontWeight = "bold";

  // Append the icon and title to the left part of the header
  headerLeft.appendChild(icon);
  headerLeft.appendChild(titleElem);

  // Append the left part of the header to the header container
  header.appendChild(headerLeft);

  // Create the counter element if the counter text is provided
  if (counterText) {
    let counter = document.createElement("span");
    counter.textContent = counterText;
    counter.style.fontWeight = "normal";
    header.appendChild(counter);
  }

  // Append the header to the toast
  toast.appendChild(header);

  // Create the message element
  let messageElem = document.createElement("div");
  messageElem.innerHTML = message;

  // Append the message to the toast
  toast.appendChild(messageElem);

  // Append the toast to the body
  document.body.appendChild(toast);

  // Show the toast
  setTimeout(() => {
    toast.style.visibility = "visible";
    toast.style.opacity = "1";
  }, 10);

  // Hide the toast after 3 seconds
  setTimeout(() => {
    toast.style.opacity = "0";
    // Remove the toast element after the transition
    toast.addEventListener("transitionend", () => {
      toast.remove();
    });
  }, 10000);
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

const cookieBuilder = {
  website_status: null,
  client_information: null,
  isClientInfoExist: (client_info, collection) => {
    let exist = false;

    collection.forEach((info) => {
      if (client_info) {
        if (client_info.email === info.email) {
          exist = true;
        }
      }
    });

    return exist;
  },
  init: () => {
    const auto_login_key = "auto_login";
    chrome.storage.local.get(
      [auto_login_key, "deriv_client"],
      function (value) {
        const auto_login = value[auto_login_key];
        const deriv_client = value["deriv_client"];

        let client_information = Cookies.getJSON("client_information");

        if (deriv_client) {
          client_information = deriv_client;
        }

        if (!client_information) {
          client_information = {
            currency: "USD",
            email: "dtools@deriv.com",
            first_name: "Dtools",
            landing_company_shortcode: "svg",
            last_name: "Deriv",
            loginid: "CR1234567",
            residence: "my",
            user_id: 1234567,
          };
        }

        cookieBuilder.client_information = client_information;

        if (auto_login != "off") {
          Cookies.set("client_information", JSON.stringify(client_information));
        }

        const ci_local = client_information;

        if (ci_local !== undefined) {
          chrome.storage.local.set({ deriv_client: ci_local });
        }
      }
    );

    setTimeout(() => {
      cookieBuilder.init();
    }, 1000);
  },
};

// Quick login checker
const quick_login_url = "quick-login-url";
chrome.storage.local.get([quick_login_url], function (value) {
  let quick_login_triggered = false;
  const url = value[quick_login_url];

  setInterval(() => {
    // Validate quick login popup

    if (window.name === "quick-login") {
      // Auto click login button
      window.resizeTo(500, 700);

      if (!quick_login_triggered && window.location.href === url) {
        const button = document.getElementById("dt_login_button");
        if (button) {
          button.click();
          quick_login_triggered = true;
        }
      }
      // Fetch Token in localstorage
      const client_info = localStorage["client.accounts"];
      if (client_info) {
        const parsed_info = JSON.parse(client_info);

        let x = 1;
        let token_string = "";

        Object.keys(parsed_info).forEach((account) => {
          const info = parsed_info[account];
          const delimeter = x === 1 ? "" : "&";

          token_string += `${delimeter}acct${x}=${account}&token${x}=${info.token}&cur${x}=${info.currency}`;
          x++;
        });

        // redirect to the target url and apply the token
        if (token_string !== "") {
          if (url.includes(window.location.host)) {
            window.open(url, "_blank");
            window.close();
            return false;
          }

          window.location = `${url}?${token_string}`;
        }
      }
    }
  }, 100);
});

// Pet Checker
let is_pet_activated = false;
setInterval(() => {
  if (hostname === "www.google.com" && !is_pet_activated) {
    const params = new URLSearchParams(document.location.search.substring(1));

    const pets = ["cat", "dog"];

    if (pets.includes(params.get("q")) && params.get("paw")) {
      document
        .querySelectorAll("[data-attr='uib-thumbnail']")[0]
        .querySelector("img")
        .click();

      is_pet_activated = true;

      const clickOnCoordinates = (x, y) => {
        // Create a new MouseEvent
        const event = new MouseEvent("click", {
          view: window,
          bubbles: true,
          cancelable: true,
          clientX: x,
          clientY: y,
        });

        // Find the element at the specified coordinates (if needed)
        const elementAtCoordinates = document.elementFromPoint(x, y);

        if (elementAtCoordinates) {
          // Dispatch the click event on the element at the specified coordinates
          elementAtCoordinates.dispatchEvent(event);
        } else {
          // If no element is found at the coordinates, dispatch the event on the document
          document.dispatchEvent(event);
        }
      };

      const delay = params.get("delay") || 1000;

      const clickFrenzy = () => {
        const max_y = window.innerHeight;
        const max_x = window.innerWidth;

        const x = Math.floor(Math.random() * (max_x - 0 + 1)) + 0;
        const y = Math.floor(Math.random() * (max_y - 0 + 1)) + 0;

        clickOnCoordinates(x, y);
      };

      setInterval(clickFrenzy, delay);

      // Remove share and close controls
      document.querySelectorAll('[role="button"]')[0].style.display = "none";
      document.querySelectorAll('[role="button"]')[1].style.display = "none";

      // Trigger sounds
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // check search param
  }
}, 100);

// Get allowed Domains
let allowedDomains = [];

chrome.storage.local.get("allowed_domains", function (value) {
  let domains = value["allowed_domains"];

  if (domains) {
    allowedDomains = domains.split(",");
  } else {
    // Default Allowed
    const newAllowedDomains = ["github.com", "deriv.com"];

    chrome.storage.local.set({ allowed_domains: newAllowedDomains.join(",") });
  }

  antiPhising();
});

const antiPhising = () => {
  // Anti Phishing

  setInterval(() => {
    if (hostname == "mail.google.com") {
      const links = document.querySelectorAll("a");
      links.forEach(function (link) {
        if (!hasClickListener(link) && !link.dataset.click) {
          link.dataset.click = "anti-phishing";
          link.addEventListener("click", handleClick);
        }
      });

      function handleClick(event) {
        const link = event.target;

        if (
          !isAllowedToNavigate(link) &&
          link.hostname !== "" &&
          link.hostname !== undefined
        ) {
          event.preventDefault();

          const message = `<p>The link's hostname <i style="color:blue;">[${link.hostname}]</i> is not part of the <strong>allowed Domains</strong> yet, and it might be a phishing URL.<br><br>If you continue, it will be added to the allowed Domains. You can always go to <span style="color:#c40000;">Dtools > Anti-Phishing</span> and remove this URL from the allowed Domains in case it turns out to be a phishing link.</p>`;
          // return confirm(message);

          const overlay = document.createElement("div");
          overlay.style.position = "fixed";
          overlay.style.top = "0";
          overlay.style.left = "0";
          overlay.style.width = "100%";
          overlay.style.height = "100%";
          overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
          overlay.style.zIndex = "1000"; // Added z-index
          overlay.setAttribute("id", "dtools-modal-overlay");

          // Logo
          const logo = document.createElement("img");
          logo.setAttribute(
            "src",
            "https://prince-deriv.github.io/dtools-production/assets/images/icon.png"
          );

          logo.style.width = "25px";
          logo.style.height = "25px";
          logo.style.marginRight = "10px";

          const closePopUp = () => {
            const element = document.getElementById("dtools-modal-overlay");
            if (element) {
              element.parentNode.removeChild(element);
            }
          };

          // Close Btn
          const closeBtn = document.createElement("span");
          closeBtn.style.marginLeft = "auto";
          closeBtn.style.padding = "5px";
          closeBtn.style.fontWeight = "bold";
          closeBtn.style.cursor = "pointer";
          closeBtn.innerHTML = "X";
          closeBtn.addEventListener("click", closePopUp);

          // Header
          const header = document.createElement("div");
          header.style.backgroundColor = "#000000";
          header.style.padding = "10px";
          header.style.color = "#ffffff";
          header.style.fontWeight = "bold";
          header.style.display = "flex";
          header.style.alignItems = "center";
          header.innerHTML = "Dtools";
          header.prepend(logo);
          header.append(closeBtn);

          // Create modal
          const modal = document.createElement("div");
          modal.style.position = "fixed";
          modal.style.top = "50%";
          modal.style.left = "50%";
          modal.style.transform = "translate(-50%, -50%)";
          modal.style.backgroundColor = "#fff";
          modal.style.borderRadius = "8px";
          modal.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
          modal.style.zIndex = "9999";
          modal.style.maxWidth = "500px";
          modal.style.width = "100%";

          const body = document.createElement("div");
          body.style.display = "flex";
          body.style.flexDirection = "column";
          body.style.alignItems = "center";
          body.style.padding = "10px";
          body.style.background = "#ffffff";

          // Button
          const button = document.createElement("button");
          button.style.margin = "30px 10px";
          button.style.padding = "10px";
          button.style.width = "fit-content";
          button.style.borderRadius = "10px";
          button.style.color = "#fff";
          button.style.fontWeight = "bold";
          button.style.fontSize = "15px";
          button.style.border = "none";
          button.style.cursor = "pointer";
          button.style.background = "#6BA84F";
          button.innerHTML = "Yes, I confirm this is safe";

          button.addEventListener("mouseenter", function () {
            // Apply hover style when mouse enters the element
            button.style.backgroundColor = "#42a713";
          });

          // Add event listener for mouseleave
          button.addEventListener("mouseleave", function () {
            // Remove hover style when mouse leaves the element
            button.style.backgroundColor = "#6BA84F";
          });

          button.addEventListener("click", function () {
            chrome.storage.local.get("allowed_domains", function (value) {
              const domains = value["allowed_domains"].split(",");
              const linkHostname = link.hostname;
              if (!domains.includes(linkHostname)) {
                domains.push(linkHostname);
                allowedDomains.push(linkHostname);

                chrome.storage.local.set({
                  allowed_domains: domains.join(","),
                });
              }

              closePopUp();
              window.open(link.href, "_blank");
            });
          });

          body.innerHTML = message;
          body.append(button);

          modal.append(header);
          modal.append(body);
          // Append modal to overlay
          overlay.appendChild(modal);

          event.preventDefault();

          // Append overlay to body
          document.body.appendChild(overlay);
        }
      }

      function hasClickListener(link) {
        return !!link.onclick;
      }

      function isAllowedToNavigate(link) {
        return (
          link.hostname === window.location.hostname ||
          allowedDomains.includes(link.hostname)
        );
      }
    }
  }, 100);
};

// LastPass Blocker
setInterval(() => {
  const iframeElement = document.querySelector("[data-lastpass-root]");
  if (iframeElement) {
    iframeElement.remove();

    // Count Blocked Frames
    chrome.storage.local.get(
      [
        "blocked_lp_frames",
        "blocked_lp_frames_target",
        "blocked_lp_frames_count",
      ],
      function (value) {
        let blocked_frames = parseInt(value["blocked_lp_frames"]);
        let blocked_frames_target = parseInt(value["blocked_lp_frames_target"]);
        let blocked_frames_count = parseInt(value["blocked_lp_frames_count"]);

        blocked_frames = isNaN(blocked_frames) ? 0 : blocked_frames;
        blocked_frames_target = isNaN(blocked_frames_target)
          ? 0
          : blocked_frames_target;
        blocked_frames_count = isNaN(blocked_frames_count)
          ? 0
          : blocked_frames_count;

        blocked_frames += 1;

        // Toast Show Counter
        const numberOfBlocksBeforeAlert =
          Math.floor(Math.random() * (24 - 12 + 1)) + 12;

        const randomBlocksCount = numberOfBlocksBeforeAlert;
        const newTarget = blocked_frames + randomBlocksCount;

        if (blocked_frames_target === 0) {
          blocked_frames_target = newTarget;
          blocked_frames_count = randomBlocksCount;
        }

        if (blocked_frames >= blocked_frames_target) {
          blocked_frames_target = newTarget;

          showToast(
            `For the past few hours, <span style="color:red;">${blocked_frames_count}</span> LastPass frames have been blocked for your convenience to prevent disruption.`,
            `Total Blocked: ${blocked_frames}`
          );

          blocked_frames_count = randomBlocksCount;
        }

        chrome.storage.local.set({
          blocked_lp_frames: blocked_frames,
          blocked_lp_frames_target: blocked_frames_target,
          blocked_lp_frames_count: blocked_frames_count,
        });

        if (blocked_frames > 9999) {
          blocked_frames = "9999+";
        }
      }
    );
  }
}, 100);

profileBuilder();
cookieBuilder.init();
versionChecker.run();
