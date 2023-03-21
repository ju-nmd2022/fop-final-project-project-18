function startScreen(){ 
    fill(126,200,80);
    rect (0,0,800);
}
function gameScreen(){
fill(126,200,80);
rect (0,0,800);
noStroke();
fill(217,179,130);
rect(340,0,60,1000);
//the right path
rect(400,200,190,40);
rect(400,350,190,40);
rect(400,500,190,40);
//path in the middle
rect(340,0,60,1000);
//the left path
rect(150,200,190,40);
rect(150,350,190,40);
rect(150,500,190,40);
}

let state = "game";
function draw() {
    if (state === "start") {
      startScreen();
    } else if (state === "game") {
      gameScreen();
    } else if (state === "leaderBoard") {
      leaderBoardScreen();
    }
  }