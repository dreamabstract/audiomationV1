var movieTimer = 100;

var canvas;
var stage;

var square;
var circle;

var graphics;

var messageField;

var squareS;
var circleS;
var ellipseS;
var triangleS;
var xGonS;
var index;

var squareS1;

var p = createjs.extend(createSquare, createjs.Shape, createjs.Circle, createjs.moveTo, createjs.append);

p.bounds;

//Game Code
var timeToRock;			//difficulty adjusted version of ROCK_TIME
var nextRock;			//ticks left until a new space rock arrives
var nextBullet;			//ticks left until the next shot is fired

var rockBelt;			//space rock array
var bulletStream;		//bullet array

var rgb;


//Color Control

function fillColor() {
var R = Math.floor(Math.random()*255);
var G = Math.floor(Math.random()*255);
var B = Math.floor(Math.random()*255);
 rgb = "rgba("+R+","+G+","+B+", 1)";
}

function initAnimation() {

	canvas = document.getElementById("content");
	canvas.width  = window.innerWidth;
	canvas.height = window.innerHeight;
	stage = new createjs.Stage(canvas);
	
	stage.xEnd = window.innerWidth

	// start the tick and point it at the window so we can do some work before updating the stage:
	createjs.Ticker.timingMode = createjs.Ticker.RAF;
	createjs.Ticker.addEventListener("tick", tick);
	resize();
}

function resize() { 
    stage.canvas.width = window.innerWidth;
    stage.canvas.height = window.innerHeight;
	
	stage.xMid = canvas.width   / 2;
	stage.yMid = canvas.height  / 2;
	stage.x4th = canvas.width   / 4;
	stage.y4th = canvas.height  / 4;
	stage.x8th = canvas.width   / 8;
	stage.y8th = canvas.height  / 8;
	stage.x16th = canvas.width  / 16;
	stage.y16th = canvas.height / 16;
	stage.x32nd = canvas.width  / 32;
	stage.y32nd = canvas.height / 32;
	stage.x64th = canvas.width  / 64;
	stage.y64th = canvas.height / 64;
	//for canvas Ends use canvas.width & canvas.height
}

//Play Functions
/*function Example() {
	fillColor();
	createObject(objectPrameters,rgb);
	createObject2(objectPrameters,rgb);
}
*/

function animation1() {
	fillColor();
	//center
	createSquare(0,stage.yMid-stage.y64th,stage.x32nd,stage.y32nd,rgb);
	//top
	createSquare(0,stage.yMid-(stage.y8th+stage.y32nd),stage.x32nd,stage.y32nd,rgb);
	createSquare(0,stage.yMid-(stage.y4th+(stage.y16th-stage.y64th)),stage.x32nd,stage.y32nd,rgb);
	createSquare(0,stage.y16th,stage.x32nd,stage.y32nd,rgb)
	//bottom
	createSquare(0,stage.yMid+stage.y8th,stage.x32nd,stage.y32nd,rgb);
	createSquare(0,stage.yMid+(stage.y4th+stage.y64th),stage.x32nd,stage.y32nd,rgb);
	createSquare(0,stage.yMid+(stage.y4th+stage.y8th+stage.y64th),stage.x32nd,stage.y32nd,rgb);
}

function animation2() {
	fillColor();
	createCircle(stage.xMid,stage.yMid,stage.y4th,rgb);
}

function animation3() {
	fillColor();
	createCircle2(stage.xMid,stage.yMid,stage.y4th,rgb);
	createCircle3(stage.xMid,stage.yMid,stage.y4th,rgb);
}

function animation4() {
	fillColor();
	createCircle4(stage.xMid,stage.yMid,stage.y4th,rgb);
	createCircle5(stage.xMid,stage.yMid,stage.y4th,rgb);
}

