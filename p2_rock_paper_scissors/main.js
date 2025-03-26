function getCompChoice(){
    let rand = Math.floor(Math.random() * 3);
    let choice;
    if(rand==1)choice="Rock";
    if(rand==2)choice="Paper";
    if(rand==0)choice="Scissors";
    choice = choice.toUpperCase();
    console.log(`Computer\'s choice: ${choice}`);
    return choice;
}

function getPlayerChoice(){
    let choice = prompt("Choose: ");
    choice = choice.toUpperCase();
    console.log(`Player\'s choise: ${choice}`);
    return choice;
}

let player_score=0;
let comp_score=0;

function game(){
    let a=1;
    const player = getPlayerChoice();
    const comp = getCompChoice();
    if(player==comp){
        console.log(`It\'s a draw!! Both of you chose ${player}`);
        a=-1;
        player_score++;
        comp_score++;
    }

    else if(player=="ROCK" && comp=="PAPER")a=0;
    else if(player=="PAPER" && comp=="SCISSORS")a=0;
    else if(player=="SCISSORS" && comp=="ROCK")a=0;

    if(a==1){
        console.log(`You win!! ${player} beats ${comp}`);
        player_score++;
    }
    else if(a==0){
        console.log(`You lose!! ${comp} beats ${player}`);
        comp_score++;
    }
}

let n = prompt("How many rounds do you want: ");

for (let index = 0; index < n; index++) {
    game();
    console.log(`Your score: ${player_score}   Computer\'s score: ${comp_score}`);
}

if(player_score>comp_score)console.log("You win!!");
else if(player_score==comp_score)console.log("It\'s a draw!!");
else console.log("You lose!!");