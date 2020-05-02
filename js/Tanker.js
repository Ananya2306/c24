class Cannon{
  constructor(x, y, width, height){
      var options = {
          isStatic: true,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
  };

  display(){
      var pos = this.body.position;
      if(keyIsDown(LEFT_ARROW) && angle > -55){
          angle = angle - 5;
          
      }
      if(keyIsDown(RIGHT_ARROW) && angle < 0){
          angle = angle + 5;
          
      }
      push();
      fill(255);
      translate(pos.x, pos.y);
      rotate(angle);
      //Create the shooter from which the cannonballs will get dispersed
      rect(0, 0, this.width, this.height);
      pop();
      fill(255)
      //Create the semicircle above the two rectangles 
  
      arc(70, 465, 100, 100, -PI, 0, CHORD);
      //Create the two rectangles below the semicircle
      rect(20, height-85, 100, 20);
      rect(20, height-65, 100, 20);
  }
}
