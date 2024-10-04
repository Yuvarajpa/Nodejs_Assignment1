//REPL Program to Find Odd or Even Number
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkOddOrEven(number) {
    if (isNaN(number)) {
        console.log("That's not a valid number.");
    } else if (number % 2 === 0) {
        console.log(`${number} is an even number.`);
    } else {
        console.log(`${number} is an odd number.`);
    }
}

function startREPL() {
    rl.question("Enter a number (or type 'exit' to quit): ", (input) => {
        if (input.toLowerCase() === 'exit') {
            console.log('Exiting...');
            rl.close();
        } else {
            const number = parseInt(input, 10);
            checkOddOrEven(number);
            startREPL();  
        }
    });
}

startREPL();

/*output
$ node oddEvenRepl.js
Enter a number (or type 'exit' to quit): 5
5 is an odd number.
Enter a number (or type 'exit' to quit): 8
8 is an even number.
Enter a number (or type 'exit' to quit): 13
13 is an odd number.
Enter a number (or type 'exit' to quit): exit
Exiting...
*/