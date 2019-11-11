var Word = require("./Word");
var inquirer = require("inquirer");

var engine = {
    wordsArray:["Apple", "Orange", "Pineapple", "Pumpkin", "Banana", "Cherry", "Watermelon", "Strawberry",
    "Grape", "Lime", "Lemon", "Pear", "Papaya", "Grapefruit", "Peach", "Apricot", "Tomato", "Avocado", "Guava"],

    activeWord:"",

    guessedLetters:"",

    remainingGuesses:0,

    maxGuesses:8,

    newWord:function(){
        this.activeWord = new Word(this.wordsArray[randomNumber(this.wordsArray.length-1,0)].toUpperCase());
        this.remainingGuesses = this.maxGuesses;
    },

    checkWord:function(char){
        if(!this.activeWord.checkLetters(char)){
            this.remainingGuesses--;
            console.log("\x1b[31m","\nWrong letter\n"+
                        `You have ${engine.remainingGuesses} guesses remaining.\n`);
        } else{
            console.log("\x1b[32m","\nRight letter!\n"+
                        `You didn't use any of your ${engine.remainingGuesses} remaining guesses.\n`);
        }
        return this.activeWord.getLetters();
    },

    validateLetter:function(char){
        if(engine.guessedLetters.includes(char.toUpperCase())){
            return 'Letter already guessed, select new one';
        }

        if (/[a-zA-Z]/.test(char) && char.length === 1) {
            return true;
        }

        return 'Has to be a single letter';
    },

    play:function(){
        inquirer.prompt([
            {
                message: `Guess a letter:`,
                name: "letter",
                validate:engine.validateLetter
            }
        ])
        .then(function(response) {
            engine.guessedLetters+=response.letter.toUpperCase();
            engine.checkWord(response.letter.toUpperCase());
            console.log("\x1b[0m",`Active word:  ${engine.activeWord.getLetters()}\n`);

            if(engine.remainingGuesses===0){
                console.log("\x1b[33m","-------------------------------\n\n"+
            "           YOU LOSE\n\n"+
            "-------------------------------\n\n");
                engine.newGame();
            }else if(engine.activeWord.getLetters().includes("_")){
                engine.play();
            } else{
                console.log("\x1b[33m","-------------------------------\n\n"+
            "           YOU WIN!\n\n"+
            "-------------------------------\n\n");
                engine.newGame();
            }
        });
    },

    newGame:function(){
        inquirer.prompt([
            {
                type:"confirm",
                message: `Play again?`,
                name: "continue"
            }
        ])
        .then(function(response) {
            if(response.continue){
                engine.newWord();
                engine.play();
            }else{
                console.log("\x1b[33m","\nThanks for playing!");
            }
        });
    }
}

function randomNumber (max=10, min=1){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

engine.newWord();
console.log("\x1b[33m","\n\n-------------------------------\n\n"+
            "          Welcome to\n"+
            "           HANGMAN\n"+
            "       Terminal Edition\n\n"+
            "-------------------------------\n\n");
engine.play();