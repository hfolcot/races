export class FinishLine {
    constructor(canvas) {
        this.width = canvas.width / 40;
        this.x1 = canvas.width - this.width * 4;
        this.x2 = canvas.width - this.width * 5;
        this.y = 0;
        this.rectCount = Math.floor(canvas.height / this.width);
    }
    draw(ctx) {
        for (let i = 0; i < this.rectCount; i++) {
            ctx.strokeStyle = 'black';
            if (i % 2 == 0) {
                ctx.fillStyle = 'black';
            } else {
                ctx.fillStyle = "white";
            }
            ctx.fillRect(this.x1, this.width * i, this.width, this.width);
            ctx.strokeRect(this.x1, this.width * i, this.width, this.width);
        }
        for (let i = 0; i < this.rectCount; i++) {
            ctx.strokeStyle = 'black';
            if (i % 2 == 0) {
                ctx.fillStyle = 'white';
            } else {
                ctx.fillStyle = 'black';
            }
            ctx.fillRect(this.x2, this.width * i, this.width, this.width);
            ctx.strokeRect(this.x2, this.width * i, this.width, this.width);
        }

    }
}