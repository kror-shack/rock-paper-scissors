let computerInput;
const containerTwo = document.querySelector('.containerTwo');
const containerThree = document.querySelector('.containerThree')
let userInput;
let userScore = 0;
let computerScore = 0;
let z=0;

/* To get computer turn*/
    function computerPlay(){
        let x = Math.floor(Math.random()*5+1);
        if(x == 1){
        computerInput = "rock";
         }
         else if(x == 2){
        computerInput = "paper";
         }
         else if(x == 3){
        computerInput = "scissors"
            }
        else if(x == 4){
         computerInput = "lizard";
          }
         else if(x == 5){
         computerInput = "spock"
                }
            return computerInput;
            
    }

    function displayUserWin(){
        const userWins = document.createElement('p');
        userWins.textContent = "The computer played " + computerInput + ". You Win!";
        containerTwo.appendChild(userWins);
   
    }
   
    function displayComputerWin(){
       const computerWins = document.createElement('p');
       computerWins.textContent = "The computer played " + computerInput + ". You lose!";
       containerTwo.appendChild(computerWins);
   }
   
   function displayDraw(){
       const draw = document.createElement('p');
       draw.textContent = "The computer played " + computerInput + ". This is a draw!";
       containerTwo.appendChild(draw);
   }


    function checkRound() {
        if( z == 5){
        
         
             if(userScore > computerScore){
        const score = document.createElement('p');
        score.classList.add('scoring')
        score.textContent = " You Win "  + userScore + "-" + computerScore;
        containerThree.appendChild(score);
        }
            else if(computerScore > userScore){
        const score = document.createElement('p');
        score.classList.add('scoring')
        score.textContent = " Game Over! The computer wins "  + userScore + "-" + computerScore;
        containerThree.appendChild(score);
        }
        const newGame = document.createElement('button');
        newGame.classList.add("newGameButton");
        newGame.textContent = "New Game!";
        containerThree.appendChild(newGame);
        disableButtons();
        newGame.onclick = function () {
            location.href = "gamePage.html";
        };
        }
     
    }

    function disableButtons(){
        rock.disabled = true;
        scissors.disabled = true;
        paper.disabled = true;
        spoc.disabled = true;
        lizard.disabled = true;
    }

    function oneGame(xe,ye){
        if ( userInput == computerInput){
        displayDraw();
       }
        else if(userInput == "paper" && computerInput == "rock" || userInput == "rock" && computerInput == "scissors" ||
        userInput == "scissors" && computerInput == "paper" || userInput == "rock" && computerInput == "lizard" || 
        userInput == "lizard" && computerInput == "spock" || userInput == "spock" && computerInput == "scissors" ||
        userInput == "scissors" && computerInput == "lizard" || userInput == "lizard" && computerInput == "paper" ||
        userInput == "paper" && computerInput == "spock" || userInput == "spock" && computerInput == "rock" ){
           userScore++;
           z++;
           displayUserWin();
         }
        else{
            computerScore++;
            z++;
            displayComputerWin();
            }
   
    }

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
        button.addEventListener('click', function listenPlay() {
        userInput = button.id;
        console.log(userInput);
        oneGame(userInput, computerPlay());
        checkRound();
     });
});



