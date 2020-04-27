// m = mercury; v = venus; e = earth; ma = mars; j = jupiter; s = saturn;n = neptune; u = uranus; I = image;

var sun,sunImage;
var m,mI,v,vI,e,eI,ma,maI;
var j,jI,s,sI,n,nI,u,uI;
var isEnd;
var start,startImage;
alert("To Watch The Sun Grow Hover Over Expand.")

function preload(){
  sunImage = loadImage("Sun.png");
  mI = loadImage("M.png");
  vI = loadImage("V.png")
  eI = loadImage("E.png");
  maI = loadImage("Ma.png");
  jI = loadImage("J.png");
  sI = loadImage("S.png");
  nI = loadImage("N.png");
  uI = loadImage("U.png");
  startImage = loadImage("download.png");
}

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  sun = createSprite(0,349,30,30);
  sun.x = window.innerWidth/2;
  sun.y = window.innerHeight/2;
  sun.addImage("sunImg",sunImage);
  sun.scale = 1;
  sun.setCollider("circle",0,0,80);
  m = createSprite(450,349,20,20);
  m.y = sun.y;
  m.x = window.innerWidth/2 - 170;
  m.addImage("mImg",mI);
  m.scale = 0.5
  m.setCollider("circle",0,-10,65);
  v = createSprite(0,0,30,30);
  v.x = window.innerWidth/2 + 185;
  v.y = sun.y;
  v.addImage("vImg",vI);
  v.scale = 0.55;
  v.setCollider("circle",0,-25,70);
  e = createSprite(0,0,30,30);
  e.x = window.innerWidth/2 - 300;
  e.y = sun.y;
  e.setCollider("circle",0,0,60);
  e.addImage("eImg",eI);
  e.scale = 0.6;
  ma = createSprite(0,0,30,30);
  ma.x = window.innerWidth/2 + 315;
  ma.scale = 0.5;
  ma.addImage("maImg",maI);
  ma.setCollider("circle",0,-10,70);
  ma.y = sun.y - 10;
  j = createSprite(0,0,30,30);
  j.x = window.innerWidth/2 - 445;
  j.y = sun.y;
  j.addImage("jImg",jI);
  j.setCollider("circle",0,-10,70);
  j.scale = 0.75;
  s = createSprite(0,0,30,30);
  s.x = window.innerWidth/2 + 445;
  s.y = sun.y;
  s.addImage("sImg",sI);
  s.setCollider("circle",0,-10,80);
  s.scale = 0.83;
  u = createSprite(0,0,30,030);
  u.x = window.innerWidth/2 - 585;
  u.y = sun.y + 10;
  u.addImage("uImg",uI);
  u.scale = 0.7;
  u.setCollider("circle",0,-25,80);
  n = createSprite(0,0,80,80);
  n.x = window.innerWidth/2 + 590;
  n.y = sun.y;
  n.scale = 0.7;
  n.setCollider("circle",0,-15,80);
  n.addImage("nImg",nI);
  isEnd = 1;
  start = createSprite(0,0,100,30);
  start.x = window.innerWidth/2 - 570;
  start.y = window.innerHeight/2 - 320;
  start.addImage("startImg",startImage);
  start.scale = 0.3;
  start.setCollider("rectangle",0,0,130,50);
}

function draw() {
  background(0);  
  if(isEnd === 1){
  if(frameCount%1 === 0 && mouseIsOver(start)){
    sun.scale += 0.01;
  }
}
  if(collideClear(sun,m)){
    m.remove();
  }
  if(collideClear(sun,v)){
    v.remove();
  }
  if(collideClear(sun,e)){
    e.remove();
  }
  if(collideClear(sun,ma)){
    ma.remove();
  }
  if(collideClear(sun,j)){
    j.remove();
  }
  if(collideClear(sun,s)){
    s.remove();
  }
  if(collideClear(sun,u)){
    u.remove();
  }
  if(collideClear(sun,n)){
    n.remove();
    isEnd = 0;
  }
  if(isEnd === 0){
    sun.scale += 0;
  }

  console.log(sun.scale);
  console.log(frameCount);
  drawSprites();
}