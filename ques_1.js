//blocking code

const fs = require('fs');

console.log("Blocking code starts");

const data = fs.readFileSync('example.txt', 'utf8');  
console.log(data);

console.log("Blocking code ends");

/*output
Blocking code starts
Hello from the file
Blocking code ends
*/

//non blocking code

const fs = require('fs');

console.log("Before reading file...");

fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file", err);
    } else {
        console.log("File content: ", data);
    }
});

console.log("After reading file...");


/*output
Before reading file...
After reading file...
File content: Hello, World!
*/