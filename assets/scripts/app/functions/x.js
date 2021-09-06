const initFunctions = () => {
  generateDropdowns();
  popupLoad();
  loadHotkeys();
  offlineActions();
  applyDarkTheme();
  profileManager.init();
  cookieManager.init();

  $("#app-name").html(`DTools ${version}${feature_version}`);

  $("#launch-btn").click(function () {
    launch();
  });

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
    const is_dashboard = $("#enable-dashboard").is(":checked")
      ? "true"
      : "false";
    const debug_service_worker = $("#enable-service-worker").is(":checked")
      ? "1"
      : "0";

    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {
        action: "changeEndPoint",
        data: {
          app_id,
          server_url,
          is_dashboard,
          debug_service_worker,
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

  $("#apply-quick-endpoint").click(() => {
    const app_id = $(".endpoints-box-select").val();
    $("#endpoint-app-id").val(app_id);
    $("#endpoint-server").val("qa10.deriv.dev");
  });

  $("#apply-country-code").click(() => {
    const new_country_code = $("#cc-country-code").val();

    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {
        action: "changeCountryCode",
        data: {
          country_code: new_country_code.toLowerCase(),
        },
      });
    });

    close();
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
    const now = new Date();
    const epoch = Math.round(now.getTime() / 1000);
    const prefix = $("#app-id-generator #prefix").val();
    const key = `${prefix}-${epoch}`;

    const link = $("#app-id-generator #link").val();

    if ($.trim(link) == "") {
      return false;
    }

    chrome.storage.local.set({ app_link: link });

    const app_id_deriv = $("#app-id-generator #app-id-deriv");
    const app_id_binary = $("#app-id-generator #app-id-binary");

    const deriv_query = `insert into oauth.apps (name, binary_user_id, active, redirect_uri, scopes, verification_uri) values ('${key}', 1, true, '${link}', '{read,admin,trade,payments}', '${link}/redirect');`;
    const binary_query = `insert into oauth.apps (name, binary_user_id, active, redirect_uri, scopes, verification_uri) values ('${key}', 1, true, '${link}/en/logged_inws.html', '{read,admin,trade,payments}', '${link}/en/redirect.html');`;

    $("#aig-p1").hide();
    $("#aig-p2").show();

    app_id_deriv.val(buildAppIdQuery(deriv_query, key));
    app_id_binary.val(buildAppIdQuery(binary_query, key));
  });

  $("#generate-id-again").click(function () {
    $("#aig-p2").hide();
    $("#aig-p1").show();
  });
};

// Other Functions
const popupLoad = () => {
  const main_container = $(".main-container");

  if (main_container.css("display") == "none") {
    main_container.fadeIn(100);
  }

  setTimeout(() => {
    popupLoad();
  }, 10);
};

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

  $(".aa-country-code").html(cc_html);

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

  $(".aa-input").on("change blur focus click", () => {
    generateAddAccountCode();
  });

  $(".at-input").on("change blur focus click", () => {
    generateAccountTopUpCode();
  });

  $("#account-topup-code, #account-topup-stand-alone-code").on(
    "focus click hover",
    () => {
      generateAccountTopUpCode();
    }
  );

  $(".quick-link-launcher").click(function () {
    const target = $(this).data("target");
    const url = $(this).data("url");

    const val = $(target).val();

    const final_url = url.replace("{LINK}", val);

    window.open(final_url, "_blank");
  });

  (px_html = ""),
    proxies.map((e) => {
      px_html += `<option value="${e.value}">${e.title}</option>`;
    });

  $("#proxy-select").html(px_html);

  chrome.proxy.settings.get({ incognito: false }, function (config) {
    if (config.value.mode == "fixed_servers") {
      $("#proxy-select").val(1);
    }
  });

  $("#apply-proxy").click(function () {
    const config_key = $("#proxy-select").val();

    const config = proxies[config_key].config;

    chrome.proxy.settings.set({
      value: config,
    });

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.update(tabs[0].id, { url: tabs[0].url });
    });

    window.close();
  });

  generateAddAccountCode();
  generateAccountTopUpCode();
  generateQANumbers();
  generateEndPoints();
  loadSettings();
};

