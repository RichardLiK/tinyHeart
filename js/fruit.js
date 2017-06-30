var fruitObj=function(){
	this.alive=[];
	this.x=[];
	this.y=[];
	this.spd=[];
	this.l=[];
	this.fruitType=[];
	this.orange = new Image();
	this.blue = new Image();
	this.aneNo=[];
}
fruitObj.prototype.num=30;
fruitObj.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.alive[i]=false;
		this.x[i]=0;
		this.y[i]=0;
		this.spd[i]=Math.random()*0.017+0.003;
		this.fruitType[i]="";
		this.aneNo[i]=0;
		//this.born(i);
	}
	this.orange.src="./src/fruit.png";
	this.blue.src="./src/blue.png";
}
fruitObj.prototype.draw=function(){
	for(var i=0;i<this.num;i++){
		if(this.alive[i]){
			if(this.fruitType[i]=="blue"){
				var pic=this.blue;
			}
			else{
				var pic=this.orange;
			}
			if(deltaTime>40) deltaTime=40;

			if(this.l[i]<=14){//grow
				this.x[i]=ane.headx[this.aneNo[i]];
				this.y[i]=ane.heady[this.aneNo[i]];
				this.l[i]+=this.spd[i]*deltaTime;
			}
			
			else {
				this.y[i]-=this.spd[i]*7*deltaTime;
			}
			ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);//l[i],l[i]是图片尺寸
			if(this.y[i]<10)
				{
					this.alive[i]=false;
				}
		}
		
	}
}
fruitObj.prototype.born=function(i){
	
	//this.x[i]=ane.headx[Id];
	//this.y[i]=ane.heady[Id];
	this.aneNo[i]=Math.floor(Math.random()*ane.num);
	this.l[i]=0;
	this.alive[i]=true;
	var ran=Math.random();
	if(ran<0.2){
		this.fruitType[i]="blue";
	}
	else{
		this.fruitType[i]="orange";
	}
}
fruitObj.prototype.dead=function(i){
	this.alive[i]=false;
}
function fruitMonitor(){
	var num=0;
	for(var i=0;i<fruit.num;i++){
		if(fruit.alive[i]) num++;
	}
	if(num<15){
		//send
		sendFruit();
		return;
	}
}
function sendFruit(){
	for(var i=0;i<fruit.num;i++){
		if(!fruit.alive[i]){
			fruit.born(i);
			return;
		}
	}
}
