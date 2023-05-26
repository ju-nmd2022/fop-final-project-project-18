//all of the let:
let x = 100;
let y = 100;
let s = 1.0;
let playerX = 350;
let playerY = 350;
let startPlayerX = 50;
let move = 15;
let flowerCollected = 0;
let mowerX = 600;
let isGameActive = false;
//timer help: https://editor.p5js.org/marynotari/sketches/S1T2ZTMp-
let timer = 15;
let timer2 = 10;
let timer3 = 6;
let timerActive = false;
let isBoostActive = false;

function setup() {
  createCanvas(850, 850);
  frameRate(30);
}
function flowers(x, y, s) {
  push();
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
  pop();
}
function flowerPink(x, y, s, isPink) {
  push();
  if (isPink) {
    fill(255, 255, 255); // Change color to white for flower5
  } else {
    fill(0, 255, 0); // Use default color for other flowers
  }
  noStroke();
  rect(x + 200 * s, y + 200 * s, 20 * s, 190 * s);
  rect(x + 220 * s, y + 260 * s, 20 * s, 20 * s);
  rect(x + 240 * s, y + 220 * s, 20 * s, 40 * s);
  rect(x + 260 * s, y + 220 * s, 20 * s, 20 * s);
  rect(x + 180 * s, y + 290 * s, 20 * s, 40 * s);
  rect(x + 160 * s, y + 290 * s, 20 * s, 20 * s);
  rect(x + 140 * s, y + 270 * s, 20 * s, 20 * s);
  fill(255, 0, 200);
  rect(x + 180 * s, y + 150 * s, 60 * s, 50 * s);
  rect(x + 170 * s, y + 130 * s, 40 * s, 50 * s);
  rect(x + 210 * s, y + 130 * s, 40 * s, 50 * s);
  rect(x + 180 * s, y + 110 * s, 60 * s, 40 * s);
  fill(255, 255, 0);
  rect(x + 200 * s, y + 150 * s, 20 * s, 20 * s);
  pop();
}
function flowerBrown(x, y, s) {
  push();
  fill(0, 255, 0);
  noStroke();
  rect(x + 200 * s, y + 200 * s, 20 * s, 190 * s);
  rect(x + 220 * s, y + 260 * s, 20 * s, 20 * s);
  rect(x + 240 * s, y + 220 * s, 20 * s, 40 * s);
  rect(x + 260 * s, y + 220 * s, 20 * s, 20 * s);
  rect(x + 180 * s, y + 290 * s, 20 * s, 40 * s);
  rect(x + 160 * s, y + 290 * s, 20 * s, 20 * s);
  rect(x + 140 * s, y + 270 * s, 20 * s, 20 * s);
  fill(160, 100, 100);
  rect(x + 180 * s, y + 150 * s, 60 * s, 50 * s);
  rect(x + 170 * s, y + 130 * s, 40 * s, 50 * s);
  rect(x + 210 * s, y + 130 * s, 40 * s, 50 * s);
  rect(x + 180 * s, y + 110 * s, 60 * s, 40 * s);
  fill(255, 255, 0);
  rect(x + 200 * s, y + 150 * s, 20 * s, 20 * s);
  pop();
}
function flowerYellow(x, y, s) {
  push();
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
  pop();
}
function flowerBlue(x, y, s) {
  push();
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
  pop();
}
function bush(x, y, s) {
  push();
  noStroke();
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
  pop();
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
  pop();
  playerX = x; // update x and y to the new position
  playerY = y;
}
function startScreen() {
  push();
  background(126, 200, 80);
  fill(255, 255, 255);
  rect(150, 200, 400);
  fill(0, 0, 0);
  textAlign(CENTER);
  text("Welcome to Flower Picker!", 350, 300);
  text("Your objective is to pick up 10 flowers!", 350, 330);
  text("But be careful so that the timer does not catch you!", 350, 355);
  text("Click Space in order to start the game", 350, 380);
  text("Tip use the arrow keys! To move around the character", 350, 420);
  text("Press Enter to Activate the game and start collecting", 350, 460);
  fill(255, 255, 255);
  textAlign(LEFT);

  bush(200, 120, 0.5);
  bush(400, 100, 0.5);
  bush(200, 600, 0.5);
  bush(400, 600, 0.5);
  bush(40, 200, 0.5);
  bush(600, 200, 0.5);
  bush(40, 400, 0.5);
  bush(600, 600, 0.5);
  playerFlower(startPlayerX, 450, 0.8);
  startPlayerX = startPlayerX + 5;
  if (startPlayerX > 800) {
    startPlayerX = -200;
  }
  flowers(300, 380, 1.0);
  fill(0, 0, 0);

  textSize(7);
  text("Programmed by Elias", 100, 800);
  flowerPink(380, 50, 0.5);
  flowerBrown(100, 100, 0.4);
  flowerYellow(500, 200, 0.7);
  flowerBlue(-60, 200, 0.7);
  if (keyIsDown(32)) {
    state = "Game";
    timer = 15;
    timerActive = false;
    playerX = 350;
    playerY = 350;
    flowerCollected = 0;
    flowerArray = [
      flower1,
      flower2,
      flower4,
      flower0,
      flower3,
      flower5,
      flower6,
      flower7,
      flower8,
      flower9,
    ];
  }
  pop();
}
function gameScreen() {
  push();
  //start the game
  if (keyIsDown(13)) {
    isGameActive = true;
    timerActive = true;
  }
  if (isGameActive) {
    move = 15;
  } else {
    move = 0;
  }
  background(126, 200, 80);
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

  //flowers
  playerFlower(playerX, playerY, 0.2);
  //Got help from oliver and charlie on this code!
  for (let i = 0; i < flowerArray.length; i++) {
    let flower = flowerArray[i];
    fill(255, 255, 255);
    flowerYellow(flower.x, flower.y, 0.2); // Draw the flower at the specified coordinates and scale
  }
  //to here

  //timer:
  push();
  fill(0, 0, 0);
  text("Time to go:", 10, 50);
  textSize(80);
  text(timer, 24, 120);
  fill(255, 255, 0);
  text(timer, 20, 120);
  pop();
  if (timerActive && frameCount % 40 == 0 && timer > 0) {
    // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer--;
  }
  if (timer == 0) {
    isGameActive = false;
    state = "lose";
  }
  //timer
  //flower collected
  //flower collected:
  push();
  fill(0, 160, 0);
  rect(90, 710, 200, 80);
  fill(0, 255, 0);
  textSize(20);
  text("Flower collected: " + flowerCollected, 100, 750);
  pop();
  if (flowerCollected === 10) {
    isGameActive = false;
    timerActive = false;

    console.log("level 1 complete!");
    push();
    fill(255, 255, 255);
    rect(220, 250, 300);
    fill(0, 0, 0);
    text("Well done press W", 330, 390);
    text("You anvanced to the next level", 300, 430);
    pop();
  }

  //flower collected
  if (keyIsDown(87)) {
    state = "level2";
    timer2 = 10;
    timerActive = false;
    playerX = 350;
    playerY = 350;
    flowerCollected = 0;
    flowerArray = [
      {
        x: Math.random() * 650,
        y: flower0.y,
        width: flower0.width,
        height: flower0.height,
      },
      {
        x: Math.random() * 650,
        y: flower1.y,
        width: flower1.width,
        height: flower1.height,
      },
      {
        x: Math.random() * 650,
        y: flower2.y,
        width: flower2.width,
        height: flower2.height,
      },
      {
        x: Math.random() * 650,
        y: flower3.y,
        width: flower3.width,
        height: flower3.height,
      },
      {
        x: Math.random() * 650,
        y: flower4.y,
        width: flower4.width,
        height: flower4.height,
      },
      {
        x: Math.random() * 650,
        y: flower5.y,
        width: flower5.width,
        height: flower5.height,
      },
      {
        x: Math.random() * 650,
        y: flower6.y,
        width: flower6.width,
        height: flower6.height,
      },
      {
        x: Math.random() * 650,
        y: flower7.y,
        width: flower7.width,
        height: flower7.height,
      },
      {
        x: Math.random() * 650,
        y: flower8.y,
        width: flower8.width,
        height: flower8.height,
      },
      {
        x: Math.random() * 650,
        y: flower9.y,
        width: flower9.width,
        height: flower9.height,
      },
    ];
  }
  pop();
}
function levelScreen2() {
  push();
  //start the game
  if (keyIsDown(13)) {
    isGameActive = true;
    timerActive = true;
  }
  if (isGameActive) {
    move = 15;
  } else {
    move = 0;
  }
  background(126, 200, 80);
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
  //flowers
  playerFlower(playerX, playerY, 0.2);
  //Got help from oliver and charlie on this code!
  for (let i = 0; i < flowerArray.length; i++) {
    let flower = flowerArray[i];
    fill(255, 255, 255);
    flowerYellow(flower.x, flower.y, 0.2); // Draw the flower at the specified coordinates and scale
  }
  //to here
  //flower collected:
  push();
  fill(0, 160, 0);
  rect(90, 710, 200, 80);
  fill(0, 255, 0);
  textSize(20);
  text("Flower collected: " + flowerCollected, 100, 750);
  pop();
  push();
  //timer:

  fill(0, 0, 0);
  text("Time to go:", 10, 50);
  textSize(80);
  text(timer2, 24, 120);
  fill(255, 255, 0);
  text(timer2, 20, 120);
  pop();
  if (timerActive && frameCount % 40 == 0 && timer2 > 0) {
    // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer2--;
  }
  if (timer2 == 0) {
    isGameActive = false;
    state = "lose";
  }
  //timer
  //flower collected what happens
  if (flowerCollected === 10) {
    isGameActive = false;
    timerActive = false;

    console.log("Level 2 complete!");
    push();
    fill(255, 255, 255);
    rect(220, 250, 300);
    fill(0, 0, 0);
    text("Nice press E", 340, 390);
    text("You anvanced to the next level", 300, 430);
    text("In the next level pick up the miss-matched", 270, 470);
    text("flower to get a boost of speed", 300, 490);
    pop();
  }
  //flower collected
  if (keyIsDown(69)) {
    state = "level3";
    timer3 = 6;
    flowerCollected = 0;
    flowerArray = [
      flower1,
      flower2,
      flower4,
      flower0,
      flower3,
      flower5,
      flower6,
      flower7,
      flower8,
      flower9,
    ];
    playerX = 350;
    playerY = 350;
  }
  pop();
}
function levelScreen3() {
  //start the game
  if (keyIsDown(13)) {
    isGameActive = true;
    timerActive = true;
  }
  if (isGameActive) {
    move = 15;
  } else {
    move = 0;
  }
  if (isBoostActive) {
    move = move + 5;
  }

  background(126, 200, 80);
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
  //flowers
  playerFlower(playerX, playerY, 0.2);
  //Got help from oliver and charlie on this code!
  // for (let i = 0; i < flowerArray.length; i++) {
  //   let flower = flowerArray[i];
  //   fill(255, 255, 255);
  //   flowerPink(flower.x, flower.y, 0.2, color(255, 0, 0)); // Use red color for flower5

  //   // flowerPink(flower.x, flower.y, 0.2); // Draw the flower at the specified coordinates and scale
  // }

  for (let i = 0; i < flowerArray.length; i++) {
    let flower = flowerArray[i];
    if (flower === flower5) {
      flowerPink(flower.x, flower.y, 0.2, true); // Use different color for flower5
    } else {
      flowerPink(flower.x, flower.y, 0.2, false); // Use default color for other flowers
    }
  }
  //to here
  //flower collected:
  push();
  fill(0, 160, 0);
  rect(90, 710, 200, 80);
  fill(0, 255, 0);
  textSize(20);
  text("Flower collected: " + flowerCollected, 100, 750);
  pop();
  //timer:
  push();
  fill(0, 0, 0);
  text("Time to go:", 10, 50);
  textSize(80);
  text(timer3, 24, 120);
  fill(255, 255, 0);
  text(timer3, 20, 120);
  pop();
  if (timerActive && frameCount % 40 == 0 && timer3 > 0) {
    // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer3--;
  }
  if (timer3 == 0) {
    isGameActive = false;
    isBoostActive = false;
    state = "lose";
  }
  //timer
  //flower collected
  if (flowerCollected === 10) {
    isGameActive = false;
    timerActive = false;
    isBoostActive = false;

    console.log("You won!");
    push();
    fill(255, 255, 255);
    rect(220, 250, 300);
    fill(0, 0, 0);
    text("Well done press Q", 330, 390);
    text("You cleared all the levels well done!", 280, 430);
    pop();
  }
  //flower collected = you won
  if (keyIsDown(81)) {
    state = "win";
  }
}
function winScreen() {
  push();
  background(126, 200, 80);
  noStroke();
  //head
  fill(217, 179, 130);
  rect(200, 200, 350);
  fill(217, 160, 130);
  rect(365, 360, 20, 50);
  //hair
  fill(0, 0, 0);
  rect(200, 200, 3, 120);
  rect(547, 200, 3, 120);
  //white eye
  fill(255, 255, 255);
  rect(240, 280, 50, 50);
  rect(460, 280, 50, 50);
  //black eye
  fill(0, 0, 0);
  rect(290, 280, 50, 50);
  rect(410, 280, 50, 50);
  //mouth
  fill(255, 179, 179);
  rect(330, 440, 90, 30);

  //crown
  fill(255, 215, 0);
  rect(260, 140, 230, 20);
  rect(280, 110, 30, 30);
  rect(440, 110, 30, 30);
  fill(255, 225, 0);
  rect(330, 110, 90, 30);
  rect(350, 40, 50, 70);
  rect(365, 20, 20, 20);
  rect(200, 160, 350, 40);
  fill(255, 210, 0);
  rect(200, 100, 20, 100);
  rect(530, 100, 20, 100);
  rect(200, 160, 150, 40);
  //crown
  fill(0, 0, 0);
  textSize(30);
  text("Congratulations you are the Flower Picker King!", 50, 600);
  text("Press enter to go back!", 220, 670);
  flowerPink(480, 300, 0.7);
  flowerYellow(-0, 340, 0.5);
  flowers(-90, 50, 0.8);
  flowerBrown(420, 1, 0.9);
  pop();
  if (keyIsDown(13)) {
    state = "start";
  }
}
function loseScreen() {
  background(255, 0, 0);
  push();
  noStroke();
  //head
  fill(217, 179, 130);
  rect(200, 200, 350);
  fill(217, 160, 130);
  rect(365, 360, 20, 50);
  //hair
  fill(0, 0, 0);
  rect(200, 200, 3, 120);
  rect(547, 200, 3, 120);
  rect(200, 200, 350, 30);
  rect(250, 180, 200, 50);
  rect(330, 150, 200, 80);
  //white eye
  fill(255, 255, 255);
  rect(240, 280, 50, 50);
  rect(460, 280, 50, 50);
  //black eye
  fill(0, 0, 0);
  rect(290, 280, 50, 50);
  rect(410, 280, 50, 50);
  //mouth
  fill(255, 179, 179);
  rect(330, 440, 90, 30);
  //tear
  fill(0, 0, 205);
  rect(300, 336, 40, 40);
  rect(300, 386, 40, 40);

  pop();
  fill(0, 0, 0);
  push();
  textSize(30);
  text("OH NO YOU LOST", 250, 600);
  text("Press R to get to the start again!", 160, 650);
  pop();
  if (keyIsDown(82)) {
    state = "start";
  }
}
// flowers as objects
let flower0 = {
  x: Math.random() * 650,
  y: Math.random() * 650,
  width: 30,
  height: 65,
};
let flower1 = {
  x: Math.random() * 650,
  y: Math.random() * 650,
  width: 30,
  height: 65,
};
let flower2 = {
  x: Math.random() * 650,
  y: Math.random() * 650,
  width: 30,
  height: 65,
};
let flower3 = {
  x: Math.random() * 650,
  y: Math.random() * 650,
  width: 30,
  height: 65,
};
let flower4 = {
  x: Math.random() * 650,
  y: Math.random() * 650,
  width: 30,
  height: 65,
};
let flower5 = {
  x: Math.random() * 650,
  y: Math.random() * 650,
  width: 30,
  height: 65,
};
let flower6 = {
  x: Math.random() * 650,
  y: Math.random() * 650,
  width: 30,
  height: 65,
};
let flower7 = {
  x: Math.random() * 650,
  y: Math.random() * 650,
  width: 30,
  height: 65,
};
let flower8 = {
  x: Math.random() * 650,
  y: Math.random() * 650,
  width: 30,
  height: 65,
};
let flower9 = {
  x: Math.random() * 650,
  y: Math.random() * 650,
  width: 30,
  height: 65,
};
let flowerArray = [
  flower1,
  flower2,
  flower4,
  flower0,
  flower3,
  flower5,
  flower6,
  flower7,
  flower8,
  flower9,
];
let state = "start";

function draw() {
  // This is for the collision
  flowerCollision(playerX, playerY);
  function flowerCollision(playerX, playerY) {
    for (let i = 0; i < flowerArray.length; i++) {
      let flower = flowerArray[i];
      if (
        playerX > flower.x &&
        playerX < flower.x + flower.width &&
        playerY < flower.y &&
        playerY + 50 > flower.y
      ) {
        // Collision detected, perform actions here
        flowerCollected++;
        console.log(flowerCollected, i);

        if (flower === flower5 && state === "level3") {
          isBoostActive = true; // Activate the boost only in level3
        }

        // Remove the flower from the array
        flowerArray.splice(i, 1);
        break;
      }
    }
  }
  if (state === "start") {
    startScreen();
  } else if (state === "Game") {
    gameScreen();
  } else if (state === "level2") {
    levelScreen2();
  } else if (state === "level3") {
    levelScreen3();
  } else if (state === "win") {
    winScreen();
  } else if (state === "lose") {
    loseScreen();
  }
}
