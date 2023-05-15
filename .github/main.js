let x = 100;
let y = 100;
let s = 1.0;
let playerX = 350;
let playerY = 350;
let move = 15;

function startScreen() {
  fill(126, 200, 80);
  rect(0, 0, 800);
}
function playerFlower(x, y, s) {
  if (keyIsDown(LEFT_ARROW)) {
    x -= move;
  } else if (keyIsDown(RIGHT_ARROW)) {
    x += move;
  }
  if (keyIsDown(UP_ARROW)) {
    y -= move;
  }
  if (keyIsDown(DOWN_ARROW)) {
    y += move;
  }

  push();
  strokeWeight(0);
  // beige foot
  fill(217, 179, 130);
  rect(x - 20 * s, y + 400 * s, 40 * s, 20 * s);
  rect(x + 100 * s, y + 400 * s, 40 * s, 20 * s);
  // loght blue legs
  fill(0, 220, 255);
  rect(x - 20 * s, y + 380 * s, 60 * s, 20 * s);
  rect(x + 100 * s, y + 380 * s, 40 * s, 20 * s);
  //dark blue legs
  fill(0, 0, 100);
  rect(x, y + 360 * s, 70 * s, 20 * s);
  rect(x + 30 * s, y + 340 * s, 40 * s, 40 * s);
  rect(x + 100 * s, y + 340 * s, 40 * s, 40 * s);
  rect(x + 30 * s, y + 330 * s, 110 * s, 30 * s);
  //red body
  fill(255, 0, 0);
  rect(x + 30 * s, y + 230 * s, 110 * s, 100 * s);

  //the body
  fill(217, 179, 130);
  rect(x - 10 * s, y + 290 * s, 40 * s, 40 * s);
  rect(x + 10 * s, y + 270 * s, 40 * s, 20 * s);
  rect(x + 140 * s, y + 290 * s, 40 * s, 40 * s);
  rect(x + 140 * s, y + 270 * s, 20 * s, 20 * s);
  rect(x + 50 * s, y + 150 * s, 110 * s, 80 * s);
  //hair
  fill(0, 0, 0);
  rect(x + 30 * s, y + 150 * s, 20 * s, 40 * s);
  rect(x + 10 * s, y + 150 * s, 30 * s, 20 * s);
  //hat
  fill(230, 120, 0);
  rect(x - 10 * s, y + 130 * s, 220 * s, 20 * s);
  rect(x + 15 * s, y + 70 * s, 160 * s, 60 * s);
  rect(x + 60 * s, y + 50 * s, 90 * s, 20 * s);
  // eyes
  fill(255, 255, 255);
  rect(x + 50 * s, y + 150 * s, 25 * s, 25 * s);
  rect(x + 110 * s, y + 150 * s, 25 * s, 25 * s);
  fill(0, 0, 0);
  rect(x + 75 * s, y + 150 * s, 25 * s, 25 * s);
  rect(x + 135 * s, y + 150 * s, 25 * s, 25 * s);

  //mouth
  fill(255, 179, 179);
  rect(x + 80 * s, y + 200 * s, 40 * s, 10 * s);
  pop();
  //flower
  fill(0, 255, 0);
  noStroke();
  rect(x + 170 * s, y + 270 * s, 10 * s, 60 * s);
  rect(x + 180 * s, y + 280 * s, 10 * s, 10 * s);
  rect(x + 190 * s, y + 270 * s, 10 * s, 20 * s);
  rect(x + 200 * s, y + 260 * s, 10 * s, 10 * s);
  fill(255, 0, 0);

  rect(x + 160 * s, y + 230 * s, 30 * s, 45 * s);
  rect(x + 160 * s, y + 250 * s, 30 * s, 20 * s);
  fill(255, 255, 0);
  rect(x + 170 * s, y + 245 * s, 10 * s, 10 * s);

  playerX = x; // update x and y to the new position
  playerY = y;
}
function playerOne(x, y, s) {
  if (keyIsDown(LEFT_ARROW)) {
    x -= move;
  } else if (keyIsDown(RIGHT_ARROW)) {
    x += move;
  }
  if (keyIsDown(UP_ARROW)) {
    y -= move;
  }
  if (keyIsDown(DOWN_ARROW)) {
    y += move;
  }

  push();
  strokeWeight(0);
  // beige foot
  fill(217, 179, 130);
  rect(x - 20 * s, y + 400 * s, 40 * s, 20 * s);
  rect(x + 100 * s, y + 400 * s, 40 * s, 20 * s);
  // loght blue legs
  fill(0, 220, 255);
  rect(x - 20 * s, y + 380 * s, 60 * s, 20 * s);
  rect(x + 100 * s, y + 380 * s, 40 * s, 20 * s);
  //dark blue legs
  fill(0, 0, 100);
  rect(x, y + 360 * s, 70 * s, 20 * s);
  rect(x + 30 * s, y + 340 * s, 40 * s, 40 * s);
  rect(x + 100 * s, y + 340 * s, 40 * s, 40 * s);
  rect(x + 30 * s, y + 330 * s, 110 * s, 30 * s);
  //red body
  fill(255, 0, 0);
  rect(x + 30 * s, y + 230 * s, 110 * s, 100 * s);

  //the body
  fill(217, 179, 130);
  rect(x - 10 * s, y + 290 * s, 40 * s, 40 * s);
  rect(x + 10 * s, y + 270 * s, 40 * s, 20 * s);
  rect(x + 140 * s, y + 290 * s, 40 * s, 40 * s);
  rect(x + 140 * s, y + 270 * s, 20 * s, 20 * s);
  rect(x + 50 * s, y + 150 * s, 110 * s, 80 * s);
  //hair
  fill(0, 0, 0);
  rect(x + 30 * s, y + 150 * s, 20 * s, 40 * s);
  rect(x + 10 * s, y + 150 * s, 30 * s, 20 * s);
  //hat
  fill(230, 120, 0);
  rect(x - 10 * s, y + 130 * s, 220 * s, 20 * s);
  rect(x + 15 * s, y + 70 * s, 160 * s, 60 * s);
  rect(x + 60 * s, y + 50 * s, 90 * s, 20 * s);
  // eyes
  fill(255, 255, 255);
  rect(x + 50 * s, y + 150 * s, 25 * s, 25 * s);
  rect(x + 110 * s, y + 150 * s, 25 * s, 25 * s);
  fill(0, 0, 0);
  rect(x + 75 * s, y + 150 * s, 25 * s, 25 * s);
  rect(x + 135 * s, y + 150 * s, 25 * s, 25 * s);

  //mouth
  fill(255, 179, 179);
  rect(x + 80 * s, y + 200 * s, 40 * s, 10 * s);
  pop();

  playerX = x; // update x and y to the new position
  playerY = y;
}
function reversedPlayerOne(x, y, s) {
  push();
  strokeWeight(0);
  // beige foot
  fill(217, 179, 130);
  rect(x + 30 * s, y + 400 * s, 40 * s, 20 * s);
  rect(x + 150 * s, y + 400 * s, 40 * s, 20 * s);
  // light blue legs
  fill(0, 220, 255);
  rect(x + 130 * s, y + 380 * s, 60 * s, 20 * s);
  rect(x + 30 * s, y + 380 * s, 40 * s, 20 * s);
  //dark blue legs
  fill(0, 0, 100);
  rect(x + 90 * s, y + 360 * s, 70 * s, 20 * s);
  rect(x + 30 * s, y + 340 * s, 40 * s, 40 * s);
  rect(x + 100 * s, y + 340 * s, 40 * s, 40 * s);
  rect(x + 30 * s, y + 330 * s, 110 * s, 30 * s);
  //red body
  fill(255, 0, 0);
  rect(x + 30 * s, y + 230 * s, 110 * s, 100 * s);

  //the body
  fill(217, 179, 130);
  rect(x - 10 * s, y + 290 * s, 40 * s, 40 * s);
  rect(x + 10 * s, y + 270 * s, 20 * s, 20 * s);
  rect(x + 140 * s, y + 290 * s, 40 * s, 40 * s);
  rect(x + 120 * s, y + 270 * s, 40 * s, 20 * s);
  rect(x + 10 * s, y + 150 * s, 110 * s, 80 * s);
  //hair
  fill(0, 0, 0);
  rect(x + 120 * s, y + 150 * s, 20 * s, 40 * s);
  rect(x + 140 * s, y + 150 * s, 30 * s, 20 * s);
  //hat
  fill(230, 120, 0);
  rect(x - 30 * s, y + 130 * s, 220 * s, 20 * s);
  rect(x + 5 * s, y + 70 * s, 160 * s, 60 * s);
  rect(x + 40 * s, y + 50 * s, 90 * s, 20 * s);
  // eyes
  fill(255, 255, 255);
  rect(x + 30 * s, y + 150 * s, 25 * s, 25 * s);
  rect(x + 95 * s, y + 150 * s, 25 * s, 25 * s);
  fill(0, 0, 0);
  rect(x + 10 * s, y + 150 * s, 25 * s, 25 * s);
  rect(x + 70 * s, y + 150 * s, 25 * s, 25 * s);

  //mouth
  fill(255, 179, 179);
  rect(x + 80 * s, y + 200 * s, 40 * s, 10 * s);
  pop();
  playerX = x; // update x and y to the new position
  playerY = y;
}
function lawnMower(x, y, s) {
  // lawnmower body
  strokeWeight(4 * s);
  stroke(0);
  fill(255, 204, 0);
  rect(x, y, 80 * s, 20 * s, 10 * s);

  // lawnmower wheel
  strokeWeight(4 * s);
  stroke(0);
  fill(61);
  ellipse(x + 20 * s, y + 20 * s, 20 * s, 20 * s);
  ellipse(x + 60 * s, y + 20 * s, 20 * s, 20 * s);

  // lawnmower handle
  strokeWeight(4 * s);
  stroke(0);
  line(x + 70 * s, y, x + 100 * s, y - 40 * s);
}
function bush(x, y, s) {
  fill(0, 120, 0);
  rect(x, y + 100 * s, 40 * s, 40 * s);
  rect(x + 40 * s, y + 100 * s, 40 * s, 40 * s);
  fill(0, 130, 0);
  rect(x + 80 * s, y + 100 * s, 40 * s, 40 * s);
  fill(0, 110, 0);
  rect(x + 120 * s, y + 100 * s, 40 * s, 40 * s);
  fill(0, 120, 0);
  rect(x + 160 * s, y + 100 * s, 40 * s, 40 * s);
  fill(0, 111, 0);
  rect(x + 20 * s, y + 60 * s, 40 * s, 40 * s);
  rect(x + 60 * s, y + 60 * s, 40 * s, 40 * s);
  fill(0, 120, 0);
  rect(x + 100 * s, y + 60 * s, 40 * s, 40 * s);
  rect(x + 140 * s, y + 60 * s, 40 * s, 40 * s);
  fill(0, 130, 0);
  rect(x + 60 * s, y + 20 * s, 40 * s, 40 * s);
  rect(x + 100 * s, y + 20 * s, 40 * s, 40 * s);
  fill(0, 110, 0);
  rect(x + 70 * s, y + 115 * s, 25 * s, 25 * s);
  rect(x + 110 * s, y + 115 * s, 25 * s, 25 * s);
}
function flowers(x, y, s) {
  fill(0, 255, 0);
  noStroke();
  rect(x + 200 * s, y + 200 * s, 20 * s, 190 * s);
  rect(x + 220 * s, y + 260 * s, 20 * s, 20 * s);
  rect(x + 240 * s, y + 220 * s, 20 * s, 40 * s);
  rect(x + 260 * s, y + 220 * s, 20 * s, 20 * s);
  rect(x + 180 * s, y + 290 * s, 20 * s, 40 * s);
  rect(x + 160 * s, y + 290 * s, 20 * s, 20 * s);
  rect(x + 140 * s, y + 270 * s, 20 * s, 20 * s);
  fill(255, 0, 0);
  rect(x + 180 * s, y + 150 * s, 60 * s, 50 * s);
  rect(x + 170 * s, y + 130 * s, 40 * s, 50 * s);
  rect(x + 210 * s, y + 130 * s, 40 * s, 50 * s);
  rect(x + 180 * s, y + 110 * s, 60 * s, 40 * s);
  fill(255, 255, 0);
  rect(x + 200 * s, y + 150 * s, 20 * s, 20 * s);
}
function flowerYellow(x, y, s) {
  fill(0, 255, 0);
  noStroke();
  rect(x + 200 * s, y + 200 * s, 20 * s, 190 * s);
  rect(x + 220 * s, y + 260 * s, 20 * s, 20 * s);
  rect(x + 240 * s, y + 220 * s, 20 * s, 40 * s);
  rect(x + 260 * s, y + 220 * s, 20 * s, 20 * s);
  rect(x + 180 * s, y + 290 * s, 20 * s, 40 * s);
  rect(x + 160 * s, y + 290 * s, 20 * s, 20 * s);
  rect(x + 140 * s, y + 270 * s, 20 * s, 20 * s);
  fill(255, 255, 0);
  rect(x + 180 * s, y + 150 * s, 60 * s, 50 * s);
  rect(x + 170 * s, y + 130 * s, 40 * s, 50 * s);
  rect(x + 210 * s, y + 130 * s, 40 * s, 50 * s);
  rect(x + 180 * s, y + 110 * s, 60 * s, 40 * s);
  fill(255, 255, 0);
  rect(x + 200 * s, y + 150 * s, 20 * s, 20 * s);
}
function flowerBlue(x, y, s) {
  fill(0, 255, 0);
  noStroke();
  rect(x + 200 * s, y + 200 * s, 20 * s, 190 * s);
  rect(x + 220 * s, y + 260 * s, 20 * s, 20 * s);
  rect(x + 240 * s, y + 220 * s, 20 * s, 40 * s);
  rect(x + 260 * s, y + 220 * s, 20 * s, 20 * s);
  rect(x + 180 * s, y + 290 * s, 20 * s, 40 * s);
  rect(x + 160 * s, y + 290 * s, 20 * s, 20 * s);
  rect(x + 140 * s, y + 270 * s, 20 * s, 20 * s);
  fill(0, 0, 255);
  rect(x + 180 * s, y + 150 * s, 60 * s, 50 * s);
  rect(x + 170 * s, y + 130 * s, 40 * s, 50 * s);
  rect(x + 210 * s, y + 130 * s, 40 * s, 50 * s);
  rect(x + 180 * s, y + 110 * s, 60 * s, 40 * s);
  fill(255, 255, 0);
  rect(x + 200 * s, y + 150 * s, 20 * s, 20 * s);
}

