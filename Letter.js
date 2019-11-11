class Letter{
    constructor(char){
        this.char = char;
        this.guessed = false;
    }

    get char(){
        if(this.guessed){
            return this.char;
        }
        else{
            return "_";
        }
    }

    check(char){
        if(this.char === char){
            this.guessed = true;
        }
    }
}
  
module.exports = Letter;
  