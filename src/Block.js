//export default
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