var drops = [];
var x, y;
var bat1, bat2, bat3;

function preload(){
  bat1 = loadImage("images/walking_1.png");
  bat2 = loadImage("images/walking_2.png");
}

function setup() {
  createCanvas(640, 500);
  for (var i = 0; i < 500; i++) {
    drops[i] = new Drop();
  }
  
  angleMode(RADIANS);
}

function draw() {
  background(0,0,50);  
  
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();    
  }
  
  ellipseMode(CENTER);
  fill("#FFFFB3");
  noStroke();
  ellipse(560,80,100); 
  
  fill("grey");
  rectMode(CENTER);
  rect(width/2,height,width,10);
  
  image(bat1,20,175,200,350);
  
  Drop();
  stars();
  //drawSprites();
  
  
 
}

function Drop() {
  this.x = random(width);
  this.y = random(-500, -50);
  this.z = random(0, 20);
  this.len = map(this.z, 0, 20, 10, 20);
  this.yspeed = map(this.z, 0, 20, 1, 20);

  this.fall = function() {
    this.y = this.y + this.yspeed;
    var grav = map(this.z, 0, 20, 0, 0.2);
    this.yspeed = this.yspeed + grav;

    if (this.y > height) {
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 4, 10);
    }
  };

  this.show = function() {
    var thick = map(this.z, 0, 20, 1, 3);
    strokeWeight(thick);
    stroke(50,150,250);
    line(this.x, this.y, this.x, this.y + this.len);
  };
}

function stars(){
  noStroke();
  fill(255, 255, 0);
  
  ellipse(206,9,4);
  ellipse(509,15,4);
  ellipse(376,22,4);
  ellipse(600,25,4);
  ellipse(165,26,4);
  ellipse(558,49,4);
  ellipse(616,59,4);
  ellipse(185,66,4);
  ellipse(585,75,4);
  ellipse(517,77,4);
  ellipse(253,80,4);
  ellipse(303,82,4);
  ellipse(552,85,4);
  ellipse(446,86,4);
  ellipse(305,93,4);
  ellipse(347,95,4);
  ellipse(121,105,4);
  ellipse(407,111,4);
  ellipse(440,114,4);
  ellipse(150,144,4);
  ellipse(188,149,4);
  ellipse(112,172,4);
  ellipse(114,181,4);
  ellipse(337,186,4);
  ellipse(377,188,4);
  ellipse(48,191,4);
  ellipse(279,196,4);
  ellipse(147,197,4);
  ellipse(312,198,4);
  ellipse(28,199,4);
  ellipse(57,9,4);
  ellipse(290,15,4);
  ellipse(156,22,4);
  ellipse(98,25,4);
  ellipse(43,26,4);
  ellipse(2,49,4);
  ellipse(190,59,4);
  ellipse(168,66,4);
  ellipse(124,75,4);
  ellipse(546,77,4);
}