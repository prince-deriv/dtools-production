const menu_pages = [
  page_add_account,
  page_app_id_generator,
  page_endpoint_manager,
  page_market_controller,
  page_proxy_manager,
  page_quick_links,
  page_topup,
];

const popup_pages = [];

const renderMenuPages = () => {
  let pages = "";

  menu_pages.map((page) => {
    pages += page;
  });

  return pages;
};

const pages = {
  "": `
    <section class="main-container">
      ${page_header}
      ${window.is_offline ? page_offline_banner : page_profile}  
    
      <div class="body-container">
          <div class="app-section" id="menu">
              <div class="box-menu-container">
                  ${renderMenu()}
              </div>
          </div>
          <div class="app-section np" id="changelog">
              <i class="fas fa-arrow-left icon back-btn"></i>
              <div id="changelog-container">
                  <h4 class="w-divider">Change Log</h4>
                  ${renderChangeLogs()}
              </div>
          </div>
          ${renderMenuPages()}
      </div>
  </section>
  `,
  popup_page: `
  <section class="main-wrapper">
    <section class="main-container market-controller">
    ${page_header} 
     
    </section>
  </section>`,
};

const getPage = () => {
  return pages[page_name];
};
