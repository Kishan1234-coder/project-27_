class Bob{
    constructor(x,y,diameter){
         var options  = {
          isStatic : false,
         restitution : 0.3,
          friction : 0.3,
          density : 1.0

      }
      this.body = Bodies.circle(x,y,diameter,options)
      this.diameter = diameter;
     // this.image = loadImage("paper.png");
      
      World.add(world , this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("pink");
        //imageMode(CENTER);
       // image(this.image,pos.x,pos.y,60,60);
        ellipse(pos.x,pos.y,this.diameter);
        

        

        pop();
    }
}