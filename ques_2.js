//Reading a File 

const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
    } else {
        console.log("File content:", data);
    }
});

console.log("Read file operation started.");


/*output
Read file operation started.
File content: This is a sample text in example.txt file.
*/

//writing a file

const fs = require('fs');

const content = "This is a new file created using fs module in Node.js";

fs.writeFile('newfile.txt', content, (err) => {
    if (err) {
        console.error("Error writing to file:", err);
    } else {
        console.log("File has been written successfully.");
    }
});

console.log("Write file operation started.");

/*output
Write file operation started.
File has been written successfully.
*/