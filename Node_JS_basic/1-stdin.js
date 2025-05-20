const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Welcome to Holberton School, what is your name?\n", (answer) => {
  const name = answer.trim();

  if (!/^[a-zA-Z\s\-']+$/.test(name)) {
    console.log("Invalid name. Please use only letters, spaces, hyphens or apostrophes.");
    rl.close();
    process.exit(1);
  }

  console.log(`Your name is: ${answer}`);
  rl.close();

  if (!process.stdin.isTTY) {
    console.log("This important software is now closing");
  }
});
