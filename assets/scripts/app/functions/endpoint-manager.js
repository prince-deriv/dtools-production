const eManager = {
    app_id: null,
    server_url: null,
    account_id: null,
    is_dashboard: null,
    debug_service_worker: null,
    manageStorage: async () => {
      [
        "server_url",
        "app_id",
        "account_id",
        "is_dashboard",
        "debug_service_worker",
      ].map((key) => {
        chrome.storage.local.get(key, function (value) {
          const val = value[key];
          eManager[key] = val;
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
        eManager.manageStorage();
      }
    );
  });