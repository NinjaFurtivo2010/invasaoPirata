
class Boat {
  constructor(x, y, width, height, boatPos,BoatAnime) {
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;
    this.Animation1 = BoatAnime;
    this.image = loadImage("./assets/boat.png");
    this.boatPosition = boatPos;
    World.add(world, this.body);
  }
 
   Animation(){
    this.speed += 0.05
   }

 remove(index){
  setTimeout(()=>{
    Matter.World.remove(world,boats[index].body);
    delete boats[index];

  },2000);
 }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    var index = floor (this.speed % this.Animation1.length)
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.Animation1[index],0 , this.boatPosition, this.width, this.height );
    pop();
  }
}
