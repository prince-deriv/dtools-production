const page_endpoint_manager = `
<div class="app-section" id="endpoint">
    ${page_back_button}
    <h4>API Endpoint</h4>
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

    <div class="form-group">
    <div class="form-check">
        <input class="form-check-input" type="checkbox" id="enable-dashboard">
        <label class="form-check-label" for="enable-dashboard">
        Enable Dashboard
        </label>
    </div>
    </div>

    <div class="form-group">
    <div class="form-check">
        <input class="form-check-input" type="checkbox" id="enable-service-worker">
        <label class="form-check-label" for="enable-service-worker">
        Enable Service Worker
        </label>
    </div>
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
`;
