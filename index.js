var readlineSync=require('readline-sync');
var chalk=require('chalk');
const log= console.log;
const correctAns= chalk.whiteBright.bold.bgBlue;
const wrong = chalk.whiteBright.bold.bgRed;
const level= chalk.black.italic.bold.bgGreenBright;
const underline= chalk.redBright;
const question_style=chalk.whiteBright;
var score=0;
var name=readlineSync.question("Please enter your name: ");
log(chalk.white.bgMagentaBright.bold.underline("------------Welcome "+name+" to HOW WELL DO YOU KNOW GANGA?------------ "));                log("\n ");                
log(chalk.bgYellowBright.black.italic.bold("INSTRUCTION: \n  The following quiz is created to know who knows GANGA the best. \n 1.The quiz consists of 5 questions. \n 2.Each correct answer carries 1 point and no points for incorrect answers \n "));
log("\n ");  
log(underline("----------------------------------------------------------------------"));


log("Thanks for playing");

