const cookieManager = {
  country_code: null,
  load: () => {
    ["country_code"].map((key) => {
      chrome.storage.local.get(key, function (value) {
        const val = value[key];

        cookieManager[key] = val;
      });
    });
  },
  init: () => {
    cookieManager.load();

    setInterval(() => {
      cookieManager.load();
    }, 10);
  },
};
