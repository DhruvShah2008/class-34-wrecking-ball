class  Building{
    constructor(x,y,width,height){
        var options = {
         'restitution':0.8,
         'friction':1,
         'density':0.04,
          }
        this.body = Bodies.rectangle(x,y,50,50,options)
        this.width = 50
        this.height = 50
         World.add(world,this.body)
    }
    display(){
    var pos  = this.body.position
    var angle  = this.body.angle
    push();
    translate(pos.x,pos.y)
    rectMode(CENTER)
    fill("green")
    stroke("blue")
    strokeWeight (5)
    rect(0, 0,this.width,this.height)
    pop();
    }
    
    }