const generateAddAccountCode = () => {
  const country_code = $("#aa-country-code").val();

  const email = $("#aa-email").val();
  const broker_code = $("#aa-broker-code").val();
  const account_type = $("#aa-account-type").val();
  const currency = $("#aa-currency").val();

  const code = `perl create_account.pl ${email} ${broker_code}  ${
    country_code && country_code.toLowerCase()
  }  ${currency} ${account_type} `;

  $("#add-account-code").val(code);

  // Hide Error Validation code
  const database_code = database_accounts[broker_code];

  const error_validation_code = `echo $"drop trigger validate_transaction_time_trg on transaction.transaction" | sudo -u pgadmin psql -U pgadmin service=${database_code}`;

  $("#hide_error_validation").val(error_validation_code);
};

const generateAccountTopUpCode = () => {
  const input_account_id = $("#at-account-id").val();
  let amount = $("#at-amount").val();
  const { balance, currency } = eManager.client_details;
  const account_id = eManager.account_id;

  const is_current_account = input_account_id === account_id;
  const msg = is_current_account
    ? `Current Balance: ${balance} ${currency}`
    : "Automated computation for the total balance is not applicable";

  $("#at-amount-msg").html(msg);

  if (is_current_account) {
    if (typeof topup_balance_loaded == "undefined") {
      $("#at-amount").val(balance);
      topup_balance_loaded = true;
    }

    const float_amount = parseFloat(amount);
    const float_balance = parseFloat(balance);
    const required_amount = float_amount - float_balance;

    amount =
      float_balance < float_amount ? required_amount : required_amount * 1;
  }

  amount = parseFloat(amount).toFixed(2);

  const code = `top-up ${input_account_id} ${$(
    "#at-currency"
  ).val()} ${amount}`;

  const top_up = `top-up () {
    perl -MTest::MockTime=set_fixed_time -MBOM::User::Client -e '
    @ARGV==3 or die "top-up loginid currency amount
    ";
    set_fixed_time(split /, */, $ENV{FIXED_TIME}) if $ENV{FIXED_TIME};
    my $trx=BOM::User::Client::get_instance({loginid=>$ARGV[0]})
    ->payment_legacy_payment(
    currency=>$ARGV[1],
    amount=>$ARGV[2],
    payment_type=>"ewallet",
    remark=>"tf",
    staff=>"tf",
    );
    print "your balance is now $ARGV[1] ".$trx->{balance_after}."
    ";
    ' "$@"
    }
    `;

  const stand_alone_code = top_up + " " + code;

  $("#account-topup-code").val(code);
  $("#account-topup-stand-alone-code").val(stand_alone_code);
};

const generateQANumbers = () => {
  const pre_selected = 10;

  let options = "";

  for (x = 1; x < 100; x++) {
    options += `<option value="${x}" ${
      pre_selected == x ? "selected" : ""
    }>${x}</option>`;
  }

  $(".qa-box-input").html(options);
};

const generateEndPoints = () => {
  let options = "";

  Object.keys(end_points).forEach((key) => {
    const value = end_points[key];
    options += `<option value="${value}">${key}</option>`;
  });

  $(".endpoints-box-select").html(options);
};

const offlineActions = () => {
  if (window.is_offline) {
    $(".header .logo").hide();
  }
};

const loadSettings = () => {
  $("#dark-mode-switcher").click(() => {
    const isChecked = $("#dark-mode-input").is(":checked");
    let dark_theme = null;

    if (!isChecked) {
      $("body").addClass("dark-theme");
      dark_theme = "1";
    } else {
      $("body").removeClass("dark-theme");
      dark_theme = "0";
    }

    localStorage["dark_theme"] = dark_theme;
  });
};

// Theme
const applyDarkTheme = () => {
  const is_dark_theme = localStorage["dark_theme"];

  if (is_dark_theme === "1") {
    $("#dark-mode-input").prop("checked", true);
    $("body").addClass("dark-theme");
  }
};

applyDarkTheme();

/*

function getCookie(cName) {
      const name = cName + "=";
      const cDecoded = decodeURIComponent(document.cookie); //to be careful
      const cArr = cDecoded .split('; ');
      let res;
      cArr.forEach(val => {
          if (val.indexOf(name) === 0) res = val.substring(name.length);
      })
      return res;
}


JSON.parse(JSON.parse(getCookie("website_status")).website_status)


*/
