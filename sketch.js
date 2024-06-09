const width = 800;
const height = 600;
const len = 200;
var angle ;
var root ;
var slider; 

function setup() {
  createCanvas(width, height);
  slider = createSlider(0, 180, 45);
  slider.position(10, 10);
  angle = slider.value()*PI/180;
  const rootBegin = createVector(width/2 , height);
  root = new branch(rootBegin , len , -PI/2);
  
}

function draw() {
  background(0);
  angle = slider.value()*PI/180;
  drawBranch(root);
  newBranch(root);
}

function branch(begin , len , angle){
  this.begin = begin;
  this.len = len;
  this.angle = angle;
  this.end = createVector(this.begin.x+len*cos(angle) , this.begin.y+len*sin(angle));
  this.left;
  this.right;
}

function drawBranch(branch){
  stroke(255);
  line(branch.begin.x , branch.begin.y , branch.end.x , branch.end.y);
  if(branch.right)drawBranch(branch.right);
  if(branch.left)drawBranch(branch.left);
}

function newBranch(parent){
  parent.right = new branch(parent.end , parent.len*.67 , parent.angle+angle);
  parent.left = new branch(parent.end , parent.len*.67 , parent.angle-angle);
  if(parent.right.len > 5){
    newBranch(parent.right);
  }
  if(parent.left.len > 5){
    newBranch(parent.left);
  }
  
}
