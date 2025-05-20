const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Welcome to Holberton School, what is your name?\n", (answer) => {
  const name = answer.trim();

  if (!/^[a-zA-Z\s\-']+$/.test(name)) {
    process.stdout.write("Invalid name. Please use only letters, spaces, hyphens or apostrophes.");
    rl.close();
    process.exit(1);
  }

  process.stdout.write(`Your name is: ${answer}\n`);
  rl.close();

  if (!process.stdin.isTTY) {
    process.stdout.write("This important software is now closing\n");
  }
});
