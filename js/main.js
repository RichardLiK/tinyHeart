var can1;
var can2;
var ctx1;
var ctx2;
var lastTime=Date.now();
var deltaTime=0;
var bgPic=new Image();
var canWidth;
var canHeight;
var ane;
var fruit;
var mom;
var mx;
var my;
var baby;
var Tail=[];
var babyEye=[];
var babyBody=[];
var momEye=[];
var data;
var momBodyOrg=[];
var momBodyBlue=[];
var wave;
var halo;
var dust;
var dustPic=[];


document.body.onload=game;
function game(){
	init();
	gameloop();
}
function init(){
	//获得canvas context
	can1=document.getElementById("canvas1");//fishes dust UI circle
	ctx1=can1.getContext('2d');
	can2=document.getElementById("canvas2");//ane background fruits
	ctx2=can2.getContext('2d');

	can1.addEventListener("mousemove",onMouseMove,false);

	bgPic.src="./src/background.jpg";


	canWidth=can2.width;
	canHeight=can2.height;
	ane=new aneObj();
	ane.init();
	fruit=new fruitObj();
	fruit.init();
	mom=new momObj();
	mom.init();
	baby=new babyObj();
	baby.init();

	data=new dataObj();

	mx=canWidth*0.5;
	my=canHeight*0.5;
	for(var i=0;i<8;i++){
		Tail[i]=new Image();
		Tail[i].src="./src/bigTail"+ i +".png";
	}
	for(var i=0;i<2;i++){
		babyEye[i]=new Image();
		babyEye[i].src="./src/babyEye"+ i +".png";
	}
	for(var i=0;i<20;i++){
		babyBody[i]=new Image();
		babyBody[i].src="./src/babyFade"+ i +".png";
	}
	for(var i=0;i<2;i++){
		momEye[i]=new Image();
		momEye[i].src="./src/bigEye"+ i +".png";
	}
	for(var i=0;i<8;i++){
		momBodyOrg[i]=new Image();
		momBodyOrg[i].src="./src/bigSwim"+ i +".png";
		momBodyBlue[i]=new Image();
		momBodyBlue[i].src="./src/bigSwimBlue"+ i +".png";
	}
	for(var i=0;i<7;i++){
		dustPic[i]=new Image();
		dustPic[i].src="./src/dust"+i+".png";
	}
	ctx1.fillStyle="white";
	ctx1.font="30px Verdana"
	ctx1.textAlign="center";
	wave=new waveObj();
	wave.init();
	halo=new haloObj();
	halo.init();
	dust=new dustObj();
	dust.init();
}
function gameloop(){
	requestAnimFrame(gameloop);//setTimeout setInterval fps(frame per seconds)
	
	var now=Date.now();
	deltaTime=now-lastTime;
	lastTime=now;
	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();
	ctx1.clearRect(0,0,canWidth,canHeight);

	mom.draw();
	baby.draw();
	momFruitsCollision();
	momBabyCollision();
	data.draw();
	wave.draw();
	halo.draw();
	dust.draw();
}

function onMouseMove(e){
	//if(!data.gameOver){
		if(e.offSetX||e.layerX){
			mx=e.offSetX==undefined?e.layerX:e.offSetX;
			my=e.offSetY==undefined?e.layerY:e.offSetY;
			//console.log(mx);
		}
	//}
	
}