class Box {
  constructor(x,y,width,height) {
    var options = {
        'restitution':0.8
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.Visibility=255
    World.add(world, this.body);
  }
  disapear(){
    if(this.body.speed<3){
      this.display()
    } else {
      this.Visibility-=15
      if(this.Visibility<=0){
        World.remove(world, this.body)
      }
    }
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("pink");
    rect(pos.x, pos.y, this.width, this.height);
  }
  score(){
    if(this.Visibility<0 && this.Visibility>-105){
      score++
    }
  }
}