function animation5() {
	fillColor();
	createCircle6(stage.xMid,stage.yMid,stage.y4th,rgb);
	createCircle7(stage.xMid,stage.yMid,stage.y4th,rgb);
	createCircle8(stage.xMid,stage.yMid,stage.y4th,rgb);
	createCircle9(stage.xMid,stage.yMid,stage.y4th,rgb);
}

function animation6() {
	fillColor();
	//Mid
	createSquare2(stage.xMid-stage.x64th,0,stage.x32nd,stage.y32nd,rgb);
	
	//Left
	createSquare2(stage.x8th-stage.x64th,0,stage.x32nd,stage.y32nd,rgb);
	createSquare2(stage.x4th-stage.x64th,0,stage.x32nd,stage.y32nd,rgb);
	createSquare2(stage.x4th+stage.x8th-stage.x64th,0,stage.x32nd,stage.y32nd,rgb);
	
	//Right
	createSquare2(stage.xMid+stage.x8th-stage.x64th,0,stage.x32nd,stage.y32nd,rgb);
	createSquare2(stage.xMid+stage.x4th-stage.x64th,0,stage.x32nd,stage.y32nd,rgb);
	createSquare2(stage.xMid+stage.x4th+stage.x8th-stage.x64th,0,stage.x32nd,stage.y32nd,rgb);

}

function animation7() {
	fillColor();
	//Top Left
	createSquare5(stage.xMid-stage.x4th-stage.x8th,stage.yMid-stage.y8th,stage.x4th,stage.y16th,rgb);
	//Top Right
	createSquare5(stage.xMid+stage.x8th,stage.yMid-stage.y8th,stage.x4th,stage.y16th,rgb);
	//Bottom Left
	createSquare5(stage.xMid-stage.x4th-stage.x8th,stage.yMid+stage.y8th,stage.x4th,stage.y16th,rgb);
	//Bottom Right
	createSquare5(stage.xMid+stage.x8th,stage.yMid+stage.y8th,stage.x4th,stage.y16th,rgb);
}

function animation8() {
	fillColor();
	//Top Left
	createSquare6(stage.xMid-stage.x4th-stage.x8th,stage.yMid-stage.y8th,stage.x4th,stage.y16th,rgb);

}

function animation9() {
	fillColor();
	createSquare7(stage.xMid-stage.x4th,stage.yMid-stage.y4th,stage.y8th,stage.y8th,rgb);
}
function animation10() {
	fillColor();
	//center
	createSquare8(stage.canvas.width-stage.x32nd,stage.yMid,stage.x32nd,stage.y32nd,rgb);
	//top
	createSquare8(stage.canvas.width-stage.x32nd,stage.yMid-(stage.y8th+stage.y32nd),stage.x32nd,stage.y32nd,rgb);
	createSquare8(stage.canvas.width-stage.x32nd,stage.yMid-(stage.y4th+(stage.y16th-stage.y64th)),stage.x32nd,stage.y32nd,rgb);
	createSquare8(stage.canvas.width-stage.x32nd,stage.y16th,stage.x32nd,stage.y32nd,rgb)
	//bottom
	createSquare8(stage.canvas.width-stage.x32nd,stage.yMid+stage.y8th,stage.x32nd,stage.y32nd,rgb);
	createSquare8(stage.canvas.width-stage.x32nd,stage.yMid+(stage.y4th+stage.y64th),stage.x32nd,stage.y32nd,rgb);
	createSquare8(stage.canvas.width-stage.x32nd,stage.yMid+(stage.y4th+stage.y8th+stage.y64th),stage.x32nd,stage.y32nd,rgb);
}

function animation11() {
	fillColor();
	//Top Left
	createSquare5(stage.xMid-stage.x4th-stage.x8th,stage.yMid-stage.y8th,stage.x4th,stage.canvas.width,rgb);
	//Top Right
	createSquare5(stage.xMid+stage.x8th,stage.yMid-stage.y8th,stage.x4th,stage.canvas.width,rgb);
	//Bottom Left
	createSquare5(stage.xMid-stage.x4th-stage.x8th,stage.yMid+stage.y8th,stage.x4th,stage.canvas.width,rgb);
	//Bottom Right
	createSquare5(stage.xMid+stage.x8th,stage.yMid+stage.y8th,stage.x4th,stage.canvas.width,rgb);
}

