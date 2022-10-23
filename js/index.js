window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
};

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const backImg = new Image();
backImg.src = "./images/road.png";
x = 0,
y = 0;

setInterval(() => {
const player = new Image();
player.src = "./images/car.png";
player.onload = function () {
  ctx.drawImage(player, 223, 550, 50, 100);
};
  if (y >= canvas.height) {
    y = 0;
  } else {
    y += 10;
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(backImg, x, y, canvas.width, canvas.height);
  ctx.drawImage(backImg, x, y - canvas.height, canvas.width, canvas.height);
}, 50);

