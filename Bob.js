class Bob{
	constructor(x,y)
	{
		var options = {isStatic: false, restitution: 0.3, friction: 0, density: 0.3}
		this.r=25;
		this.body=Bodies.circle(x,y, this.r, options)
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push();
			translate(pos.x, pos.y);
            fill("pink");
			ellipseMode(RADIUS);
            ellipse(0, 0, this.r, this.r);
			pop();
	}

}