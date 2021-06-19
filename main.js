canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
carA_width=100;
carA_height=90;

background_image="racing.jpg";
carA_image="car1.png";
carA_x=10;
carA_y=10;

function add()
{
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;


    carA_imgTag=new Image();
    carA_imgTag.onload=uploadcar;
    carA_imgTag.src=carA_image;
}

function uploadBackground()
{
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadcar()
{
    ctx.drawImage(carA_imgTag,carA_x,carA_y,carA_width,carA_height);
}

window.addEventListener("keydown",my_keydown);


function my_keydown(e)
{
keyPressed=e.keyCode;
console.log(keyPressed);
if(keyPressed=='38')
{
    up();
    console.log("up");
}


if(keyPressed=='40')
{
    down();
    console.log("down");
}


if(keyPressed=='37')
{
    left();
    console.log("left");
}

if(keyPressed=='39')
{
    right();
    console.log("right");
}
carB_width=100;
carB_height=90;


carB_image="download.jpg";
carB_x=10;
carB_y=10;

function add()
{
    


    carB_imgTag=new Image();
    carB_imgTag.onload=uploadcar;
    carB_imgTag.src=carB_image;
}



function uploadcar()
{
    ctx.drawImage(carB_imgTag,carB_x,carB_y,carB_width,carB_height);
}

}
