const pageHandler = (e) => {
  switch (e) {
    case "endpoint":
      {
        $("#endpoint-server").val(eManager.server_url);
        $("#endpoint-app-id").val(eManager.app_id);
        $("#enable-dashboard").prop("checked", eManager.is_dashboard == "true");
        $("#enable-service-worker").prop(
          "checked",
          eManager.debug_service_worker == "1"
        );
      }
      break;
    case "top-up":
      {
        $(".account-id-input").val(eManager.account_id);
        generateAccountTopUpCode();
      }
      break;
    case "app-id-generator":
      {
        chrome.storage.local.get("app_link", function (value) {
          $("#link").val(value["app_link"]);
        });
      }
      break;
    case "settings":
      {
        loadSettings();
      }
      break;
    case "country-code":
      {
        const { country_code } = cookieManager;
        $("#cc-country-code").val(country_code.toUpperCase());
      }
      break;
    case "deriv-static":
      {
        $("#login-to-account").hide();
        $("#logout-to-account").hide();

        const client_key = "deriv_client";
        const auto_login_key = "auto_login";

        const text_fields = ["email", "first_name", "last_name"];

        chrome.storage.local.get(
          [client_key, auto_login_key],
          function (value) {
            const client_info = value[client_key];
            const auto_login = value[auto_login_key];

            if (auto_login !== "off") {
              $("#auto-login-input").prop("checked", true);
            }

            let data_html = `<thead>
                  <th>Key</th>
                  <th>Value</th>
               </thead>
               <tbody>`;

            Object.keys(client_info).forEach((k) => {
              const value = client_info[k];

              let data_value = value;

              if (text_fields.includes(k)) {
                data_value = `<input dl-input type="text" id="dl-${k.toLowerCase()}" value="${value}"/>`;
              }
              if (k === "currency") {
                data_value = `<select type="text" class="dl-input dl-generic-select generic-currency" id="dl-currency" data-value="${value}"></select>`;
              }
              if (k === "landing_company_shortcode") {
                data_value = `<select type="text" class="dl-input dl-generic-select generic-landing-company" id="dl-landing_company_shortcode" data-value="${value}"></select>`;
              }
              if (k === "residence") {
                data_value = `<select type="text" class="dl-input dl-generic-select generic-country-code" id="dl-residence" data-value="${value.toUpperCase()}"></select>`;
              }

              data_html += `<tr>
                <td>${k}</td>
                <td>${data_value}</td>
              </tr>`;
            });

            data_html += "</tbody>";

            $("#local-account").html(data_html);

            generateDropdowns();

            $(".dl-generic-select").each((i, o) => {
              const val = $(o).data("value");
              $(o).val(val);
            });

            // Onchange Handlers

            Object.keys(client_info).forEach((k) => {
              $(`#dl-${k}`).on("keyup keydown click change", () => {
                let new_client_info = client_info;
                Object.keys(client_info).forEach((k) => {
                  let new_value = $(`#dl-${k}`).val();

                  if (k === "residence") {
                    new_value = new_value.toLowerCase();
                  }

                  new_client_info[k] = new_value;
                });

                chrome.tabs.query(
                  { currentWindow: true, active: true },
                  function (tabs) {
                    var activeTab = tabs[0];
                    chrome.tabs.sendMessage(activeTab.id, {
                      action: "updateDerivLocalCookie",
                      data: {
                        new_client_info,
                      },
                    });
                  }
                );
              });
            });

            $("#auto-login-switcher").click(() => {
              const is_checked = $("#auto-login-input").is(":checked");

              chrome.tabs.query(
                { currentWindow: true, active: true },
                function (tabs) {
                  var activeTab = tabs[0];
                  chrome.tabs.sendMessage(activeTab.id, {
                    action: "changeAutoLogin",
                    data: {
                      is_checked: !is_checked,
                    },
                  });
                }
              );
            });
          }
        );
      }
      break;
    case "git-file-merger":
      {
        const fileMergerGenerateCode = () => {
          const now = new Date();
          const epoch = Math.round(now.getTime() / 1000);
          const files = $("#fm-file-names").val().split(",");
          const pr_id = $("#fm-pr-id").val();
          const branch_name = `file-merger-${epoch}`;

          let patch = ``;

          files.forEach((f) => {
            patch += `git checkout --patch ${branch_name} ${f};`;
          });

          const final_code = `git fetch upstream pull/${pr_id}/head:${branch_name}; ${patch} `;

          $("#git-file-merger-code").val(final_code);
        };

        $(".fm").on("change blur focus click", () => {
          fileMergerGenerateCode();
        });
      }
      break;
    case "mail-manager":
      {
        mailManager.load();
      }
      break;
    case "release-manager":
      {
        const date_object = new Date();
        const month = date_object.getUTCMonth() + 1; //months from 1-12
        const day = date_object.getUTCDate();
        const year = date_object.getUTCFullYear();

        const date = `${year}${month}${day}`;
        const version = `V${date}`;
        const tag_version = `production_${version}`;

        $("#rm-version").val(version);
        $("#rm-tag-version").val(tag_version);
      }
      break;
    case "quick-login":
      {
        const quick_login_url = "quick-login-url";
        $("#quick-login-btn").click(() => {
          const url = $("#ql-url").val();

          popupCenter({ url, title: "quick-login", w: 500, h: 700 });

          chrome.storage.local.set({ [quick_login_url]: url });
        });

        chrome.storage.local.get([quick_login_url], function (value) {
          const default_url = value[quick_login_url];

          $("#ql-url").val(default_url);
        });
      }
      break;
    case "cat-dog":
      {
        // Pet controls
        $(".pet-item").click(function (i) {
          const pet_type = $(i.currentTarget).data("pet");

          window.open(
            `https://www.google.com/search?q=${pet_type}&paw=1`,
            "catdog"
          );
        });
      }
      break;
    case "anti-phish":
      {
        const renderAllowedDomains = (allowedDomains) => {
          $("#allowred-urls").html("");

          allowedDomains.forEach((d) => {
            const domainItem = ` <tr>
            <td width="100%">${d}</td>
            <td width="10">
               <i class="fa fa-times delete-allowed-domain delete-icon" data-id="${d}"></i>
            </td>
           </tr>`;

            $("#allowred-urls").append(domainItem);

            $(".delete-allowed-domain").click(function () {
              const url = $(this).data("id");

              const newAllowedDomains = allowedDomains.filter(
                (item) => item !== url
              );

              chrome.storage.local.set({
                allowed_domains: newAllowedDomains.join(","),
              });

              renderAllowedDomains(newAllowedDomains);
            });
          });
        };

        chrome.storage.local.get("allowed_domains", function (value) {
          const domains = value["allowed_domains"];

          if (domains) {
            allowedDomains = domains.split(",");

            renderAllowedDomains(allowedDomains);
          }
        });
      }
      break;
  }
};
