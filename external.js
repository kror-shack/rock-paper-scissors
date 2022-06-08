let computerInput;
const containerTwo = document.querySelector('.containerTwo');
let userInput;
let userScore = 0;
let computerScore = 0;
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

    function displayUserWin(){
        const userWins = document.createElement('p');
        userWins.textContent = "You Win";
        containerTwo.appendChild(userWins);
   
    }
   
    function displayComputerWin(){
       const computerWins = document.createElement('p');
       computerWins.textContent = "You lose!";
       containerTwo.appendChild(computerWins);
   }
   
   function displayDraw(){
       const draw = document.createElement('p');
       draw.textContent = "This is a draw!";
       containerTwo.appendChild(draw);
   }


    function checkRound() {
        if( z == 5){
             if(userScore > computerScore){
        const score = document.createElement('p');
        score.textContent = " Game Over! You Win "  + userScore + "-" + computerScore;
        containerTwo.appendChild(score);
        }
            else if(computerScore > userScore){
        
        const score = document.createElement('p');
        score.textContent = " Game Over! The computer wins "  + userScore + "-" + computerScore;
        containerTwo.appendChild(score);
        }
     }
    }

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
         else{
            computerScore++;
            z++;
            displayComputerWin();
         }
     }

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
        button.addEventListener('click', () => {
        userInput = button.id;
        console.log(userInput);
        oneGame(userInput, computerPlay());
        checkRound();
        if(z == 5){
        const newGame = document.createElement('button');
        newGame.textContent = "New Game!";
        containerTwo.appendChild(newGame);
        }

     });
});



/*jflkdjkldkdklsfddddddddddddddddddddkjfadlk adjflkasdjf lkdsahf kjhdhk jfdsakfhdaskjfh asdjhf sadh 
dsa

dasf
sdf
sdaf
f
sad
f
sdafsadf
a
fsd
dfs
dsa
fsa
floordsaf
sda
f
sdaf
afs*/

