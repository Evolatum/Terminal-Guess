var Word = require("./Word");

var engine = {
    wordsArray:["Apple", "Orange", "Pineapple", "Pumpkin", "Banana", "Cherry", "Watermelon", "Strawberry",
    "Grape", "Lime", "Lemon", "Pear", "Papaya", "Grapefruit", "Peach", "Apricot", "Tomato", "Avocado", "Guava"],

    activeWord:"",

    remainingGuesses:0,

    maxGuesses:8,

    newWord:function(){
        this.activeWord = new Word(this.wordsArray[randomNumber(this.wordsArray.length-1,0)].toUpperCase());
        this.remainingGuesses = this.maxGuesses;
    },

    checkWord:function(char){
        if(this.activeWord.checkLetters(char))this.remainingGuesses--;
        return this.activeWord.getLetters();
    }
}

function randomNumber (max=10, min=1){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

engine.newWord();
console.log(engine.activeWord);
console.log(engine.activeWord.getLetters());
console.log(engine.checkWord("A"));
console.log(engine.checkWord("E"));
console.log(engine.checkWord("O"));