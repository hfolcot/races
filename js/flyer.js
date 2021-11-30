class Flyer {
    constructor(name, position, ogWidth, ogHeight, canvas, img) {
        this.name = name;
        this.height = canvas.height / 6;
        this.width = this.height * 1.25;
        this.speed = (Math.random() * 5) + 1;
        this.position = position;
        this.x = 0;
        this.y = canvas.height / 5 * this.position + (this.height / 2);
        this.ogWidth = ogWidth;
        this.ogHeight = ogHeight;
        this.frameNo = 0;
        this.canvas = canvas;
        this.winner = false;
        this.img = img;
    }
    draw(ctx) {
        ctx.drawImage(this.img, this.ogWidth * this.frameNo, 0, this.ogWidth, this.ogHeight, this.x, this.y, this.width, this.height);
    }
}

export class Helicopter extends Flyer {

    update(go, frame, angle) {
        if (go) {
            this.x += this.speed;
        } else {
            this.hover(angle);
        }
        if (this.frameNo >= 3) {
            this.frameNo = 0;
        }
        else if (frame % 3 === 0) {
            this.frameNo++;
        }
    }

    
    hover(angle) {
        let curve = Math.sin(angle + 1);
        this.y += curve;
    }

}

export class Ufo extends Flyer {
    update(go, frame, angle) {
        if (go) {
            this.x += this.speed;
        }
        if (this.frameNo >= 3) {
            this.frameNo = 0;
        }
        else if (frame % 6 === 0) {
            this.frameNo++;
        }
    }
}


export class Plane extends Flyer {

    update(go, frame, angle) {
        if (go) {
            this.x += this.speed;
            if (this.frameNo >= 3) {
                this.frameNo = 0;
            }
            else if (frame % 3 === 0) {
                this.frameNo++;
            }
        } else {
            this.hover(angle);
        }
    }
    hover(angle) {
        let curve = Math.sin(angle + 1);
        this.x += curve;
    }

}

export class GreenPlane extends Flyer{

    update(go, frame, angle) {
        if (go) {
            this.x += this.speed;
        } else {
            this.hover(angle);
        }
        if (this.frameNo >= 3) {
            this.frameNo = 0;
        }
        else if (frame % 3 === 0) {
            this.frameNo++;
        }
    }
    hover(angle) {
        let curve = Math.sin(angle);
        this.y += curve / 3;
    }


}