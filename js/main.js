

import { FinishLine } from "/races/js/finishline.js";
import { Helicopter, Ufo, Plane, GreenPlane } from "/races/js/flyer.js";
import { Background } from "/races/js/backgrounds.js";

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - window.innerHeight / 6;

let frame = 0;
let angle = 0;
let go = false;
let finished = false;
let winner = '';

const finishLineObj = new FinishLine(canvas);

//Background images
const skyBackgroundImg = new Image();
skyBackgroundImg.src = 'img/background_sky.jpg';
const treesBackgroundImg = new Image();
treesBackgroundImg.src = 'img/background_trees.png';
const fartreesBackgroundImg = new Image();
fartreesBackgroundImg.src = 'img/far_trees.png';
const mountainsBackgroundImg = new Image();
mountainsBackgroundImg.src = 'img/background_mountains.png';
const treesForegroundImg = new Image();
treesForegroundImg.src = 'img/foreground_trees.png';
const skyBackground = new Background(skyBackgroundImg, 1, 1600, 600, canvas);
const mountainsBackground = new Background(mountainsBackgroundImg, 2, 1600, 600, canvas);
const farTreesBackground = new Background(fartreesBackgroundImg, 3, 1600, 600, canvas);
const treesBackground = new Background(treesBackgroundImg, 4, 1600, 800, canvas);
const treesForeground = new Background(treesForegroundImg, 5, 1600, 800, canvas);



//Sprite images
const heli = new Image();
heli.src = 'img/helicopter_sprite_sheet.png';
const ufo = new Image();
ufo.src = 'img/ufo_sprite_sheet.png';
const plane1 = new Image();
plane1.src = 'img/plane_sprite_sheet.png';
const plane2 = new Image();
plane2.src = 'img/green_plane_sprite_sheet.png';

let racers = [];
racers.unshift(
    new Helicopter('Helicopter', 3, 250, 200, canvas, heli),
    new GreenPlane('Green Plane', 0, 250, 200, canvas, plane2),
    new Plane('Red Plane', 2, 250, 200, canvas, plane1),
    new Ufo('UFO', 1, 250, 200, canvas, ufo)
);

document.addEventListener('click', e => {
    if (!go) {
        go = true;
    }
    if(finished){
        restartGame();
    }
})

function restartGame() {
    finished = false;
    racers = [];
    racers.unshift(
        new Helicopter('Helicopter', 3, 250, 200, canvas, heli),
        new GreenPlane('Green Plane', 0, 250, 200, canvas, plane2),
        new Plane('Red Plane', 2, 250, 200, canvas, plane1),
        new Ufo('UFO', 1, 250, 200, canvas, ufo)
    );
}

function animateLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    skyBackground.update(go);
    skyBackground.draw(ctx);
    mountainsBackground.update(go);
    mountainsBackground.draw(ctx);
    farTreesBackground.update(go);
    farTreesBackground.draw(ctx);
    treesBackground.update(go);
    treesBackground.draw(ctx);
    finishLineObj.draw(ctx);
    treesForeground.update(go);
    treesForeground.draw(ctx);
    for (let i = 0; i < racers.length; i++) {
        racers[i].update(go, frame, angle);
        racers[i].draw(ctx);
        if (racers[i].x > finishLineObj.x2) {
            go = false;
            finished = true;
            winner = racers[i].name;
        }
    }
    if (!go && !finished) {

        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.font = '30px Arial'
        ctx.fillText("Click to Start", canvas.width / 2, canvas.height / 2);
    }
    if (finished) {

        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.font = '30px Arial'
        ctx.fillText(winner + " is the winner!", canvas.width / 2, canvas.height / 2);
        ctx.fillText("Click to race again!", canvas.width / 2, canvas.height / 2 + 60);
    }

    requestAnimationFrame(animateLoop);
    frame++;
    angle += 0.1;
}

requestAnimationFrame(animateLoop);