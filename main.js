canvas = document.getElementById('my_canvas');
ctx = canvas.getContext("2d");
 car_x = 10 ;
 car_y = 10 ;
 car_width = 100;
 car_height = 90;
 car = "car1.png";

 car_x = 20 ;
 car_y = 20 ;
 car_width = 100;
 car_height = 90;
 car = "car.png";

function add() {
    background_img = new Image();
    background_img.onload = uploadBackground;
    background_img.src = "race track.png";

    car_img = new Image();
    car_img.onload = uploadcar;
    car_img.src = car;

    car_img = new Image();
    car_img.onload = uploadcar;
    car_img.src = car;


}


function uploadBackground() {
    ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height);
}

 function uploadcar() {
    ctx.drawImage(car_img, car_x , car_y , car.width , car.height);
}

function uploadcar() {
    ctx.drawImage(car_img, car_x , car_y , car.width , car.height);
}

function up()
{
	if(car_y >=0)
	{
		car_y = car_y - 10;
		console.log("When up arrow is pressed,  x = " + car_x + " | y = " +car_y);
		 uploadBackground();
		 uploadcar();
	}
}

function down()
{
	if(car_y <=500)
	{
		car_y =car_y+ 10;
		console.log("When down arrow is pressed,  x = " + car_x + " | y = " +car_y);
		uploadBackground();
		 uploadcar();
	}
}
function left()
{
	if(car_x >= 0)
	{
		car_x =car_x - 10;
		console.log("When left arrow is pressed,  x = " + car_x + " | y = " +car_y);
		uploadBackground();
		 uploadcar();
	}
}
function right()
{
	if(car_x <= 700)
	{
		car_x =car_x + 10;
		console.log("When right arrow is pressed,  x = " + car_x + " | y = " +car_y);
		uploadBackground();
		uploadcar();
   }
}



function up()
{
	if(car_y >=0)
	{
		car_y = car_y - 10;
		console.log("When up arrow is pressed,  x = " + car_x + " | y = " +car_y);
		 uploadBackground();
		 uploadcar();
	}
}

function down()
{
	if(car_y <=500)
	{
		car_y =car_y+ 10;
		console.log("When down arrow is pressed,  x = " + car_x + " | y = " +car_y);
		uploadBackground();
		 uploadcar();
	}
}
function left()
{
	if(car_x >= 0)
	{
		car_x =car_x - 10;
		console.log("When left arrow is pressed,  x = " + car_x + " | y = " +car_y);
		uploadBackground();
		 uploadcar();
	}
}
function right()
{
	if(car_x <= 700)
	{
		car_x =car_x + 10;
		console.log("When right arrow is pressed,  x = " + car_x + " | y = " +car_y);
		uploadBackground();
		uploadcar();
   }
}



window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if( keyPressed == '38' ){
        up();
        console.log("Up");
    }

    if( keyPressed == '40' ){
        down();
        console.log("down");
    }

    if( keyPressed == '37' ){
        left();
        console.log("left");
    }

    if( keyPressed == '39' ){
        right();
        console.log("right");
    }

}



window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if( keyPressed == '87' ){
        up();
        console.log("W");
    }

    if( keyPressed == '83' ){
        down();
        console.log("S");
    }

    if( keyPressed == '65' ){
        left();
        console.log("A");
    }

    if( keyPressed == '68' ){
        right();
        console.log("D");
    }

}