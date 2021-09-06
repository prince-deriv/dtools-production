const eManager = {
  app_id: null,
  server_url: null,
  account_id: null,
  is_dashboard: null,
  debug_service_worker: null,
  client_details: {
    balance: 0,
    currency: "USD",
  },
  manageStorage: async () => {
    [
      "server_url",
      "app_id",
      "account_id",
      "is_dashboard",
      "debug_service_worker",
      "client_details",
    ].map((key) => {
      chrome.storage.local.get(key, function (value) {
        const val = value[key];

        if (val !== undefined) {
          eManager[key] = val;
        }
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
