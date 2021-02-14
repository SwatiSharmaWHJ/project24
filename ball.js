class ball {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
          'isStatic':false
      }
      this.body=Matter.Bodies.circle(x,y,radius,options)
     
      this.width = width;
      this.height = height;
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display()
    {
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(4);
      stroke("purple");
      fill("purple");
      circle(0, 0, this.radius);
      pop();
    }
  };