const changelog = [
  {
    version: "1.1.10",
    date: "September 6 2021",
    added: ["Added country & residence controls"],
    description:
      "Country & Residence controller feature allows to temporarily override cookie data instead of changing user residence or using VPN",
  },
  {
    version: "1.1.9",
    date: "September 2 2021",
    added: ["Added dark theme options in the settings"],
    description: "New page for settings.",
  },
  {
    version: "1.1.8",
    date: "August 29 2021",
    added: [
      "Ability to run local copy when no new updates from the live source code",
    ],
    description:
      "Speed up loading time by running local copy when no new updates instead of fetching everytime the extension popup is triggered.",
  },
  {
    version: "1.1.7",
    date: "August 24 2021",
    added: ["QA10 Default APP IDs"],
    description: "Quick select QA default end points",
  },
  {
    version: "1.1.6",
    date: "August 22 2021",
    added: ["Code for hiding error validation on account creation"],
    description:
      "Ability to turn off error validation in some QA boxes in order to proceed to normal account creation via perl scripts.",
  },
  {
    version: "1.1.5",
    date: "August 16 2021",
    added: ["offline mode", "automated perl file for creating account"],
    description:
      "Added a quick way to upload perl file responsible for creating accounts.",
  },
  {
    version: "1.1.4",
    date: "July 18 2021",
    added: ["stand alone code for top-up", "proxy settings"],
    description:
      "Added new feature proxy manager, allows chrome to gain proxy settings to access dedicated FE QA boxes",
  },
  {
    version: "1.1.3",
    date: "July 13 2021",
    added: ["enable dashboard checkbox", "enable service worker checkbox"],
    description:
      "Added dashboad and service worker control on end point manager",
  },
  {
    version: "1.1.2",
    date: "July 12 2021",
    added: ["Quick Links"],
    description: "Quick links for QA boxes",
  },
  {
    version: "1.1.1",
    date: "July 11 2021",
    added: ["Profile details"],
    fixed: ["incorrect options on account manager"],
    description:
      "<strong>Dtools</strong> will now use your Deriv information. Any tools that require your personal details will auto fill it for you.",
  },
  {
    version: "1.1.0",
    date: "July 8 2021",
    added: [
      "Changelog tab that displays all changes and bug fixes",
      "Auto update feature",
    ],
    updated: ["reduce files and file size."],
    description:
      "Code base refactor and self-update feature. Dtools will now automatically fetch new updates without repacking",
  },
  {
    version: "1.0.2",
    date: "June 17 2021",
    updated: [
      "App ID generator now only requires one code to copy and paste to generate app id",
    ],
    description: "Simplified code for generating app id",
  },
  {
    version: "1.0.1",
    date: "June 14 2021",
    added: ["Market controller feature"],
    updated: ["icons and popups"],
    description: "New tools and improved code base",
  },
];

const renderChangeLogs = () => {
  let html = "";

  changelog.map((log) => {
    html += `
        <div class="log-item">
            <span class="version">${log.version} - ${log.date}</span>
            <p class="desc">${log.description}</p>

            ${
              log.updated && log.updated.length
                ? `
                <div class="log-list">
                    <span class="log-title">Updated</span>
                    <ul>
                        ${log.updated.map((up) => {
                          return `<li>${up}</li>`;
                        })}
                    </ul>
                </div>
            `
                : ``
            }

            ${
              log.added && log.added.length
                ? `
                  <div class="log-list">
                      <span class="log-title">Added</span>
                      <ul>
                          ${log.added.map((ad) => `<li>${ad}</li>`).join("")}
                      </ul>
                  </div>
              `
                : ``
            }


            ${
              log.fixed && log.fixed.length
                ? `
                  <div class="log-list">
                      <span class="log-title">Fixed</span>
                      <ul>
                          ${log.fixed.map((fx) => `<li>${fx}</li>`).join("")}
                      </ul>
                  </div>
              `
                : ``
            }
        </div>
    `;
  });

  return html;
};
