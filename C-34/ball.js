class Ball{
    constructor(x,y,radius){
        var options={
            'density':1,
            'frictionAir':0.005




        }
        this.body=Bodies.circle(x,y,radius);
        this.r=radius;
        World.add(world,this.body);




    }
    display(){


        push()
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle)
        fill("darkGrey");
        ellipse(0,0,this.r,this.r);
        pop()

    }





}