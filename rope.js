class Rope{
    constructor(bodyA,pointB)
    {
        var options = {
            bodyA:bodyA, 
            pointB:pointB,
            stiffness:1.2,
            length:500
        
        }
        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    fly(){
        this.rope.bodyA = null;
    }
    display(){
      
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push ();
            strokeWeight (5);
            line (pointA.x,pointA.y,pointB.x,pointB.y);
    pop ();
        }
       
    }
}