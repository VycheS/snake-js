//import Block from "./Block";

//export default 
class Apple
{
    constructor(){
        this.position = new Block(10, 10);
    }

    draw() {
        this.position.drawCircle("LimeGreen");
    }

    move(){
        let randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
        let randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
        this.position = new Block(randomCol, randomRow);
    }
}

var apple = new Apple();
