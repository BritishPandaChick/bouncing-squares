window.onload = function(){
  //lets get the HTML canvas element so we draw on it
  var canvas = document.getElementById("c");
  var ctx = canvas.getContext("2d");

  var W = window.innerWidth, //get the width of our window
      H = window.innerHeight; //get the height

      //set canvas to size of width and height
      canvas.width = W;
      canvas.height = H;

      //function to draw stuff on screen
      function draw(){
        //background
        ctx.fillStyle = "black";
        ctx.fillRect(0,0,W,H);

        //make box class for easy access
        ctx.fillStyle = "red";
        ctx.fillRect(20, 20, 20, 20);

        update();
      }

      //function for logic
      function update(){}

      //set interval so we can draw then update our drawing
      //every 30 milliseconds
      setInterval(draw, 30);
}
