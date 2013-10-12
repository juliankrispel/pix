var canvas = document.getElementById('canvas');
var canvasWidth  = canvas.width;
var canvasHeight = canvas.height;
var ctx = canvas.getContext('2d');
var imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);

var buf = new ArrayBuffer(imageData.data.length);
var buf8 = new Uint8ClampedArray(buf);
var data = new Uint32Array(buf);

var i = 0;
var range = [(canvasWidth / 2) | 0, (canvasWidth / 2) | 0];
var isIncreasingRange = true;



for (var y = 0; y < canvasHeight; ++y) {
    i = y * canvasWidth;
    for (var x = 0; x < canvasWidth; ++x) {
        if( x >= range[0] && x <= range[1] ){
            data[i+x] = 255 << 24;
        }
    }

    if(range[1] - range[0] >= 100){
        isIncreasingRange = false;
    }

    if(isIncreasingRange)
        increaseRange();
    else
        decreaseRange();
}

function increaseRange(){
    range[0] = range[0] -1;
    range[1] = range[1] +1;
}

function decreaseRange(){
    range[0] = range[0] +1;
    range[1] = range[1] -1;
}


imageData.data.set(buf8);

ctx.putImageData(imageData, 0, 0);
