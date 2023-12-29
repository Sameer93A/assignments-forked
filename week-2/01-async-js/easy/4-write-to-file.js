var fs = require("fs");

fs.appendFile("./4-write-to-file.md", " This is my text.", function (err) {
  if (err) throw err;
  console.log("Updated!");
});
