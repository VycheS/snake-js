//import Block from "./Block";

//export default
class Snake
{
    // Задаем конструктор Snake (змейка)
    constructor(){
        this.segments = [
            new Block(7, 5),
            new Block(6, 5),
            new Block(5, 5)
        ];

        this.direction = "right";
        this.nextDirection = "right";
    }

    // Рисуем квадратик для каждого сегмента тела змейки
    draw() {
        for (let i = 0; i < this.segments.length; i++) {
            this.segments[i].drawSquare("Blue");
        }
    }

    //Создаем новую голову и добавляем ее к началу змейки, чтобы передвинуть змейку в текущем направлении
    move() {
        let head = this.segments[0];
        let newHead;

        this.direction = this.nextDirection;

        if (this.direction === "right") {
            newHead = new Block(head.col + 1, head.row);
        } else if (this.direction === "down") {
            newHead = new Block(head.col, head.row + 1);
        } else if (this.direction === "left") {
            newHead = new Block(head.col - 1, head.row);
        } else if (this.direction === "up") {
            newHead = new Block(head.col, head.row - 1);
        }

        if (this.checkCollision(newHead)) {
            gameOver();
            return;
        }

        this.segments.unshift(newHead);

        if (newHead.equal(apple.position)) {
            score++;
            apple.move();
        } else {
            this.segments.pop();
        }
    }

    // Проверяем не столкнулась ли змейка со стеной или собственным телом
    checkCollision(head) {
        let leftCollision = (head.col === 0);
        let topCollision = (head.col === 0);
        let rightCollision = (head.col === widthInBlocks - 1);
        let bottomCollision = (head.row === heightInBlocks - 1);

        let wallCollision = leftCollision || topCollision ||
            rightCollision || bottomCollision;

        let selfCollision = false;

        for (let i = 0; i < this.segments.length; i++) {
            if (head.equal(this.segments[i])) {
                selfCollision = true;
            }
        }

        return wallCollision || selfCollision;
    }

    // Задаем следующее направление движения змейки на основе нажатой клавиши
    setDirection(newDirection) {
        if (this.direction === "up" && newDirection === "down") {
            return;
        } else if (this.direction === "right" && newDirection === "left") {
            return;
        } else if (this.direction === "down" && newDirection === "up") {
            return;
        } else if (this.direction === "left" && newDirection === "right") {
            return;
        }
        this.nextDirection = newDirection;
    }
}

var snake = new Snake();
