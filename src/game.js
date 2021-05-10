class TicTacToe {

    // util = require('util');
    // readline = require('readline');
    // rl = this.readline.createInterface({
    // input: process.stdin,
    // output: process.stdout
    // });
    // question = this.util.promisify(this.rl.question).bind(this.rl);

    /*  ----    */
    finish = false;
    nb_turn = 1;
    playerHaveToPlay = "X";



    async startGame(){
        this.getQuestion();
    }


    getQuestion(){
        let questionToDisplay = this.setQuestion(this.nb_turn);
        console.log(questionToDisplay);
        this.displayBoard();
    }

    playTurn(rep,playerWhoWantToPlay){
        if(!this.finish){
            if(this.isCorrect(rep) && !this.isPlayed(rep) && playerWhoWantToPlay == this.playerHaveToPlay){
                this.changeBoardValue(rep,this.playerHaveToPlay)
                this.nb_turn++;
                if(this.nb_turn >= 5 && this.isVictory(parseInt(rep)) || this.nb_turn > 9){
                    this.finish = true;
                }
                if(this.nb_turn > 9){
                    console.log(`Egalité`);
                    this.displayBoard();
                }else if(this.finish){
                    let joueurNumber = (this.nb_turn%2>0) ? "Joueur 2" : "Joueur 1";
                    console.log(`Victoire du ${joueurNumber}, gg ez`);
                    this.displayBoard();
                }else{
                    this.playerHaveToPlay = (this.nb_turn%2>0) ? "X" : "O";
                    this.getQuestion();
                }
            }else{
                console.log("tour invalide");
                this.displayBoard();
            }
        }else{
            console.log("partie terminée, merci d'en relancer une");
        }
    }

    isCorrect(rep){
        if(rep > 0 && rep < 10){
            return true;
        }else{
            return false;
        }
    }

    setQuestion(nbTurn){        
        if( nbTurn%2>0 ){ //Impair 1er joueur
            return "Joueur 1 (X) : Votre choix";
        }else{ //Pair 2eme joueur
            return "Joueur 2 (O) : Votre choix";
        }
    }

    /* ---------------Game 2.js-------------------- */
    board = {
        1: ' 1 ',
        2: ' 2 ',
        3: ' 3 ',
        4: ' 4 ',
        5: ' 5 ',
        6: ' 6 ',
        7: ' 7 ',
        8: ' 8 ',
        9: ' 9 ',
    };
    
    winCombinaison = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,5,9],
        [3,5,7],
        [1,4,7],
        [2,5,8],
        [3,6,9],
    ]
    
    
    
    displayBoard() {
        console.log('\n' +
        this.board[1] + '|' + this.board[2] + '|' + this.board[3] + '\n' +
        this.board[4] + '|' + this.board[5] + '|' + this.board[6] + '\n' +
        this.board[7] + '|' + this.board[8] + '|' + this.board[9] + '\n'
        );
    }
    
    changeBoardValue(index, sign) {
        this.board[index] = ' ' + sign + ' ';
        // this.displayBoard();
    }
    
    isPlayed(index){
        return this.board[index] === ' X ' || this.board[index] === ' O ';
    }
    
    isVictory(index) {
        let victory = false
        this.winCombinaison.forEach((value) => {
        if (value.includes(index)) {
            if (this.board[value[0]] === this.board[value[1]] && this.board[value[1]] === this.board[value[2]]) {
            victory = true;
            }
        }
        })
        return victory;
    };

}
// let game = new TicTacToe();
// // let game2 = new TicTacToe();
// game.startGame();
// game.playTurn("1","X"); //X
// game.playTurn("2","O"); //O
// game.playTurn("4","X"); //X
// game.playTurn("7","O"); //O
// game.playTurn("5","X"); //X
// game.playTurn("9","O"); //O
// game.playTurn("8","X"); //X
// game.playTurn("6","O"); //O
// game.playTurn("3","X"); //X egalité??
// // game2.startGame();


