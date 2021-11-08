const page_app_id_generator = `
<div class="app-section" id="app-id-generator">
    ${page_back_button}
    <h4>App ID Generator</h4>

    <div id="aig-p1">
        <div class="form-group">
            <label for="">Prefix</label>
            <input type="text" class="form-control" id="prefix" placeholder="" value="Dtools" />
        </div>
        <div class="form-group">
            <label for="">App Link</label>
            <input type="text" class="form-control" id="link" placeholder="Enter Link" />
        </div>
        <button type="submit" class="btn btn-primary" id="app-id-query-generator-btn">
            Generate
        </button>
    </div>

    <div id="aig-p2">
        <div class="form-group">
            <label for="link">APP ID (Deriv)</label>
            <div class="code-box">
                <textarea class="form-control code big" id="app-id-deriv" readonly></textarea>
            </div>

            <label for="link">APP ID (Binary)</label>
            <div class="code-box">
                <textarea class="form-control code big" id="app-id-binary" readonly></textarea>
            </div>

            <label for="link">APP ID (Webtrader Binary)</label>
            <div class="code-box">
                <textarea class="form-control code big" id="app-id-webtrader" readonly></textarea>
            </div>
        </div>

        <div class="footer-btn">
            <button type="submit" class="btn btn-primary" id="generate-id-again">
                Change URL
            </button>
        </div>
    </div>
</div>
`;