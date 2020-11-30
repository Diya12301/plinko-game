const world=Matter.World;
const bodies=Matter.Bodies;
const engine=Matter.Engine;

var W,E;

var particles= [];
var plinkos= [];
var divisions= [];

var divisionHeight=300;





function setup() {
  createCanvas(480,800);
  fill("black");

  E=engine.create();
  W=E.world;

  ground = new Ground(300,300,1200,20);
division1= new Divisions(50,210,5,150);
division2= new Divisions(150,210,5,150);
division3= new Divisions(250,210,5,150);
division4= new Divisions(350,210,5,150);
division5= new Divisions(450,210,5,150);

for(var j = 40; j <=innerWidth; j=j+50)
  {
    plinkos.push(new Plinko(j,75));
  
  }
  
  for (var j= 15; j<=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,175));
  }
  
  for(var k=0;k <=innerWidth; k =k+80){
    divisions.push(new Divisions(k,divisionHeight/2,10,divisionHeight));
  }
  
  
  for(var j=0; j <particles.length; j++){
    particles[j].display();
  } 
  for(var k=0; k< divisions.length; k++){
    divisions[k].display();
  }
  
  if(framecount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  
  engine.update(E);

  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();

  

  
 

  drawSprites();
}