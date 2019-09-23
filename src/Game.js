

// import Snake from "./Snake";
// import Apple from "./Apple";
// import Block from "./Block";

// Настройка "холста"
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// Получаем ширину и высоту элемента canvas
let width = canvas.width;
let height = canvas.height;

// Вычисляем ширину и высоту в ячейках
let blockSize = 10;
let widthInBlocks = width / blockSize;
let heightInBlocks = height / blockSize;

// Устанавливаем счет 0
let score = 0;

// Рисуем рамку
let drawBorder = function () {
    ctx.fillStyle = "Gray";
    ctx.fillRect(0, 0, width, blockSize);
    ctx.fillRect(0, height - blockSize, width, blockSize);
    ctx.fillRect(0, 0, blockSize, height);
    ctx.fillRect(width - blockSize, 0, blockSize, height);
};

// Выводим счет игры в левом верхнем углу
let drawScore = function () {
    ctx.font = "20px Courier";
    ctx.fillStyle = "Black";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Счет" + score, blockSize, blockSize);
};

// Отменяем действие setInterval и печатаем сообщение "Конец игры"
let gameOver = function () {
    clearInterval(intervalId);
    ctx.font = "60px Courier";
    ctx.fillStyle = "Black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Конец игры", width / 2, height / 2);
};



class Block
{
    // Задаем конструктор Block (ячейка)
    constructor(col, row) {
        this.col = col;
        this.row = row;
    }

    // Рисуем квадрат в позиции ячейки
    drawSquare(color) {
        var x = this.col * blockSize;
        var y = this.row * blockSize;
        ctx.fillStyle = color;
        ctx.fillRect(x, y, blockSize, blockSize);
    }

    // Рисуем круг в позиции ячейки
    drawCircle(color) {
        var centerX = this.col * blockSize + blockSize /2;
        var centerY = this.row * blockSize + blockSize /2;
        ctx.fillStyle = color;
        circle(centerX, centerY, blockSize / 2, true);
    }

    //Проверяем находится ли эта ячейка в той же позиции, что и ячейка otherBlock
    equal(otherBlock) {
        return this.col === otherBlock.col && this.row === otherBlock.row;
    }
}

// Рисуем окружность
let circle = function (x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
};

// Запускаем функцию анимации через setInterval
let intervalId = setInterval(function () {
    ctx.clearRect(0, 0, width, height);
    drawScore();
    snake.move();
    snake.draw();
    apple.draw();
    drawBorder();
}, 100);

// Преобразуем коды клавиш в направления
let directions = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
};

// Задаем обработчик события keydown (клавиши-стрелки)
$("body").keydown(function (event) {
    let newDirection = directions[event.keyCode];
    if (newDirection !== undefined) {
        snake.setDirection(newDirection);
    }
});

$.getScript('Snake.js', function(){});

$.getScript('Apple.js', function(){});





