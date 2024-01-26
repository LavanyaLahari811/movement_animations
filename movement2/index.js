/**@type {HTMLCanvasElement}*/

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
CANVAS_HEIGHT = canvas.height = 700;
CANVAS_WIDTH = canvas.width = 500;

const noOfEnemies = 30;
const enemiesArray = [];
let gameFrame = 0;

class enemy {
  constructor() {
    this.image = new Image();
    this.image.src = "./enemy2.png";
    this.speed = Math.random() * 4 + 1;
    this.spriteWidth = 266;
    this.spriteHeight = 188;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.x = Math.random() * (canvas.width - this.width);
    this.y = Math.random() * (canvas.height - this.height);
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 2);
    this.angle = 0;
    this.angleSpeed = Math.random() * 0.2;
    this.curve=Math.random()*5;
  }
  update() {
    this.x -= this.speed;
    if (this.x + this.width < 0) {
      this.x = canvas.width;
    }

    this.y +=this.curve* Math.sin(this.angle);
    this.angle += this.angleSpeed;

    if (gameFrame % this.flapSpeed == 0) {
      if (this.frame > 4) {
        this.frame = 0;
      } else {
        this.frame++;
      }
    }
  }
  draw() {
    ctx.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

for (let i = 0; i < noOfEnemies; i++) {
  enemiesArray.push(new enemy());
}

const animate = () => {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  enemiesArray.forEach((enemy) => {
    enemy.update();
    enemy.draw();
  });
  gameFrame++;
  requestAnimationFrame(animate);
};
animate();