function animation12() {
	animation1();
	animation6();
}

function animation13() {
	animation2();
	animation6();
}

function animation14() {
	animation6();
	setTimeout(function(){ animation6(); }, 500);
	setTimeout(function(){ animation6(); }, 500);
	setTimeout(function(){ animation6(); }, 500);
	setTimeout(function(){ animation6(); }, 500);
	setTimeout(function(){ animation6(); }, 500);
}

function animation15() {
	animation4();
	setTimeout(function(){ animation6(); }, 500);
	setTimeout(function(){ animation6(); }, 500);
	setTimeout(function(){ animation6(); }, 500);
	setTimeout(function(){ animation6(); }, 500);
	setTimeout(function(){ animation6(); }, 500);
}

function animation16() {
	animation4();
	setTimeout(function(){ animation6(); }, 500);
	setTimeout(function(){ animation6(); }, 500);
	setTimeout(function(){ animation6(); }, 500);
	setTimeout(function(){ animation6(); }, 500);
	setTimeout(function(){ animation6(); }, 500);
}

function animation17() {
	animation11();
	animation4();
}

function animation18() {
	animation11();
	animation1();
}

function animation19() {
	animation1();
}

function animation20() {
	animation1();
}

function animation21() {
	animation1();
}

function animation22() {
	animation1();
}

function animation23() {
	animation1();
}

function animation24() {
	animation1();
}

function animation25() {
	animation1();
}

//Create Shape Functions

//Square Stuff
function createSquare(x,y,xMax,yMax,rgb){
	var graphics = new createjs.Graphics().beginFill(rgb).drawRect(x,y,xMax,yMax);
	console.log(rgb);
	var square = new createjs.Shape(graphics);
	square.name="Wes's Square";
	square.keepAlive = true;
	
	//Alternatively use can also use the graphics property of the Shape class to renderer the same as above.
	//var square = new createjs.Shape();
	//square.graphics.beginFill("rgba").drawRect(x,y,xMax,yMax);

	// add to the display list:
	//stage.addChildAt(square);
	stage.addChild(square);
}

function createSquare2(x,y,xMax,yMax,rgb){
	var graphics = new createjs.Graphics().beginFill(rgb).drawRect(x,y,xMax,yMax);

	var square = new createjs.Shape(graphics);
	square.name="Square2";
	square.keepAlive = true;
	stage.addChild(square);
}

function createSquare3(x,y,xMax,yMax,rgb){
	var graphics = new createjs.Graphics().beginFill(rgb).drawRect(x,y,xMax,yMax);

	var square = new createjs.Shape(graphics);
	square.name="Square3";
	square.keepAlive = true;
	stage.addChild(square);
}

function createSquare4(x,y,xMax,yMax,rgb){
	var graphics = new createjs.Graphics().beginFill(rgb).drawRect(x,y,xMax,yMax);
	var square = new createjs.Shape(graphics);
	square.name="Square4";
	square.keepAlive = true;
	stage.addChild(square);
}

function createSquare5(x,y,xMax,yMax,rgb){
	var graphics = new createjs.Graphics().beginFill(rgb).drawRect(x,y,xMax,yMax);
	var square = new createjs.Shape(graphics);
	square.name="Square5";
	square.keepAlive = true;
	stage.addChild(square);
}

function createSquare6(x,y,xMax,yMax,rgb){
	var graphics = new createjs.Graphics().beginFill(rgb).drawRect(x,y,xMax,yMax);
	var square = new createjs.Shape(graphics);
	square.name="Square6";
	square.keepAlive = true;
	stage.addChild(square);
}

