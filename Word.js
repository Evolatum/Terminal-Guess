var Letter = require("./Letter");

class Word{
    constructor(word){
        this.letters=[];

        for(let letter of word){
            this.letters.push(new Letter(letter));
        }
    }

    get letters(){
        var word = "";

        for(let letter of this.letters){
            word+=letter.char;
        }

        return word;
    }

    checkLetter(char){
        for(let letter of this.letters){
            letter.check(char);
        }
    }
}

module.exports = Word;
  