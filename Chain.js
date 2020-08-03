class Chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    fly(){
        this.chain.bodyA=null;
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        if (this.chain.bodyA){
            var pA=this.chain.bodyA.position;
            var pB=this.pointB;
            strokeWeight(4);
            line(pA.x,pA.y,pB.x,pB.y);
                }
        
    }
    }
    
