const btn = document.querySelectorAll("button")
const output = document.querySelector(".output");
output.setAttribute('style', 'background-color: white');

let player_score=0;
let comp_score=0;
let choices = ["scissors", "rock", "paper"];
let round=0;
btn.forEach(b => {
    b.addEventListener('click', e => {

        if(round==5){
            if(player_score>comp_score)console.log("You win!!");
            else if(player_score==comp_score)console.log("It\'s a draw!!");
            else console.log("You lose!!");
        }

        else{
            const pc = choices.indexOf(e.target.className);
            const cc = Math.floor(Math.random() * 3);

            console.log(`You chose ${choices[pc]}`);
            console.log(`Computer chose ${choices[cc]}`);

            if(pc==cc){
                const txt = document.createElement("p");
                txt.innerText = `It\'s a draw!! Both of you chose ${choices[pc]}\n`;
                output.append(txt);
                player_score++;
                comp_score++;
            }
            else if((pc==1 && cc==0) || (pc==2 && cc==1) || (pc==0 && cc==2)){
                const txt = document.createElement("p");
                txt.innerText = `You win!! ${choices[pc]} beats ${choices[cc]}\n`;
                output.append(txt);
                player_score++;
            }
            else{
                const txt = document.createElement("p");
                txt.innerText = `You lose!! ${choices[cc]} beats ${choices[pc]}\n`;
                output.append(txt);
                comp_score++;
            }
            const txt = document.createElement("p");
            txt.innerText = `Your score: ${player_score}   Computer\'s score: ${comp_score}\n`;
            output.append(txt);
            round++;
        }
    })
})

