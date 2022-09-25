
var wins = 0;
var ties = 0;
var losses = 0;

var options = ['r','p','s'];

function playGame(){
    var userChoice = prompt("enter P, R or S")


    if(!userChoice) return;

    var index = Math.floor(Math.random() * options.length);
    var computerChoice = options[index];
    alert("the computer chose: " + computerChoice);


    if (userChoice === computerChoice){
        ties++;
        alert("its a tie");
    }else if(
        (computerChoice === 'r' && computerChoice ==='s')||
        (userChoice === 'p' && computerChoice ==='r')||
        (userChoice ==='s' && computerChoice ==='p')
    ){
        wins++;
        alert("you win");
    } else{
        lossess++;
        alert("you lost")
    }
    alert("stats/wins: " + wins + "\nlosses: " + losses + "\nties: "+ ties);

    var playAgain =  confirm("Play Again..?");
    if(playAgain){
        playGame();
    }

}


playGame();