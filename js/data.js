var dataObj=function(){
	this.dataNum=0;
	this.double=1;
	this.score=0;
	this.gameOver=false;
	this.alpha=0;
}
dataObj.prototype.reset=function(){
	this.dataNum=0;
	this.double=1;
}
dataObj.prototype.draw=function(){
	var w=can1.width;
	var h=can1.height;

	ctx1.save();
	//ctx1.
	ctx1.shadowBlur=10;
	ctx1.shadowColor="white";
	ctx1.fillText("score: "+this.score,w*0.5,50);
	//ctx1.fillText("FruitNumber: "+this.dataNum,w*0.5,h-50);
	//ctx1.fillText("double: "+this.double,w*0.5,h-80);
	if(data.gameOver){
		this.alpha+=deltaTime*0.0005;
		can1.removeEventListener("mousemove",onMouseMove,false);//解除绑定事件
		if(this.alpha>1)
			this.alpha=1;
		ctx1.fillStyle="rgba(255,255,255,"+this.alpha+")";
		ctx1.fillText("GAMEOVER ",w*0.5,h*0.5)
	}
	ctx1.restore();
}
dataObj.prototype.addScore=function(){
		this.score+=this.dataNum*100*this.double;
}