function createSquare7(x,y,xMax,yMax,rgb){
	var graphics = new createjs.Graphics().beginFill(rgb).drawRect(x,y,xMax,yMax);
	var square = new createjs.Shape(graphics);
	square.name="Square7";
	square.keepAlive = true;
	stage.addChild(square);
}

function createSquare8(x,y,xMax,yMax,rgb){
	var graphics = new createjs.Graphics().beginFill(rgb).drawRect(x,y,xMax,yMax);
	var square = new createjs.Shape(graphics);
	square.name="Square8";
	square.keepAlive = true;
	stage.addChild(square);
}

function MoveTo(x,y,rgb) {
	var line = new createjs.Shape();
	line.graphics.setStrokeStyle(3);
	line.graphics.beginStroke(color);
	line.graphics.moveTo(startX, startY);
	startY++;
	line.graphics.lineTo(startX, startY);
	line.graphics.endStroke();

	triangle.name="Triangle";
	triangle.keepAlive = true;
	stage.addChild(triangle);
}


function createCircle(x,y,radius, rgb){
	var graphics = new createjs.Graphics().beginFill(rgb).drawCircle(x,y,radius);
	
	var circle = new createjs.Shape(graphics);
	circle.name="Sean's Circle";
	circle.keepAlive = true;
	
	//stage.addChildAt(circle, circleS);
	stage.addChild(circle);
}

function createCircle2(x,y,radius, rgb){
	var graphics = new createjs.Graphics().beginFill(rgb).drawCircle(x,y,radius);
	
	var circle = new createjs.Shape(graphics);
	circle.name="Circle2";
	circle.keepAlive = true;
	
	//stage.addChildAt(circle, circleS);
	stage.addChild(circle);
}

function createCircle3(x,y,radius, rgb){
	var graphics = new createjs.Graphics().beginFill(rgb).drawCircle(x,y,radius);
	
	var circle = new createjs.Shape(graphics);
	circle.name="Circle3";
	circle.keepAlive = true;
	
	//stage.addChildAt(circle, circleS);
	stage.addChild(circle);
}

function createCircle4(x,y,radius, rgb){
	var graphics = new createjs.Graphics().beginFill(rgb).drawCircle(x,y,radius);
	
	var circle = new createjs.Shape(graphics);
	circle.name="Circle4";
	circle.keepAlive = true;
	
	//stage.addChildAt(circle, circleS);
	stage.addChild(circle);
}

function createCircle5(x,y,radius,rgb){
	var graphics = new createjs.Graphics().beginFill(rgb).drawCircle(x,y,radius);
	
	var circle = new createjs.Shape(graphics);
	circle.name="Circle5";
	circle.keepAlive = true;
	
	//stage.addChildAt(circle, circleS);
	stage.addChild(circle);
}

function createCircle6(x,y,radius,rgb){
	var graphics = new createjs.Graphics().beginFill(rgb).drawCircle(x,y,radius);
	
	var circle = new createjs.Shape(graphics);
	circle.name="Circle6";
	circle.keepAlive = true;
	
	//stage.addChildAt(circle, circleS);
	stage.addChild(circle);
}

function createCircle7(x,y,radius,rgb){
	var graphics = new createjs.Graphics().beginFill(rgb).drawCircle(x,y,radius);
	
	var circle = new createjs.Shape(graphics);
	circle.name="Circle7";
	circle.keepAlive = true;
	
	//stage.addChildAt(circle, circleS);
	stage.addChild(circle);
}

function createCircle8(x,y,radius,rgb){
	var graphics = new createjs.Graphics().beginFill(rgb).drawCircle(x,y,radius);
	
	var circle = new createjs.Shape(graphics);
	circle.name="Circle8";
	circle.keepAlive = true;
	
	//stage.addChildAt(circle, circleS);
	stage.addChild(circle);
}

