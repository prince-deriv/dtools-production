const page_topup = `
<div class="app-section" id="top-up">
    ${page_back_button}
    <h4>Account Top-Up</h4>
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
        <span id="at-amount-msg" class="note-msg"></span>
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

    <div class="form-group">
        <label for="link">Stand-alone Code</label>
        <div class="code-box">
        <textarea
            class="form-control code big"
            id="account-topup-stand-alone-code"
            readonly
        ></textarea>
        </div>
    </div>
    </div>
</div>
`;
