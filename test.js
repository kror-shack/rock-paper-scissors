function oneGame(xe,ye){
     if ( userInput == computerInput){
     displayDraw();
    }
     else if(userInput == "paper" && computerInput == "rock"){
        userScore++;
        z++;
        displayUserWin();
      }
     else if(userInput == "rock" && computerInput == "scissors"){
        userScore++;
        z++;
        displayUserWin();
     }
     else if(userInput == "scissors" && computerInput == "paper"){
     userScore++;
     z++;
     displayUserWin();
     }
     else if(userInput == "rock" && computerInput == "lizard"){
        userScore++;
        z++;
        displayUserWin();
        }
     else if(userInput == "lizard" && computerInput == "spock"){
         userScore++;
         z++;
        displayUserWin();
        }
     else if(userInput == "spock" && computerInput == "scissors"){
         userScore++;
         z++;
         displayUserWin();
         }
    
     else if(userInput == "scissors" && computerInput == "lizard"){
         userScore++;
         z++;
         displayUserWin();
        }
     else if(userInput == "lizard" && computerInput == "paper"){
         userScore++;
         z++;
         displayUserWin();
         }
      else if(userInput == "paper" && computerInput == "spock"){
         userScore++;
         z++;
         displayUserWin();
         }
     else if(userInput == "spock" && computerInput == "rock"){
         computerScore++;
         z++;
         displayComputerWin();
         }
     else{
         computerScore++;
         z++;
         displayComputerWin();
         }

 }
