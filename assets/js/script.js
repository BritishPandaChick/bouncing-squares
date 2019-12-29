window.onload = function(){
  //lets get the HTML canvas element so we draw on it
  var canvas = document.getElementById("c");
  var ctx = canvas.getContext("2d");

  var W = window.innerWidth, //get the width of our window
      H = window.innerHeight; //get the height

      //set canvas to size of width and height
      canvas.width = W;
      canvas.height = H;

      /* Box class */
      function Box(_x,_y){
        //the X/Y position
        this.x = _x;
        this.y = _y;

        //let's give velocity X and Y
        this.xVel = 10;
        this.yVel = 1;

        //the box width and height
        this.width = 20;
        this.height = 20;

        //let's make draw method for our box
        this.draw = function(){
          //make box class for easy access
          ctx.fillStyle = "red";
          ctx.fillRect(this.x, this.y, this.width, this.height);

          this.update();
        }

        //function that handle our logics for our box
        this.update = function(){

          /* check if the ball get out of our screen when it does that, make it bounce */
          //check the left border
          if(this.x < 0){
            this.x = 0; //set its position to 0
            this.xVel *= -1; //make it bounce
          }

          //check the right border
          if(this.y > W - this.width){
            this.x = W - this.width; //set its position to 0
            this.xVel *= -1 // make it bounce
          }

          //check the top border
          if(this.y < 0){
            this.y = 0; //set its position to 0
            this.yVel *= -1; //make it bounce
          }

          //check the bottom border
          if(this.y > H - this.height){
            this.y = H - this.height; //set its position to 0
            this.yVel *= -1; //make it bounce
          }

          this.x += this.xVel;
          this.y += this.yVel;
        }
      }

      //get an object instance of our Box class
      var b = new Box(20, 20);

      //function to draw stuff on screen
      function draw(){
        //background
        ctx.globalCompositeOperation = "source-over";
        ctx.fillStyle = "black";
        ctx.fillRect(0,0,W,H);

        ctx.globalCompositeOperation = "lighter";
        b.draw();

        update();
      }

      //function for logic
      function update(){}

      //set interval so we can draw then update our drawing
      //every 30 milliseconds
      setInterval(draw, 30);
}
