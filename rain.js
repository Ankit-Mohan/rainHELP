class rain extends BaseClass {
    constructor(x,y,radius){
      super(x,y,radius);

      this.trajectory = [];
    }

    createDrop(){
        circle(this.body.x,this.body.y,5,5)
    }

    display() {
      super.display();
  
      /*if(this.body.velocity.x>3 && this.body.position.x>200 )
      {
          var position = [this.body.position.x,this.body.position.y];
          this.trajectory.push(position);
        }*/
    
      for (var i=0;i < maxDrops;i++ )
      {
        drops.push(new createDrop(random(0,400), random(0,400)));
      }
    }
  }