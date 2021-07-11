const version = "1.1.0";
const cloud_9_link = "https://qa10.deriv.dev/ide/ide.html";

const initFunctions = () => {
  // Jquery functions the required to get loaded after the popup is render must be inside of this function

  $("#app-name").html(`DTools ${version}`);

  $("#cloud-9-link").attr("href", cloud_9_link);

  $("#launch-btn").click(function () {
    launch();
  });

  generateDropdowns();

  $(".router-link").click(function () {
    const section = $(this).data("target");

    if (section) {
      selectMenu(section);
      pageHandler(section);
    }
  });

  $(".back-btn").click(() => {
    selectMenu("menu");
  });

  $("#change-endpoint").click(() => {
    const app_id = $("#endpoint-app-id").val();
    const server_url = $("#endpoint-server").val();

    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {
        action: "changeEndPoint",
        data: {
          app_id,
          server_url,
        },
      });
    });

    close();
  });

  $("#reset-endpoint").click(() => {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {
        action: "resetEndPoint",
      });
    });

    close();
  });

  $("#qa-endpoint").click(() => {
    $("#endpoint-app-id").val("9999");
    $("#endpoint-server").val("qa10.deriv.dev");
  });

  $(".code-box")
    .on("click", function () {
      $(this).find("textarea").select();
      $(this).attr("data-tooltip", "Copied!");
      document.execCommand("copy");
    })
    .mouseout(function () {
      $(this).attr("data-tooltip", "");
    });

  $("#app-id-query-generator-btn").click(function () {
    $("#aig-p1").hide();
    $("#aig-p2").show();

    const now = new Date();
    const epoch = Math.round(now.getTime() / 1000);
    const prefix = $("#app-id-generator #prefix").val();
    const key = `${prefix}-${epoch}`;

    const link = $("#app-id-generator #link").val();

    const app_id_deriv = $("#app-id-generator #app-id-deriv");
    const app_id_binary = $("#app-id-generator #app-id-binary");

    const deriv_query = `insert into oauth.apps (name, binary_user_id, active, redirect_uri, scopes, verification_uri) values ('${key}', 1, true, '${link}', '{read,admin,trade,payments}', '${link}/redirect');`;
    const binary_query = `insert into oauth.apps (name, binary_user_id, active, redirect_uri, scopes, verification_uri) values ('${key}', 1, true, '${link}/en/logged_inws.html', '{read,admin,trade,payments}', '${link}/en/redirect.html');`;

    app_id_deriv.val(buildAppIdQuery(deriv_query, key));
    app_id_binary.val(buildAppIdQuery(binary_query, key));
  });

  $("#generate-id-again").click(function () {
    $("#aig-p2").hide();
    $("#aig-p1").show();
  });

  profileManager.init();
};

// Other Functions

const buildAppIdQuery = (query, key) => {
  const get_query = `select (id) from oauth.apps where name='${key}';`;
  const final_query = `echo $"${query}; ${get_query};" | sudo -u pgadmin psql -U pgadmin service=auth01`;

  return final_query;
};

const generateDropdowns = () => {
  (cc_html = ""),
    country_codes.map((e) => {
      const { code, name } = e;

      cc_html += `<option value="${code}">${name} - ${code}</option>`;
    });

  $("#aa-country-code").html(cc_html);

  (bc_html = ""),
    broker_codes.map((e) => {
      bc_html += `<option value="${e}">${e}</option>`;
    });

  $("#aa-broker-code").html(bc_html);

  (c_html = ""), (c2_html = "");

  currencies.map((e) => {
    c_html += `<option value="${e}">${e}</option>`;
    c2_html += `<option value="${e}">${e}</option>`;
  });

  $("#aa-currency").html(c_html);
  $("#at-currency").html(c2_html);

  (at_html = ""),
    other_accounts.map((e) => {
      at_html += `<option value="${e.value}">${e.title}</option>`;
    });

  $("#aa-account-type").html(at_html);

  $(".aa-input").change(() => {
    generateAddAccountCode();
  });

  $(".at-input").change(() => {
    generateAccountTopUpCode();
  });
  $("#account-topup-code").on("focus click hover", () => {
    generateAccountTopUpCode();
  });

  generateAddAccountCode();
  generateAccountTopUpCode();
};

