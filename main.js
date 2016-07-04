
var canvasBody = document.getElementById("canvas"),
	canvas = canvasBody.getContext("2d"),
	w = canvasBody.width = window.innerWidth,
	h = canvasBody.height = window.innerHeight,

	opt = {
		count: 7,
		size: 50,
		sizeRandom: 10,
		sparkLife: 0.1,
		spawnOpacity: 1,
		color: "rgba(39, 173, 96,1)"
	};


function anim() {
	 window.requestAnimationFrame(anim);

	 step();
};

anim();
function step() {
	var fillColor = opt.color.replace("alpha", opt.spawnOpasity);
	canvas.fillStyle = fillColor;
	for(var i = 0; i < Math.round(opt.count); i++) {
		var random = Math.random() * opt.sizeRandom; 
	canvas.fillRect(-(opt.size/2) + Math.random() * w, -(opt.size/2) + Math.random() * h, opt.size + random, opt.size + random)
	}

	canvas.fillStyle = "rgba(255, 255, 255,"+ opt.sparkLife +")";
	canvas.fillRect(0,0,w,h);
};

