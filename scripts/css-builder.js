const fs = require("fs");
const stripCssComments = require("strip-css-comments");

const css_source_dir = "./assets/styles";
const css_output_dir = "./assets/scripts/app/functions";
const css_contents = [];

const log = (m) => {
  console.log(
    `%c CSS Builder: %c ${m} `,
    "color: #ff444f;font-weight:bold",
    "color:white"
  );
};

fs.readdir(css_source_dir, (err, files) => {
  files.forEach((file) => {
    const full_path = `${css_source_dir}/${file}`;

    fs.readFile(full_path, "utf8", (err, data) => {
      css_contents.push(data);

      if (css_contents.length === files.length) {
        generateCssBuilder();
      }
    });
  });
});

const generateCssBuilder = () => {
  const contents = stripCssComments(css_contents.join(""), {
    preserve: false,
  });

  const css = contents.split("\n");
  const code = `const css = [${css.map((e) => {
    return "'" + escape(e) + "' \n";
  })}];
  const head = document.head || document.getElementsByTagName("head")[0];
  const style = document.createElement("style");
  head.appendChild(style);
  style.appendChild(document.createTextNode(css.map(e => unescape(e)).join("")));
  `;

  fs.writeFile(`${css_output_dir}/css-builder.js`, code, () => {
    log("css-builder.js has been generated!");
  });
};
