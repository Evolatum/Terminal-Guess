var Word = require("./Letter");

var engine = {
    wordsArray:["Apple", "Orange", "Pineapple", "Pumpkin", "Banana", "Cherry", "Watermelon", "Strawberry",
    "Grape", "Lime", "Lemon", "Pear", "Papaya", "Grapefruit", "Peach", "Apricot", "Tomato", "Avocado", "Guava"],

    activeWord:"",

    remainingGuesses:0,

    maxGuesses:8,

    newWord:function(){
        this.activeWord = new Word(this.wordsArray[randomNumber(this.wordsArray.length-1,0)]);
        this.remainingGuesses = this.maxGuesses;
    }
}

function randomNumber (max=10, min=1){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}