const page_deriv_static = `
<div class="app-section" id="deriv-static">
${page_back_button}
<h4>Deriv Local Login</h4>

  <div class="form-group">
    <table id="local-account" width="100%" border="1">
    </table>
  </div>
  <div class="footer-btn">
    <button type="submit" class="btn btn-primary" id="login-to-account">
        Login
    </button>
    <button type="submit" class="btn btn-gray" id="logout-to-account">
        Logout
    </button>
  </div>

  <div class="form-group settings-form">
    <label>Auto Login</label>
    <label class="toggle">
        <input class="toggle-checkbox" id="auto-login-input" type="checkbox">
        <div class="toggle-switch" id="auto-login-switcher"></div>
    </label>
  </div>
</div>
`;
