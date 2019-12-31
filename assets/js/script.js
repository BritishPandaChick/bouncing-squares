window.onload = function(){
  //lets get the HTML canvas element so we draw on it
  var canvas = document.getElementById("c");
  var ctx = canvas.getContext("2d");

  var W = window.innerWidth, //get the width of our window
      H = window.innerHeight; //get the height

      //set canvas to size of width and height
      canvas.width = W;
      canvas.height = H;

      /* ======= Box class ====== */
      function Box(_x,_y){
        //the X/Y position
        this.x = _x;
        this.y = _y;

        //let's give velocity X and Y
        this.xVel = 10 + Math.random()*20;
        this.yVel = 1;

        //the box width and height
        this.width = 20;
        this.height = 20;

        //random colors for our box
        this.r = Math.round(Math.random()*255);
        this.g = Math.round(Math.random()*255);
        this.b = Math.round(Math.random()*255);

        this.rgba = "rgba(" + this.r + "," + this.g + "," + this.b + ",1)";

        //let's make draw method for our box
        this.draw = function(){
          //make box class for easy access
          ctx.strokeStyle = this.rgba;
          ctx.strokeRect(this.x, this.y, this.width, this.height);

          this.update();
        }

        //function that handle our logics for our box
        this.update = function(){

          /* check if the ball get out of our screen when it does that, make it
          bounce */
          //check the left window border
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

          /* boxes don't try to add y by its velocity when it reaches bottom
          causing it to spazz */
          //now we add gravity
          if(this.y < H - this.height) {
            this.yVel += .25;
          }

          //check the bottom border
          if(this.y > H - this.height){
            //when it bounce off the bottom decrease the ball speed
            this.xVel *= .5;
            this.yVel *= .5;

            this.y = H - this.height; //set its position to 0
            this.yVel *= -1; //make it bounce
          }

          //move add speed to our x/y
          this.x += this.xVel;
          this.y += this.yVel;
        }
      }
      //lets make array of boxes
      var boxes [];

      //function to draw stuff on screen
      function draw(){
        //background
        ctx.globalCompositeOperation = "source-over";
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fillRect(0,0,W,H);

        ctx.globalCompositeOperation = "lighter";

        //loop through the boxes and draw them
        for(i=0; i < boxes.length; i++) {
          boxes[i].draw();
        }

        update();
      }

      //function for logic
      function update(){
        //loop through the boxes and draw them
        for(i=0; i < boxes.length; i++) {
          boxes[i].update();
        }
      }

      //add box every minute we specify
      setInterval(function(){
        boxes.push(new Box(0,0));
      },1000);

      //set interval so we can draw then update our drawing
      //every 30 milliseconds
      setInterval(draw, 30);
}
