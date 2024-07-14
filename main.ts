#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.rgb(204, 204, 204)(`\n \t\t <<<======================================================>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`<<<===============>>>  ${chalk.bold.hex("#9999FF")(`Welcome To 'CodeWithEman' Quiz system App  <<<================>>>`)}`));
console.log(chalk.bold.rgb(204, 204, 204)(`\t\t <<<======================================================\n`));

const quiz: {
    question_1: string;
    question_2: string;
    question_3: string;
    question_4: string;
    question_5: string;
} = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: chalk.blue("Q1. What is the correct way to check if two values are not equal in TypeScript?"),
        choices: ["a == b", "a === b", "a = b", "a !== b"]
    },
    {
        name: "question_2",
        type: "list",
        message: chalk.blue("Q2. Which of the following characters is commonly allowed in variable names in TypeScript?"),
        choices: ["$", "@", "#", "&"]
    },
    {
        name: "question_3",
        type: "list",
        message: chalk.blue("Q3. Which operator is commonly used for string concatenation in TypeScript?"),
        choices: ["+", "-", "*", "/"]
    },
    {
        name: "question_4",
        type: "list",
        message: chalk.blue("Q4. In TypeScript, which symbol is commonly used to terminate a statement?"),
        choices: [".", ":", ";", ","]
    },
    {
        name: "question_5",
        type: "list",
        message: chalk.blue("Q5. Which method of inquirer.js is used to start the prompt interface and receive user input?"),
        choices: ["start()", "prompt", "init()", "run()"]
    }
]);

let score: number = 0;

switch (quiz.question_1) {
    case "a !== b":
        console.log(chalk.green("1. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red("1. Incorrect!"));
}
console.log(chalk.yellow("---------------------"));

switch (quiz.question_2) {
    case "$":
        console.log(chalk.green("2. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red("2. Incorrect!"));
}
console.log(chalk.yellow("---------------------"));

switch (quiz.question_3) {
    case "+":
        console.log(chalk.green("3. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red("3. Incorrect!"));
}
console.log(chalk.yellow("---------------------"));

switch (quiz.question_4) {
    case ";":
        console.log(chalk.green("4. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red("4. Incorrect!"));
}
console.log(chalk.yellow("---------------------"));

switch (quiz.question_5) {
    case "prompt":
        console.log(chalk.green("5. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red("5. Incorrect!"));
}
console.log(chalk.yellow("---------------------"));

console.log(chalk.blue(`Score: ${score}`));




