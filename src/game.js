var fs = require('fs');
// file is included here:
eval(fs.readFileSync('game2.js')+'');
const util = require('util');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = util.promisify(rl.question).bind(rl);

async function startGame(){
    let finish = false;
    let nb_turn = 1;
    displayBoard();
    do{
        let rep = "";
        let playerMark = (nb_turn%2>0) ? "X" : "O";
        let questionToDisplay = setQuestion(nb_turn);
        try{
            rep = await question( `${questionToDisplay} ? `);
            // console.log("reponse : ",rep);
        }catch(err){
            // console.log("error : ",err);
            rep = err;
        }
        if(isCorrect(rep) && !isPlayed(rep)){
            changeBoardValue(rep,playerMark)
            nb_turn++;
            if(nb_turn >= 5 && isVictory(parseInt(rep))){
                finish = true;
            }
        }
    }while(!finish);
    let joueurNumber = (nb_turn%2>0) ? "Joueur 2" : "Joueur 1";
    console.log(`Victoire du ${joueurNumber}, gg ez`);
}

function isCorrect(rep){
    if(rep > 0 && rep < 10){
        return true;
    }else{
        return false;
    }
}

function setQuestion(nbTurn){
    if( nbTurn%2>0 ){ //Impair 1er joueur
        return "Joueur 1 (X) : Votre choix";
    }else{ //Pair 2eme joueur
        return "Joueur 2 (O) : Votre choix";
    }
}

startGame();

