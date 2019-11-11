var Letter = require("./Letter");

class Word{
    constructor(word){
        this.letters=[];

        for(let letter of word){
            this.letters.push(new Letter(letter));
        }
    }

    getLetters(){
        var word = "";

        for(let letter of this.letters){
            word+=letter.char;
            word+=" ";
        }

        return word;
    }

    checkLetters(char){
        var hadLetter = false;
        for(let letter of this.letters){
            if(letter.check(char)) hadLetter=true;
        }
        return hadLetter;
    }
}

module.exports = Word;
  