function createCircle9(x,y,radius,rgb){
	var graphics = new createjs.Graphics().beginFill(rgb).drawCircle(x,y,radius);
	
	var circle = new createjs.Shape(graphics);
	circle.name="Circle9";
	circle.keepAlive = true;
	
	//stage.addChildAt(circle, circleS);
	stage.addChild(circle);
}

function createEllipse (x,y,w,h){
	var graphics = new createjs.Graphics().beginFill(rgb).drawEllipse(x,y,w,h)
	var ellipse = new createjs.Shape(graphics);
	
	//stage.addChildAt(ellipse, ellipseS);
	stage.addChild(ellipse);
}

function createMatrix(a,b,c,d,tx,ty) {
	var matrix = new createjs.Matrix2D.prototype;
	this.setValues(1,2,3,4,5,6);
	
	stage.addChild(matrix)
}

(createjs.Graphics.Polygon = function(x, y, points) {
    this.x = x;
    this.y = y;
    this.points = points;
}).prototype.exec = function(ctx) {
    var start = this.points[0];
    ctx.moveTo(start.x, start.y);
    this.points.slice(1).forEach(function(point) {
        ctx.lineTo(point.x, point.y);
    });
    ctx.lineTo(start.x, start.y);
}
createjs.Graphics.prototype.drawPolygon = function(x, y, args) {
    var points = [];
    if (Array.isArray(args)) {
        args.forEach(function(point) {
            point = Array.isArray(point) ? {x:point[0], y:point[1]} : point;
            points.push(point);
        });
    } else {
        args = Array.prototype.slice.call(arguments).slice(2);
        var x = null;
        args.forEach(function(val) {
            if (x == null) {
                x = val;
            } else {
                points.push({x: x, y: val});
                x = null;
            }
        });
    }
    return this.append(new createjs.Graphics.Polygon(x, y, points));
}

function createTriangle (x1,y1,x2,y2,x3,y3){
	var triangle = new createjs.Shape();
	triangle.graphics.beginStroke("white");
	triangle.beginFill("red");
	
	stage.addChildAt(triangle, triangleS);
}

function createXgon (p1,p2,p3,p4,p5,p6,p7,p8){
	var octogon = new createjs.Shape();
}

//Timeline Functions
function tick(event) {
	// draw the updates to stage
	stage.update(event);
	stage.width  = window.innerWidth;
	stage.height = window.innerHeight;

	var l = stage.getNumChildren();
	var squareIndex = stage.getChildAt();

	var childName = stage.getChildByName("square");
	var childNumber = stage.getChildAt(i);
	//console.log("I have "+l+" number of children.")
	
	//Animations
		for (var i = 0; i < l; i++) {
				var object = stage.getChildAt(i); 
				if(undefined==object) continue;
	
				
				//console.log(object);
				
				//Square Animations
				if(object.name=="Wes's Square"){
					// update position, scale, and alpha:
					object.x += 3;
					//object.y += 1;
					object.scaleX += 3;
					//object.alpha -=.1;
					//object.scaleY += 1;
				}
				
				if(object.name=="Square2") {
					object.y += 3;
				}
				
				if(object.name=="Square3") {
					object.x += 3;
				}
				if(object.name=="Square4") {
					object.x -= 3;
				}
				if(object.name=="Square5") {
					object.y -= 1;
				}
				if(object.name=="Square6") {
					//object.MoveTo(stage.xMid-stage.x4th);
					//Graphics.MoveTo(stage.xMid-stage.x4th);
				}
				if(object.name=="Square7") {
					
				}
				if(object.name=="Square8") {
					object.x -= stage.x8th;
					//object.y += 1;
					//object.alpha -=.1;
					//object.scaleY += 1;	
				}
				
				//Circle Animations
				if(object.name=="Sean's Circle"){
					
				}
				
				if(object.name=="Circle2") {
				// update position, scale, and alpha:
				object.x += 1;
				//object.y += 1;
				//object.scaleX += .1;
				}
				if(object.name=="Circle3") {
				// update position, scale, and alpha:
				object.x -= 1;
				//object.y += 1;
				//object.scaleX += .1;
				}
				if(object.name=="Circle4") {
					object.skewX += 1;
				}
				if(object.name=="Circle5") {
					object.skewX -= 1;
				}
				if(object.name=="Circle6") {
					object.scaleX -= stage.x32nd/400;
					object.scaleY -= stage.x32nd/400;
				}
				if(object.name=="Circle7") {
					object.scaleX += stage.x32nd/400;
					object.scaleY -= stage.x32nd/400;
				}
				if(object.name=="Circle8") {
					object.scaleX -= .1;
					object.scaleY += .1;
				}
				if(object.name=="Circle9") {
					object.scaleX += .1;
					object.scaleY += .1;
				}
				
				
				object.alpha -=.01;
				//object.scaleY += 1;
			
				//remove object that are off screen or not invisble
				if (object.alpha <= 0) {
					stage.removeChildAt(i);
				}	
				if (object.x >= stage.width) {
					stage.removeChildAt(i);
				}
			
				if (object.keepAlive != true) {
					stage.removeChildAt(i);
				}
			}
		//Animation 3
			/*for (var i = 0; i < l; i++) {
					var object = stage.getChildAt(i); 
	
					// update position, scale, and alpha:
					//object.x += 1;
					//object.y += 1;
					object.w -= .1;
					//object.scaleY += .1;
					//object.alpha -=.1;
		
					//remove object that are off screen or not invisble
					if (window.innerWidth < object.x || window.innerHeight < object.y) {
						stage.removeChildAt(i);
					}	
	
				}*/
	// draw the updates to stage
	stage.update(event);

}

