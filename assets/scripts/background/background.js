chrome.tabs.onActivated.addListener(function (activeInfo) {
  messageManager("fetchEndPoint");
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  messageManager("fetchEndPoint");
});

const messageManager = (action, data) => {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {
      action,
      data,
    });
  });
};
