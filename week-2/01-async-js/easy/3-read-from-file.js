var fs = require("fs");

fs.readFile("./3-read-from-file.md", "utf-8", function (err, data) {
  console.log(data);
});
console.log("Hello wortld");
