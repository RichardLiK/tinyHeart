var momObj=function(){
	this.x;
	this.y;
	this.angle;
	this.bigBody=new Image();
	
	this.bigTailTimer=0;
	this.bigTailCount=0;

	this.bigEyeTimer=0;
	this.bigEyeCount=0;
	this.bigEyeInterval=1000;

	this.bigBodyCount=0;
}
momObj.prototype.init=function(){
	this.x=canWidth*0.5;
	this.y=canHeight*0.5;
	this.angle=0;
	this.bigBody.src="./src/bigSwim0.png";
	
}
momObj.prototype.draw=function(){
	//lerp x,y
	this.x=lerpDistance(mx,this.x,0.9);
	this.y=lerpDistance(my,this.y,0.9);

	var deltaX=mx-this.x;
	var deltaY=my-this.y;
	var beta=Math.atan2(deltaY,deltaX)+Math.PI;//-Pi,PI
	this.angle=lerpAngle(beta,this.angle,0.6);

	this.bigTailTimer+=deltaTime;
	if(this.bigTailTimer>70){
		this.bigTailCount=(this.bigTailCount+1)%8;
		this.bigTailTimer%=70;
	}

	this.bigEyeTimer+=deltaTime;
	if(this.bigEyeTimer>this.bigEyeInterval)
	{
		this.bigEyeCount=(this.bigEyeCount+1)%2;
		this.bigEyeTimer%=this.bigEyeInterval;
		if(this.bigEyeCount==0){
			this.bigEyeInterval=Math.random()*1500+2000;
		}
		else{
			this.bigEyeInterval=200;
		}
	}

	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	var bigTailCount=this.bigTailCount;
	ctx1.drawImage(Tail[bigTailCount],-Tail[bigTailCount].width*0.5+30,-Tail[bigTailCount].height*0.5);
	var bigBodyCount=this.bigBodyCount;
	if(data.double==1){
		ctx1.drawImage(momBodyOrg[bigBodyCount],-momBodyOrg[bigBodyCount].width*0.5,-momBodyOrg[bigBodyCount].height*0.5);
	}else{
		ctx1.drawImage(momBodyBlue[bigBodyCount],-momBodyBlue[bigBodyCount].width*0.5,-momBodyBlue[bigBodyCount].height*0.5);
	}
	ctx1.drawImage(this.bigBody,-this.bigBody.width*0.5,-this.bigBody.height*0.5);
	var bigEyeCount=this.bigEyeCount;
	ctx1.drawImage(momEye[bigEyeCount],-momEye[bigEyeCount].width*0.5,-momEye[bigEyeCount].height*0.5);
	
	ctx1.restore();
}