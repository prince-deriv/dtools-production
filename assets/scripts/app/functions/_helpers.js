const cleanKey = (key, prefix = "") => {
  return key.replace(`dtools_${prefix}`, "");
};

const getUnix = () => {
  return Math.floor(new Date().getTime() / 1000);
};

const close = () => {
  window.close();
};

const launch = (file) => {
  const popupWindow = window.open(
    chrome.extension.getURL(`popup.html`),
    file,
    `resizable=0,width=${window_sizes[file][0]},height=${window_sizes[file][1]}`
  );

  window.close();
};

const selectMenu = (e) => {
  const popups = [];

  if (popups.includes(e)) {
    launch(e);
  } else {
    $(".app-section").hide();
    $(`#${e}`).css("display", "flex");
  }

  if (e != "menu") {
    $(".top-icon-box").hide();
  } else {
    $(".top-icon-box").show();
  }
};