// function flowerCollision(playerX, playerY) {
//   for (let i = 0; i < flowerArray.length; i++) {
//     let characterCollision = flowerArray[i];
//     if (
//       playerX > characterCollision.x &&
//       playerX < characterCollision.x + characterCollision.width &&
//       playerY < characterCollision.y &&
//       playerY + 30 > characterCollision.y
//     ) {
//       // Handle collision logic here
//     }
//   }
// }
function gameScreen() {
  fill(126, 200, 80);
  rect(0, 0, 800);
  noStroke();
  fill(147, 179, 130);
  //the right path
  rect(400, 200, 190, 40);
  rect(400, 350, 190, 40);
  rect(400, 500, 190, 40);
  //path in the middle
  rect(340, 0, 60, 800);
  //the left path
  rect(150, 200, 190, 40);
  rect(150, 350, 190, 40);
  rect(150, 500, 190, 40);
  //all the bushes: (in order with Y-value)
  bush(200, 100, 0.4);
  bush(400, 100, 0.5);
  bush(500, 200, 0.4);
  bush(100, 300, 0.4);
  bush(500, 300, 0.3);
  bush(260, 300, 0.3);
  bush(250, 400, 0.3);
  bush(450, 400, 0.4);
  bush(100, 550, 0.7);
  bush(440, 590, 0.4);
  lawnMower(600, 200, 0.7);
  //flowers
  flowers(x, y, 0.2);
  flowers(x, y + 300, 0.2);
  flowers(x + 100, y + 500, 0.2);
  flowers(x + 400, y + 200, 0.2);

  playerFlower(playerX, playerY, 0.2);
  for (let i = 0; i < flowerArray.length; i++) {
    let flower = flowerArray[i];
    fill(255, 255, 255); // Set the fill color for the flowers
    rect(flower.x, flower.y, flower.width, flower.height);
  }
}
function leaderBoardScreen() {
  rect(100, 100, 10);
}

// Define the flower objects
var flower = {
  x: 130,
  y: 120,
  width: 20,
  height: 55,
};
var flower4 = {
  x: 230,
  y: 620,
  width: 20,
  height: 55,
};
var flower3 = {
  x: 100,
  y: 300,
};
var flower1 = {
  x: 130,
  y: 420,
  width: 20,
  height: 55,
};
var flower2 = {
  x: 530,
  y: 327,
  width: 20,
  height: 50,
};

let flowerArray = [flower1, flower2, flower4, flower, flower3];
let state = "game";
function draw() {
  flowerCollision(playerX, playerY);

  // Other drawing and rendering logic
}

function flowerCollision(playerX, playerY) {
  for (let i = 0; i < flowerArray.length; i++) {
    let characterCollision = flowerArray[i];
    if (
      playerX > characterCollision.x &&
      playerX < characterCollision.x + characterCollision.width &&
      playerY < characterCollision.y &&
      playerY + 40 > characterCollision.y
    ) {
      // Collision detected, you can perform actions here
      console.log("Collision detected", i);
    }
  }

  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "leaderBoard") {
    leaderBoardScreen();
    playerOne();
  }
}
