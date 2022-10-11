var fs = require('fs');
// Append a file
fs.appendFile("newfile1.txt", "Hello content!", function(err) {
  if (err) throw err;
  console.log("newfile1.txt Saved!");
});
// Open a file for writing
fs.open("newfile2.txt", "w", function(err, file) {
  if (err) throw err;
  console.log(' newfile2.txt Saved!');
});

// replaces a file content, if not exist create a new one
fs.writeFile("newfile3.txt", "Node JS program.", function(err) {
  if (err) throw err;
  console.log("newfile3.txt saved!");
});

// Update file
fs.appendFile("newfile1.txt", "This is my text.", function(err) {
  if (err) throw err;
  console.log('newfile1.txt updated!');
});
// replace file content
fs.writeFile('newfile3.txt', 'This is new text.', function(err) {
  if (err) throw err;
  console.log('newfile3 replaced!');
});

// Delete a file
fs.unlink('newfile2.txt', function(err) {
  if (err) throw err;
  console.log('newfile2 deleted!');
});

// rename a file
fs.rename('newfile1.txt', 'renamedfile.txt', function(err) {
  if (err) throw err;
  console.log('newfile1 renamed!');
});
