const page_name = window.name;

const header = `
    <div class="header">
        <img class="logo" src="${url}/assets/images/icon.png" />
        <span class="app-name" id="app-name"></span>
        ${
          page_name == ""
            ? `<span class="update-icon router-link" data-target="changelog">
          <i class="fas fa-bolt icon"></i>
        </span>`
            : ""
        }
    </div>`;

const profile = `
   <div class="profile-container">
        <img class="photo" />
        <div class="details">
          <span class="name"></span>
          <span class="email"></span>
        </div>
   </div>
`;    

const pages = {
  "": `
  <section class="main-container">
       ${header}
       ${profile}
       <div class="body-container">
          <div class="app-section" id="menu">
            <div class="box-menu-container">
                ${renderMenu()}
            </div>
          </div>
          <div class="app-section" id="endpoint">
            <i class="fas fa-arrow-left icon back-btn"></i>
    
            <h4>Change API Endpoint</h4>
            <div class="form-group">
              <label for="">Server:</label>
              <input
                type="text"
                class="form-control"
                id="endpoint-server"
                placeholder=""
                value=""
              />
            </div>
            <div class="form-group">
              <label for="">App ID:</label>
              <input
                type="text"
                class="form-control"
                id="endpoint-app-id"
                placeholder="App ID"
              />
            </div>
    
            <div class="footer-btn">
              <button type="submit" class="btn btn-primary" id="change-endpoint">
                Apply
              </button>
              <button type="submit" class="btn btn-info" id="qa-endpoint">
                QA
              </button>
              <button type="submit" class="btn btn-secondary" id="reset-endpoint">
                Reset
              </button>
            </div>
          </div>
          <div class="app-section np" id="changelog">
            <i class="fas fa-arrow-left icon back-btn"></i>
            <div id="changelog-container">
              <h4 class="w-divider">Change Log</h4>
              ${renderChangeLogs()}
            </div>
          </div>

        
          <div class="app-section" id="add-account">
            <i class="fas fa-arrow-left icon back-btn"></i>
    
            <h4>Generate Account</h4>
    
            <div>
              <div class="form-group">
                <label for="">Email</label>
                <input
                  type="email"
                  class="form-control aa-input"
                  id="aa-email"
                  placeholder="jane+doe@deriv.com"
                  value=""
                />
              </div>
              <div class="form-group">
                <label for="">Broker Code</label>
                <select
                  type="text"
                  class="form-control aa-input"
                  id="aa-broker-code"
                ></select>
              </div>
    
              <div class="form-group">
                <label for="">Country Code</label>
                <select
                  type="text"
                  class="form-control aa-input"
                  id="aa-country-code"
                ></select>
              </div>
    
              <div class="form-group">
                <label for="">Currency</label>
                <select
                  type="text"
                  class="form-control aa-input"
                  id="aa-currency"
                ></select>
              </div>
    
              <div class="form-group">
                <label for="">Account Type</label>
                <select
                  type="text"
                  class="form-control aa-input"
                  id="aa-account-type"
                ></select>
              </div>
    
              <div class="form-group">
                <label for="link">Code</label>
                <div class="code-box">
                  <textarea
                    class="form-control code"
                    id="add-account-code"
                    readonly
                  ></textarea>
                </div>
              </div>
    
              <div class="footer-btn">
                <a id="cloud-9-link" href="#" target="_blank">Cloud 9</a>
              </div>
            </div>
          </div>
          <div class="app-section" id="top-up">
            <i class="fas fa-arrow-left icon back-btn"></i>
            <h4>Account Top-Up</h4>
            <div>
              <div class="form-group">
                <label for="">Account ID</label>
                <input
                  type="text"
                  class="form-control at-input account-id-input"
                  id="at-account-id"
                  placeholder="CR90000001"
                  value=""
                />
              </div>
              <div class="form-group">
                <label for="">Currency</label>
                <select
                  type="text"
                  class="form-control at-input"
                  id="at-currency"
                ></select>
              </div>
    
              <div class="form-group">
                <label for="">Amount</label>
                <input
                  type="number"
                  class="form-control at-input"
                  id="at-amount"
                  placeholder=""
                  value="1000"
                />
              </div>
    
              <div class="form-group">
                <label for="link">Code</label>
                <div class="code-box">
                  <textarea
                    class="form-control code"
                    id="account-topup-code"
                    readonly
                  ></textarea>
                </div>
              </div>
            </div>
    
            <div class="footer-btn">
              <a id="cloud-9-link" href="#" target="_blank">Cloud 9</a>
            </div>
          </div>
        </div>
      </section>`,
  "app-id-generator": `
  <section class="main-container">
      ${header}
      <div
        class="app-section"
        id="app-id-generator"
        style="display: flex !important"
      >
        <h4>App ID Generator</h4>

        <div id="aig-p1">
          <div class="form-group">
            <label for="">Prefix</label>
            <input
              type="text"
              class="form-control"
              id="prefix"
              placeholder=""
              value="Dtools"
            />
          </div>
          <div class="form-group">
            <label for="">App Link</label>
            <input
              type="text"
              class="form-control"
              id="link"
              placeholder="Enter Link"
            />
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            id="app-id-query-generator-btn"
          >
            Generate
          </button>
        </div>

        <div id="aig-p2">
          <div class="form-group">
            <label for="link">APP ID (Deriv)</label>
            <div class="code-box">
              <textarea
                class="form-control code big"
                id="app-id-deriv"
                readonly
              ></textarea>
            </div>

            <label for="link">APP ID (Binary)</label>
            <div class="code-box">
              <textarea
                class="form-control code big"
                id="app-id-binary"
                readonly
              ></textarea>
            </div>
          </div>

          <div class="footer-btn">
            <button
              type="submit"
              class="btn btn-primary"
              id="generate-id-again"
            >
              Generate Again
            </button>
            <a href="https://qa10.deriv.dev/ide/ide.html" target="_blank"
              >Cloud 9</a
            >
          </div>
        </div>
      </div>
    </section>`,
  "market-controller": `
    <section class="main-container">
    ${header}
      <div
        class="app-section"
        id="market-controller"
        style="display: flex !important"
      >
        <h4>Market Controller</h4>

        <div class="form-group">
          <label>Open Trading Days</label>
          <div class="code-box">
            <textarea class="form-control code no-scroll" readonly>
sudo vi regentmarkets/cpan/local/lib/perl5/auto/share/dist/Finance-Exchange/exchanges_trading_days_aliases.yml</textarea
            >
          </div>
          <label>Restart Services</label>
          <div class="code-box">
            <textarea class="form-control code no-scroll" readonly>
sudo service binary_rpc_redis_general restart; sudo service binary_websocket_api restart; sudo service binary_pricer_daemon restart; sudo service binary_starman_bom-backoffice restart</textarea
            >
          </div>
        </div>

        <div class="footer-btn">
          <a href="https://qa37.deriv.dev/ide/ide.html" target="_blank"
            >Cloud 9 - QA37</a
          >
        </div>
      </div>
    </section>`,
};

const getPage = () => {
  return pages[page_name];
};
