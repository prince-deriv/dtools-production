// Popup Extension Page loader
const page_template = getPage();

setTimeout(() => {
  $("body").html(page_template);
  initFunctions();
}, 300);

injectCss();
