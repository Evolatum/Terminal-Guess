class Letter{
    constructor(char){
        this.secretChar = char;
        this.guessed = false;
    }

    get char(){
        if(this.guessed){
            return this.secretChar;
        }
        else{
            return "_";
        }
    }

    check(char){
        if(this.secretChar === char){
            this.guessed = true;
            return true;
        }
        return false;
    }
}
  
module.exports = Letter;
  