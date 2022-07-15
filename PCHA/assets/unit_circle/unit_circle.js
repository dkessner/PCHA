//
// unit_circle.js
//


let theta = 0;
let dtheta = 0;
let axes_center_1;
let axes_center_2;
let radius;


function initialize() 
{
    axes_center_1 = new p5.Vector(width * .12, height / 2);
    axes_center_2 = new p5.Vector(width * .3, height / 2);
    radius = .9 * axes_center_1.x;
}


function setup() 
{
    let canvas = createCanvas(400, 200);
    initialize();
}


function drawAxes() 
{
    strokeWeight(1);
    stroke(128);

    line(axes_center_1.x - radius, axes_center_1.y, axes_center_1.x + radius, axes_center_1.y);
    line(axes_center_1.x, axes_center_1.y - radius, axes_center_1.x, axes_center_1.y + radius);

    line(axes_center_2.x - radius * .1, axes_center_2.y, axes_center_2.x + radius * 2 * PI, axes_center_2.y);
    line(axes_center_2.x, axes_center_2.y - radius, axes_center_2.x, axes_center_2.y + radius);
}


function drawUnitCircle() 
{
    strokeWeight(2);
    stroke(128);
    noFill();
    ellipse(axes_center_1.x, axes_center_1.y, radius * 2, radius * 2);
}


function X(angle) 
{
    angle = angle % (2 * PI);
    if (angle < 0) angle += 2 * PI;
    let x = axes_center_2.x + angle * radius;
    return x;
}


function Y(angle) 
{
    return axes_center_2.y - radius * sin(angle);
}


function drawSin() 
{
    strokeWeight(2);
    stroke(150);
    beginShape();
    for (let t = 0; t < 2 * PI; t += .01) {
        vertex(this.X(t), this.Y(t));
    }
    endShape();
}


function drawClockHand() 
{
    strokeWeight(5);
    stroke(200);
    let x = axes_center_1.x + radius * cos(theta);
    let y = axes_center_1.y - radius * sin(theta);
    line(axes_center_1.x, axes_center_1.y, x, y);

    stroke(0, 255, 0);
    line(axes_center_1.x, axes_center_1.y, axes_center_1.x, y);
}


function drawVerticalBar() 
{
    strokeWeight(5);
    stroke(0, 255, 0);
    let x = X(theta);
    let y = Y(theta);
    line(x, axes_center_2.y, x, y);
}


function drawTheta() 
{
    strokeWeight(4);
    stroke(0, 0, 255);
    arc(axes_center_1.x, axes_center_1.y, radius*2, radius*2, -theta, 0);
    line(axes_center_2.x, axes_center_2.y, X(theta), axes_center_2.y);
}


function draw() 
{
    background(0);
    drawAxes();
    drawUnitCircle();
    drawTheta();
    drawClockHand();
    drawSin();
    drawVerticalBar();
    theta += dtheta;
}


function keyPressed() 
{
    if (mouseX < 0 || mouseX>width || mouseY<0 || mouseY>height) return;

    const speed = .15;

    if (keyCode == UP_ARROW || keyCode == RIGHT_ARROW) dtheta = speed;
    else if (keyCode == DOWN_ARROW || keyCode == LEFT_ARROW) dtheta = -speed;
}


function keyReleased() 
{
    dtheta = 0;
}


function mousePressed() {

    if (mouseX<0 || mouseX>width || 
        mouseY<0 || mouseY>height) 
        return;

    if (mouseX < width * .25) 
        keyCode = LEFT_ARROW;
    else if (mouseX > width * .75) 
        keyCode = RIGHT_ARROW;
    else if (mouseY < height * .25) 
        keyCode = UP_ARROW;
    else if (mouseY > height * .75) 
        keyCode = DOWN_ARROW;
    else
        keyCode = null;

    keyPressed();
}


mouseReleased = keyReleased;


function mouseDragged()
{
    dtheta = 0;
    let d = map(mouseX - pmouseX, 0, width, 0, 2*PI);
    theta += d;
}


touchStarted = mousePressed;
touchMoved = mouseDragged;
touchEnded = mouseReleased;



