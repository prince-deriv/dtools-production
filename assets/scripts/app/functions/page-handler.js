const pageHandler = (e) => {
  switch (e) {
    case "endpoint":
      {
        $("#endpoint-server").val(eManager.server_url);
        $("#endpoint-app-id").val(eManager.app_id);
        $("#enable-dashboard").prop("checked", eManager.is_dashboard == "true");
        $("#enable-service-worker").prop(
          "checked",
          eManager.debug_service_worker == "1"
        );
      }
      break;
    case "top-up":
      {
        $(".account-id-input").val(eManager.account_id);
        generateAccountTopUpCode();
      }
      break;
    case "app-id-generator":
      {
        chrome.storage.local.get("app_link", function (value) {
          $("#link").val(value["app_link"]);
        });
      }
      break;
    case "settings":
      {
        loadSettings();
      }
      break;
    case "country-code":
      {
        const { country_code } = cookieManager;
        $("#cc-country-code").val(country_code.toUpperCase());
      }
      break;
    case "deriv-static":
      {
        $("#login-to-account").hide();
        $("#logout-to-account").hide();

        chrome.storage.local.get("is_logged_in", function (value) {
          if (value["is_logged_in"]) {
            $("#login-to-account").hide();
            $("#logout-to-account").show();
          } else {
            $("#login-to-account").show();
            $("#logout-to-account").hide();
          }
        });
      }
      break;
    case "mail-manager":
      {
        mailManager.load();
      }
      break;
  }
};
