class Sling{


    constructor(bdyA , bdyB ,offset){

       // this.offset=offset
        
        var options = {

            bodyA : bdyA,
            bodyB : bdyB,
            pointA : {x:offset.x, y:offset.y}
        }
       
        this.offsetX=offset.x;
        this.offsetY=offset.y;
        this.const = Constraint.create(options)
        World.add(world , this.const)

    }
display(){

    var bd1 = this.const.bodyA.position
    var bd2 = this.const.bodyB.position

    strokeWeight(2)
    stroke("yellow");

    var acrA = bd1.x + this.offsetX
    var acrB=bd1.y+this.offsetY//u can givr bd1.y directly also

    
    line(acrA ,acrB , bd2.x , bd2.y);

}


/*class Sling{


    constructor(bdyA , bdyB ,offsetX ,offsetY ){

        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {

            length: 50,
            stiffness : 0.04,
            bodyA : bdyA,
            bodyB : bdyB,
            pointA : {x:this.offsetX, y:this.offsetY}
        }
       

        this.const = Constraint.create(options)
        World.add(world , this.const)

    }
display(){

    var bd1 = this.const.bodyA.position
    var bd2 = this.const.bodyB.position

    strokeWeight(5)
    stroke("yellow");

    var acrAx = bd1.x + this.offsetX
    var acrAy = bd1.y + this.offsetY

    
    line(acrAx ,acrAy , bd2.x , bd2.y);

}*/


}

/*class Rope{
    constructor(body1,body2, offsetX, offsetY)
    {
    this.offsetX=offsetX
    this.offsetY=offsetY
    var options={
    bodyA:body1,
    bodyB:body2,
    pointB:{x:this.offsetX, y:this.offsetY}
    }
    //console.log(options);
    this.rope=Constraint.create(options)
    World.add(world,this.rope)
    }
    display()
    {
    var pointA=this.rope.bodyA.position;
    var pointB=this.rope.bodyB.position;
    strokeWeight(2);
    var Anchor1X=pointA.x
    var Anchor1Y=pointA.y
    var Anchor2X=pointB.x+this.offsetX
    var Anchor2Y=pointB.y+this.offsetY
    line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
   }*/