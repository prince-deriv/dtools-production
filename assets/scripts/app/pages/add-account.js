const page_add_account = `
<div class="app-section" id="add-account">
${page_back_button}
<h4>Generate Account</h4>
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
  <label for="">Password</label>
  <input
    type="email"
    class="form-control aa-input"
    id="aa-password"
    placeholder=""
    value="Abcd1234"
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
      class="form-control aa-input aa-country-code"
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
    <label for="link">Code (Old QA)</label>
    <div class="code-box">
      <textarea
        class="form-control code mid"
        id="add-account-code"
        readonly
      ></textarea>
    </div>
  </div>

  <div class="form-group">
  <label for="link">Code (New QA)</label>
  <div class="code-box">
    <textarea
      class="form-control code mid"
      id="add-account-new-code"
      readonly
    ></textarea>
  </div>
</div>

  <div class="form-group">
    <label for="link">Generate Perl File</label>
    <div class="code-box">
      <textarea
        class="form-control code big"
        readonly
      >curl -o ./create_account.pl  -k https://prince-deriv.github.io/dtools/files/create_account.pl</textarea>
    </div>
  </div>

  <div class="form-group">
  <label for="link">Hide Error Validation</label>
  <div class="code-box">
    <textarea
      id="hide_error_validation"
      class="form-control code big"
      readonly
    ></textarea>
  </div>
</div>
</div>
`;
