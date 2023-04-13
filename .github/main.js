let x = 100;
let y = 100;
let s = 1.0;

function startScreen() {
  fill(126, 200, 80);
  rect(0, 0, 800);
}
function lawnMower() {
  // lawnmower body
  strokeWeight(4 * s);
  stroke(0);
  fill(255, 204, 0);
  rect(x, y, 80 * s, 40 * s, 10 * s);

  // lawnmower wheel
  strokeWeight(4 * s);
  stroke(0);
  fill(51);
  ellipse(x + 20 * s, y + 40 * s, 20 * s, 20 * s);

  // lawnmower blade
  strokeWeight(8 * s);
  stroke(0);
  line(x - 10 * s, y + 10 * s, x + 90 * s, y + 10 * s);

  // lawnmower handle
  strokeWeight(4 * s);
  stroke(0);
  line(x + 40 * s, y - 10 * s, x + 70 * s, y - 30 * s);
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
function gameScreen() {
  fill(126, 200, 80);
  rect(0, 0, 800);
  noStroke();
  fill(217, 179, 130);
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
  lawnMower(200, 200, 1.0);
}
function leaderBoardScreen() {
  rect(100, 100, 10);
}

let state = "game";
function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "leaderBoard") {
    leaderBoardScreen();
  } else if (state === "bush") {
    bush();
  }
}
