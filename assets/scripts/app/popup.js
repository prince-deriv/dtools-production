// Popup Extension Page loader

const page_template = getPage();

setTimeout(() => {
  $("body").html(page_template);
}, 1200);

injectCss();
initFunctions();
