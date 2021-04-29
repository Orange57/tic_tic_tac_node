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
    do{
        let rep = "";
        let playerMark = (nb_turn%2>0) ? "X" : "O";
        //appel du board
        let questionToDisplay = setQuestion(nb_turn);
        try{
            rep = await question( `${questionToDisplay} ? `);
            console.log("reponse : ",rep);
        }catch(err){
            console.log("error : ",err);
            rep = err;
        }
        if(isCorrect(rep)){
            //isPlayed(rep); TODO quand git pull
            //modifier board
            //changeBoardValue(rep,playerMark)
            nb_turn++;
            if(nb_turn >= 5 && isVictory(rep)){
                finish = true;
            }
        }
    }while(!finish);

}

function isCorrect(rep){
    if(rep > 0 && rep < 10){
        return true;
    }else{
        return false;
    }
}

function isVictory(lastTurn){
    //appel le board
    if(lastTurn%2>0){//Impair

    }else{//Pair

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

