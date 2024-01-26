/**@type {HTMLCanvasElement}*/

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
CANVAS_HEIGHT = canvas.height = 700;
CANVAS_WIDTH = canvas.width = 500;

const noOfEnemies = 100;
const enemiesArray = [];

const enemyImage=new Image();
enemyImage.src="./enemy1.png";

class enemy {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.width = 100;
    this.height = 100;
    this.speed=Math.random()*4-2;
  }
  update() {
    this.x+=this.speed;
    this.y+=this.speed;
  }
  draw() {
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(enemyImage,this.x,this.y,this.width,this.height);
  }
}

for (let i = 0; i < noOfEnemies; i++) {
  enemiesArray.push(new enemy());
}

const animate = () => {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  enemiesArray.forEach(enemy=>{
    enemy.update();
    enemy.draw();
  })
  requestAnimationFrame(animate);
};
animate();
