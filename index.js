#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter the First Number: ",
        type: "number",
        name: "firstNumber",
    },
    {
        message: "Enter the Second Number: ",
        type: "number",
        name: "secondNumber",
    },
    {
        message: "Select one of the operators to perform operation ",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.operator === "Addition") {
    let result = answer.firstNumber + answer.secondNumber;
    console.log(result);
}
else if (answer.operator === "Subtraction") {
    let result = answer.firstNumber - answer.secondNumber;
    console.log(result);
}
else if (answer.operator === "Multiplication") {
    let result = answer.firstNumber * answer.secondNumber;
    console.log(result);
}
else if (answer.operator === "Division") {
    let result = answer.firstNumber / answer.secondNumber;
    console.log(result);
}
