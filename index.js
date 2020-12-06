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

var qna=
 [
  {
    ques:"1. What genre of songs does she like the most?\na.POP \nb.ROCK \nc.INDIE \n",
    ans:"c",
    print:"The correct answer was Indie music"
  },
  {
    ques:"2.  What is her favourite TV show?  \na.GAME OF THRONES\nb.FRIENDS \nc.THE WALKING DEAD\n" ,
    ans:"b",
    print:"The correct answer was FRIENDS"
  },
  {
    ques:"3. What is her favourite food \na.Biriyani \nb.Pizza \nc.Rice and curry \n" ,
    ans:"a",
    print:"The correct answer was Biriyani"
  },
  {
    ques:"4. Who is her favourite actor?\na.Sharukh Khan \nb.Hrithik Roshan\nc.Aamir Khan \n ",
    ans:"c",
    print:"The correct answer was Aamir Khan"
  },
  {
    ques:"5. What type of movie does she like the most? \na.Horror \nb.Comedy \nc.Romantic \n",
    ans:"a",
    print:"The correct answer was Horror"
  }];

function quiz1(question,answer)
{
  var userAns=readlineSync.question(question_style(question));
  if(userAns===answer)
  {
    log(correctAns("You are right!"));
    score++;
  }
else
  log(wrong("Sorry you are wrong!"));
}
//main program
for(var i=0;i<5;i++) {
    var currentQuestion = qna[i];
   quiz1(currentQuestion.ques, currentQuestion.ans);
   log(currentQuestion.print);
  }

log("Your TOTAL SCORE is : ", score);
log("\n");
log("HIGH SCORES: \n ");
var highest=5;
log("1. Ganga - 5 \n");

if(score<=highest)
{
  var second_highest=score;
  log("2. "+ name +" - "+ score +"\n");
}

log("Thanks for playing");