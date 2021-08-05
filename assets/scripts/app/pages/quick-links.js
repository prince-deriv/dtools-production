const page_quick_links = `
<div class="app-section" id="quick-links">
    ${page_back_button}
    <h4>Quick Links</h4>
    <div class="form-group">
        <div class="input-group mb-3 small-input-group">
        <div class="input-group-prepend">
            <label class="input-group-text" for="qa-box-select">QA Box</label>
        </div>
        <select class="custom-select qa-box-input" id="qa-box-select">
        </select>
        <button class="btn btn-primary quick-link-launcher" data-target="#qa-box-select" data-url="https://qa{LINK}.deriv.dev/ide/ide.html">Launch</button>
        </div>
    </div>

    <div class="form-group">
        <div class="input-group mb-3 small-input-group">
        <div class="input-group-prepend">
            <label class="input-group-text" for="qa-box-select">QA Emails</label>
        </div>
        <select class="custom-select qa-box-input" id="qa-email-select">
        </select>
        <button class="btn btn-primary quick-link-launcher" data-target="#qa-email-select" data-url="https://qa{LINK}.deriv.dev/emails/">Launch</button>
        </div>
    </div>
</div>
`;
