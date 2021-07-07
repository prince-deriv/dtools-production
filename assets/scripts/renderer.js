alert("Rendering Dtools");

const popup_template = `
<section class="main-container">
      <div class="header">
        <img class="logo" src="assets/images/icon.png" />
        <span class="app-name" id="app-name"></span>
      </div>
      <div class="app-section" id="menu">
        <div class="box-menu-container">
          <div class="box-item" data-target="app-id-generator">
            <i class="fas fa-hashtag icon"></i>
            <span class="text">App ID Generator</span>
          </div>
          <div class="box-item" data-target="endpoint">
            <i class="fas fa-hand-point-up icon"></i>
            <span class="text">Endpoint Manager</span>
          </div>
          <div class="box-item" data-target="add-account">
            <i class="fas fa-user icon"></i>
            <span class="text">Add Account</span>
          </div>
          <div class="box-item" data-target="top-up">
            <i class="fas fa-coins icon"></i>
            <span class="text">Account Top-Up</span>
          </div>
          <div class="box-item" data-target="market-controller">
            <i class="fas fa-balance-scale-right icon"></i>
            <span class="text">Market Controller</span>
          </div>
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
    </section>`;

console.log(popup_template);