const generateAddAccountCode = () => {
  const country_code = $("#aa-country-code").val();

  const code = `perl create_account.pl ${$("#aa-email").val()} ${$(
    "#aa-broker-code"
  ).val()} ${country_code && country_code.toLowerCase()}  ${$(
    "#aa-currency"
  ).val()}  ${$("#aa-account-type").val()}`;

  $("#add-account-code").val(code);
};

const generateAccountTopUpCode = () => {
  const code = `top-up ${$("#at-account-id").val()} ${$(
    "#at-currency"
  ).val()} ${$("#at-amount").val()}`;

  $("#account-topup-code").val(code);
};

const close = () => {
  window.close();
};

const launch = (file) => {
  const popupWindow = window.open(
    chrome.extension.getURL(`popup.html`),
    file,
    `resizable=no,width=${window_sizes[file][0]},height=${window_sizes[file][1]}`
  );

  window.close();
};

const selectMenu = (e) => {
  const popups = ["app-id-generator", "market-controller"];

  if (popups.includes(e)) {
    launch(e);
  } else {
    $(".app-section").hide();
    $(`#${e}`).css("display", "flex");
  }
};

const pageHandler = (e) => {
  switch (e) {
    case "endpoint":
      {
        $("#endpoint-server").val(DTools.server_url);
        $("#endpoint-app-id").val(DTools.app_id);
      }
      break;
    case "top-up":
      {
        $(".account-id-input").val(DTools.account_id);
      }
      break;
  }
};

const cleanKey = (key, prefix = "") => {
  return key.replace(`dtools_${prefix}`, "");
};

const css_files = [
  "/assets/styles/custom.css",
  "/assets/styles/bootstrap.css",
  "/assets/styles/jquery.toast.min",
];

const injectCss = () => {
  css_files.map((file) => {
    link = document.createElement("link");
    link.href = `${url}${file}`;
    link.type = "text/css";
    link.rel = "stylesheet";
    document.getElementsByTagName("head")[0].appendChild(link);
  });
};

const DTools = {
  app_id: null,
  server_url: null,
  account_id: null,
  manageStorage: async () => {
    ["server_url", "app_id", "account_id"].map((key) => {
      chrome.storage.local.get(key, function (value) {
        const val = value[key];
        DTools[key] = val;
      });
    });
  },
};

// Fetch Default Endpoint
chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  var activeTab = tabs[0];
  chrome.tabs.sendMessage(
    activeTab.id,
    {
      action: "fetchEndPoint",
    },
    () => {
      DTools.manageStorage();
    }
  );
});

// Profile Manager

const profileManager = {
  name: null,
  photo: null,
  email: null,
  updated: false,
  load: () => {
    ["dtools_profile_name", "dtools_profile_photo", "dtools_profile_email"].map(
      (key) => {
        chrome.storage.local.get(key, function (value) {
          const val = value[key];
          const new_key = cleanKey(key, "profile_");

          profileManager[new_key] = val;
        });
      }
    );

    const { name, photo, email, updated } = profileManager;

    if (name && photo && email && !updated) {
      profileManager.updated = true;

      const profile_contaier = $(".profile-container");
      profile_contaier.css("display", "flex");
      profile_contaier.find(".photo").attr("src", photo);
      profile_contaier.find(".name").html(name);
      profile_contaier.find(".email").html(email);

      // Other personalized data
      const prefix = $("#prefix");
      const aa_email = $("#aa-email");

      const first_name = name.split(" ")[0].toLowerCase();

      if (prefix.val() == "Dtools" || $.trim(prefix.val()) == "") {
        prefix.val(first_name);
      }

      if ($.trim(aa_email.val()) == "") {
        aa_email.val(first_name + "@deriv.com");
      }
    }
  },
  init: () => {
    profileManager.load();

    setInterval(() => {
      profileManager.load();
    }, 10);
  },
};
