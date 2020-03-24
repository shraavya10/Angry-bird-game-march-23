class Bird{
  constructor(x,y)
{
 var options ={
    'restitution':0.8,
    'friction':1.0,
    'density':1.0
 }
 this.body=Bodies.rectangle(x,y,50,50,options);
 World.add(world,this.body);

}
display(){
    var pos =this.body.position;
    pos.x=mouseX;
    pos.y=mouseY;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    strokeWeight(3);
    stroke("green");
    fill("red");
    rectMode(CENTER);
    
    rect(0,0, 50, 50);
    pop();
   
    

}  


}