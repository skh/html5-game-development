var canvas = null;
var ctx = null;
var frameRate = 1000/30;
var frame = 0;
var assets = ['robowalk00.png',
              'robowalk01.png',
              'robowalk02.png',
              'robowalk03.png',
              'robowalk04.png',
              'robowalk05.png',
              'robowalk06.png',
              'robowalk07.png',
              'robowalk08.png',
              'robowalk09.png',
              'robowalk10.png',
              'robowalk11.png',
              'robowalk12.png',
              'robowalk13.png',
              'robowalk14.png',
              'robowalk15.png',
              'robowalk16.png',
              'robowalk17.png',
              'robowalk18.png'
             ];
var frames = [];

var setup = function () {
    var body = document.getElementById('body');
    canvas = document.createElement('canvas');

    ctx = canvas.getContext('2d');

    canvas.width = 1000;
    canvas.height = 1000;

    body.appendChild(canvas);

    for (var i = 0; i < assets.length; i++) {
    	frames.push(new Image());
    	frames[i].src = assets[i];
    }
    
    setInterval(animate, frameRate);

};

var animate = function () {
	ctx.clearRect(0,0,canvas.width, canvas.height);
	ctx.drawImage(frames[frame], 0, 0);
	frame = (frame + 1) % frames.length;
}

setup();
