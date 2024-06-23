// Project Quiz System:
// This app will show you multiple choice questions and promt the user to reply.
// In the end it will show you the result of the quiz.
import inquirer from "inquirer";
console.log("welcome to my advanture quiz game:");
console.log("you are required to gain maximum 4 points for the window.");
let points = 0;
//Question 1:
let question1 = await inquirer.prompt([
    {
        name: "one",
        message: "typescript is a superset of?",
        type: "list",
        choices: ["python", "c++", "java", "javascript"]
    }
]);
if (question1.one == "javascript") {
    console.log("your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
//Question 2:
let question2 = await inquirer.prompt([
    {
        name: "two",
        message: "who is the founder of microsoft",
        type: "list",
        choices: ["elon musk", "mark zuckerburg", "bill gates", "jeff bezoz"]
    }
]);
if (question2.two == "bill gates") {
    console.log("your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
//Question 3:
let question3 = await inquirer.prompt([
    {
        name: "three",
        message: "What is the capital of Pakistan?",
        type: "list",
        choices: ["Karachi", "Islamabad", "Multan", "Quetta", "Peshawar"]
    }
]);
if (question3.three == "Islamabad") {
    console.log("your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
//Question 4:
let question4 = await inquirer.prompt([
    {
        name: "four",
        message: "Who is the current governer of Sindh",
        type: "list",
        choices: ["Raza ilhahi", "Kamran Tessori", "Ijaz Ali Shah"]
    }
]);
if (question4.four == "Kamran Tessori") {
    console.log("your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
//Question 5:
let question5 = await inquirer.prompt([
    {
        name: "five",
        message: "What is the international language?",
        type: "list",
        choices: ["English", "French", "Urdu", "Pashto", "Chinese"]
    }
]);
if (question5.five == "English") {
    console.log("your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
//Ourput conditions:
if (points >= 4) {
    console.log("Congratulations");
    console.log(`your points ${points}`);
}
else {
    console.log("You loss! better luck next time");
    console.log(`your points ${points}`);
}
