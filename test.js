let x = 768;
let y = 356;

ballWidth = 20;
ballHeight = 20;

platformX = 600;
platformY = 350;
platformHeight = 15;
platformWidth = 100;

function setup() {
    createCanvas(1536, 713);
  }
  
function draw() {
  background(0);
      // //Example One
      // if (mouseIsPressed) {
      //   fill(0);
      // } else {
      //   fill(255);
      // }
      // ellipse(mouseX, mouseY, 80, 80)

      //Example Two
      ellipse(x, y, ballWidth, ballHeight);

      rect(platformX, platformY, platformWidth, platformHeight, 10);

      if (platformX == x + ballWidth) {
        console.log("This is happening!")
        x = platformX - ballWidth;
      };

      // if (x <= platformX + platformWidth) {
        
      // }

      //Hitboxes for side of screen
      if (x < 1536) {
        //x += 1;
      } else {
        x = 1536;
      };

      if (x < 0) {
        x = 0;
      }

      if (y < 0) {
        y = 0;
      }

      if (y > height) {
        y = height;
      }

      //Do keyIsPressed with whatever keyCode you need so it isn't continuous.

      //When space is pressed, the ball goes upwards
      if (keyIsPressed == true && keyCode == 32) {
        y -=3
      };

      //When shift is pressed, the ball goes down
      if (keyIsPressed == true && keyCode == 16) {
        y +=5;
      };

      //When A is pressed, the ball goes left
      if (keyIsPressed == true && keyCode == 65) {
        x -=3;
      };

      //When D is pressed, the ball goes right
      if (keyIsPressed == true && keyCode == 68) {
        x +=3;
      };

      //When W is pressed, a stretch is applied to the ball
      if (keyIsPressed == true && keyCode == 87) {
        if (ballHeight <= 35) {
          ballHeight +=1;
        };
      } else {
        if (ballHeight > 20) {
          ballHeight -=2;
        };
      };

      //When S is pressed, a squash is applied to the ball
      if (keyIsPressed == true && keyCode == 83) {
        if (ballWidth <= 35) {
          ballWidth +=1;
        };
      } else {
        if (ballWidth > 20) {
          ballWidth -=2;
        };
      };


      // if (mouseIsPressed) {
      //   y -= 3;
      // };

      // if (keyCode == 65) {
      //   x -=3;
      // };

      // if (keyCode == 68) {
      //   x += 3;
      // }

      // if (keyCode == 87) {
      //   y -= 3;
      // }

      // if (keyCode == 83) {
      //   y += 3;
      // }

      // if (keyCode == 32) {
      //   ballWidth += 10;
      //   ballHeight += 10;
      // } else {
      //   ballWidth = 20;
      //   ballHeight = 20;
      // }
      
      // if (x > width/2) {
      //   x +=3;
      // }
      
}

  // function mouseWheel() {
  //   x +=5;
  // };