class Ball{
  constructor(x, y, radius){
      var options = {
          restitution: 1.0,
          frictionStatic: 0,
          frictionAir: 0,
          friction: 0,
          inertia: Infinity
      }
      this.body = Bodies.circle(x, y, radius, options);
      World.add(world, this.body);
      this.radius = radius;
      World.add(world,this.body);
  };

  display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      ellipse(0, 0, this.radius, this.radius);
      pop();
  }
}
