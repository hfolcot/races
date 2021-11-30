export class Background {
    constructor(img, speed, width, height, canvas) {
        this.img = img;
        this.speed = speed;
        this.width = width;
        this.height = height;
        this.canvas = canvas;
        this.x1 = 0;
        this.x2 = this.width;
        this.x3 = this.width * 2;
        this.y = 0;
    }

    update(go) {
        if (go) {
            //this.x1 -= this.speed;
            if (this.x1 <= -this.width + this.speed) {
                this.x1 = this.x3 + (this.width - this.speed);
            } else {
                this.x1 -= (this.speed);
            }
            if (this.x2 <= -this.width + this.speed) {
                this.x2 = this.x1 + (this.width - this.speed);
            } else {
                this.x2 -= (this.speed);
            }
            if (this.x3 <= -this.width + this.speed) {
                this.x3 = this.x2 + (this.width - this.speed);
            } else {
                this.x3 -= (this.speed);
            }
        }
    }

    draw(ctx) {
        ctx.drawImage(this.img, 0, 0, this.width, this.height, this.x1, this.y, this.width, this.canvas.height);
        ctx.drawImage(this.img, 0, 0, this.width, this.height, this.x2, this.y, this.width, this.canvas.height);
        ctx.drawImage(this.img, 0, 0, this.width, this.height, this.x3, this.y, this.width, this.canvas.height);
    }
}