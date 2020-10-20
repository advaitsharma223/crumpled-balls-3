class Paper{

    constructor(x, y) {
        
        
        var options = {
            isStatic: false,
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2,
        }
        //this.body = loadImage("sprites/paper.png");

    
     this.body = Bodies.circle(x, y, 30, options);

     World.add(world, this.body);   
    }

    display() {

        var position = this.body.position
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(position.x, position.y, 30, 30);      
    }
}

//function keyPressed() {

  //  if(keyCode === UP_ARROW) {
    //    push(); 
      //  Matter.Body.applyForce(paper.body, paper.body.position.x,paper.body.position.y, {x:5, y:-5})
        //pop();
    //}
//}