const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

console.log("Welcome to your search history analytics program")
while (1)
{
    var choice;

    rl.question('What do you wish to do ?\n - 1 = Search for a page\n - 2 = ', (answer) => {
        choice = answer;
        console.log(``);
      });
}


