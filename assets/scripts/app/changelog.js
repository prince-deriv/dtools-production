const changelog = [
  {
    version: "1.1.1",
    date: "July 11 2021",
    added: [
      "Profile details",
    ],
    updated: ["incorrect options on account manager"],
    description:
      "<strong>Dtools</strong> will now use your Deriv information. Any tools that required your personal details will auto fill it for you.",
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
        </div>
    `;
  });

  return html;
};
