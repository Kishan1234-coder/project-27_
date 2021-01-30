class Bob{
    constructor(x,y,diameter){
         var options  = {
          isStatic : false,
         restitution : 1,
          friction : 0.5,
          density : 1

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
        ellipse(0,0,this.diameter);
        

        

        pop();
    }
}