function animationExample() {
	for (var i = 0; i < l; i++) {
		var object = stage.getChildAt(i);

		// update position, scale, and alpha:
		object.x += 1;
		object.y += 1;
		object.scaleX += .1;
		//object.alpha -=.1;
		//object.scaleY += 1;
		
		//remove object that are off screen or not invisble
		if (window.innerWidth < object.x || window.innerHeight < object.y) {
			stage.removeChildAt(i);
		}
	}
}

function outOfBounds(o, bounds) {
	//is it visibly off screen
	return o.x < bounds * -2 || o.y < bounds * -2 || o.x > canvas.width + bounds * 2 || o.y > canvas.height + bounds * 2;
}

function animationOne() {
	//create the bullet
	var o = squareS[square];
	
	o.x = square.x;
	o.y = square.y;
	o.rotation = square.rotation;
	o.mTimer = movieTimer;
	o.active = true;

	//draw the bullet
	o.graphics.beginStroke("#FFFFFF").moveTo(-1, 0).lineTo(1, 0);
}


//handle bullet movement and looping
for (bullet in bulletStream) {
	var o = bulletStream[bullet];
	if (!o || !o.active) {
		continue;
	}
	if (outOfBounds(o, ship.bounds)) {
		placeInBounds(o, ship.bounds);
	}
	o.x += Math.sin(o.rotation * (Math.PI / -180)) * BULLET_SPEED;
	o.y += Math.cos(o.rotation * (Math.PI / -180)) * BULLET_SPEED;

	if (--o.entropy <= 0) {
		stage.removeChild(o);
		o.active = false;
	}
}

p.tick = function (event) {
	//move by velocity
	this.x += this.vX;
	this.y += this.vY;

	//with thrust flicker a flame every Ship.TOGGLE frames, attenuate thrust
	if (this.thrust > 0) {
		this.timeout++;
		this.shipFlame.alpha = 1;

		if (this.timeout > Ship.TOGGLE) {
			this.timeout = 0;
			if (this.shipFlame.scaleX == 1) {
				this.shipFlame.scaleX = 0.5;
				this.shipFlame.scaleY = 0.5;
			} else {
				this.shipFlame.scaleX = 1;
				this.shipFlame.scaleY = 1;
			}
		}
		this.thrust -= 0.5;
	} else {
		this.shipFlame.alpha = 0;
		this.thrust = 0;
	}
}

