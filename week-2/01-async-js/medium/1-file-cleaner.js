const fs = require('fs');

// Read the file contents
const fileContent = fs.readFileSync('./1-file-cleaner.md', 'utf8');

// Remove extra spaces
const newFileContent = fileContent.replace(/\s+/g, ' ');

// Write the new file contents
fs.writeFileSync('file.txt', newFileContent, 'utf8');