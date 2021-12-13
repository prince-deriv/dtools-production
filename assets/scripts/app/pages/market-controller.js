const page_market_controller = `
<div class="app-section" id="market-controller">
    ${page_back_button}
    <h4>Market Controller</h4>

    <div class="form-group">
        <label>Open Trading Days</label>
        <div class="code-box">
            <textarea class="form-control code big" readonly>sudo vi regentmarkets/cpan/local/lib/perl5/auto/share/dist/Finance-Exchange/exchanges_trading_days_aliases.yml</textarea>
        </div>
        <label>Restart Services</label>
        <div class="code-box">
            <textarea class="form-control code big" readonly>
sudo service binary_rpc_redis_general restart; sudo service binary_websocket_api restart; sudo service binary_pricer_daemon restart; sudo service binary_starman_bom-backoffice restart
            </textarea>
        </div>
        <label>Clean Redis (Caching issue)</label>
        <div class="code-box">
            <textarea class="form-control code big" readonly>redis-cli -p 6360 keys '*trading_time*' | xargs redis-cli -p 6359 -a $(sudo cat /etc/rmg/redis-replicated.yml | grep -oP  -m 1  '((?<=password:).*)') del</textarea>
        </div>
    </div>
</div>
`;
