class Slingshot{
    constructor(bodyA, pointB){
        var options = {
           length:10,
           stiffness:0.15, 
           bodyA:bodyA,
           pointB:pointB
        }
        this.pointB=pointB;
        this.sling=Constraint.create(options)
        World.add(world, this.sling);
    }
    fly() {
        this.sling.bodyA=null;
    }
    attach(body){
        this.sling.bodyA = body;
    }
    display(){
        if(this.sling.bodyA ){
            var pA=this.sling.bodyA.position
            var pB=this.pointB;
            push()
            stroke(57,26,10)
            if(pA.x<=210){
                strokeWeight(7)
                line(pA.x-20,pA.y,pB.x-10,pB.y)
                line(pA.x-20,pA.y,pB.x+30,pB.y)
            }
            else{
                strokeWeight(3)     
                line(pA.x+20,pA.y,pB.x-30,pB.y)
                line(pA.x+20,pA.y,pB.x+20,pB.y)
            }
            pop()
        }
        
    }
}