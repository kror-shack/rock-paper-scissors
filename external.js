let computerInput;
let userScore = 0;
let computerScore = 0;
let userInput;
let z=0;

function computerPlay(){
    let x = Math.floor(Math.random()*3+1);
        if(x == 1){
        computerInput = "rock";
         }
         else if(x == 2){
        computerInput = "paper";
         }
         else if(x == 3){
        computerInput = "scissors"
            }
    return computerInput;
    }

function oneGame(xe,ye){
       if ( userInput == computerInput){
       alert("That is a Draw!")
       z++;
       }
       else if(userInput == "rock" && computerInput == "paper"){
       alert("The Computer Wins!")
       computerScore++;
       z++;
        }
       else if(userInput == "scissors" && computerInput == "rock"){
       alert("The Computer Wins!")
       computerScore++;
       z++;
        }
        else if(userInput == "paper" && computerInput == "rock"){
        alert("You Win!")
         userScore++;
         z++;
         }
        else if(userInput == "rock" && computerInput == "scissors"){
        alert("You Win!")
        userScore++;
        z++;
        }
        else if(userInput == "paper" && computerInput == "scissors"){
        alert("The Computer Wins!")
         computerScore++;
         z++;
        }
        else if(userInput == "scissors" && computerInput == "paper"){
        alert("You Wins!")
         userScore++;
         z++;
        }
    }
 
for(let i = 5; i > z;){
       userInput = prompt("Please choose your weapon:", " ");
    if(userInput == "rock" || userInput == "paper" || userInput == "scissors"){
            oneGame(userInput,computerPlay());
    }
    else{
        alert("Please pick a valid weapon: " + "\\n" + "Rock / Paper / Scissors");
    }
}
if(userScore > computerScore){
        alert("You won " + userScore + "-" + computerScore)
    }
else if(computerScore > userScore){
        alert("The computer wins "  + userScore + "-" + computerScore)
    }
else if(computerScore == userScore){
    alert("It's a draw "  + userScore + "-" + computerScore)
}