//handle what a spaceRock does to itself every frame
p.tick = function (event) {
	this.rotation += this.spin;
	this.x += this.vX;
	this.y += this.vY;
}


/*function tick(event) {
	// draw the updates to stage
	stage.update(event);
	stage.width  = window.innerWidth;
	stage.height = window.innerHeight;

	var l = stage.getNumChildren();

	//console.log("I have "+l+" number of children.")

	for (var i = 0; i < l; i++) {
		var object = stage.getChildAt(i);

		// update position, scale, and alpha:
		object.x += 1;
		object.y += 1;
		object.scaleX += .1;
		//object.alpha -=.1;
		//object.scaleY += 1;
		
		//remove object that are off screen or not invisble
		if (window.innerWidth < object.x || window.innerHeight < object.y) {
			stage.removeChildAt(i);
		}
		
	}

	// draw the updates to stage
	stage.update(event);

}


function tick(event) {
	// draw the updates to stage
	stage.update(event);
	stage.width  = window.innerWidth;
	stage.height = window.innerHeight;

	var l = stage.getNumChildren();

	//console.log("I have "+l+" number of children.")
	for (var i = 0; i < l; i++) {
		var object = stage.getChildAt(i);

		// update position, scale, and alpha:
		object.x += 1;
		object.y += 1;
		object.scaleX += .1;
		//object.alpha -=.1;
		//object.scaleY += 1;
		
		//remove object that are off screen or not invisble
		if (window.innerWidth < object.x || window.innerHeight < object.y) {
			stage.removeChildAt(i);
		}
	}
	
	// draw the updates to stage
	stage.update(event);
}

// Game Example of tick function
function tick(event) {
	//handle firing
	if (nextBullet <= 0) {
		if (alive && shootHeld) {
			nextBullet = BULLET_TIME;
			fireBullet();
		}
	} else {
		nextBullet--;
	}
*/

function changeBG() {
	
  var R = Math.floor(Math.random()*255);
  var G = Math.floor(Math.random()*255);
  var B = Math.floor(Math.random()*255);
  console.log(R);
  
    $("#content").stop().animate({
      backgroundColor: "rgba("+R+","+G+","+B+",1)"
    }, 1000 );
}


$(document).keydown(function(e) {

if(event.keyCode==81){ //Q
	changeBG();
}
if(event.keyCode==87){ //W
	animation1();
	console.log(squareS);
}
if(event.keyCode==69){ //E
	animation2();
}
if(event.keyCode==82){ //R
	animation3();
}
if(event.keyCode==84){ //T
	animation4();
}
if(event.keyCode==89){ //Y
	animation5();
}
if(event.keyCode==85){ //U
	animation6();
}
if(event.keyCode==73){ //I
	animation7();
}
if(event.keyCode==79){ //O
	animation8();
}
if(event.keyCode==80){ //P
	animation9();
}
if(event.keyCode==65){ //A
	animation10();
}
if(event.keyCode==83){ //S
	animation11();
}
if(event.keyCode==68){ //D
	animation12();
}
if(event.keyCode==70){ //F
	animation13();
}
if(event.keyCode==71){ //G
	animation14();
}
if(event.keyCode==72){ //H
	animation15();
}
if(event.keyCode==74){ //J
	animation16();
}
if(event.keyCode==75){ //K
	animation17();
}
if(event.keyCode==76){ //L
	animation18();
}
if(event.keyCode==90){ //Z
	animation19();
}
if(event.keyCode==88){ //X
	animation20();
}
if(event.keyCode==67){ //C
	animation21();
}
if(event.keyCode==86){ //V
	animation22();
}
if(event.keyCode==66){ //B
	animation23();
}
if(event.keyCode==78){ //N
	animation24();
}
if(event.keyCode==77){ //M
	animation25();
}

});