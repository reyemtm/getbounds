const minify = require("csso").minify;
const fs = require("fs");
const sourceFiles = fs.readdirSync("./themes/chota-grid/source/");
const cssFiles = sourceFiles.filter((file) => file.endsWith(".css") && !file.endsWith(".min.css"));

cssFiles.forEach((file) => {
  const css = fs.readFileSync(`./themes/chota-grid/source/${file}`, "utf8");
  const minifiedCss = minify(css).css;
  fs.writeFileSync(`./themes/chota-grid/source/${file.replace(".css", ".min.css")}`, minifiedCss);
});
