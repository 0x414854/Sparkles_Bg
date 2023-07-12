
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const numberOfParticles = 800;
const particles = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 1.5 + 2.5;
    this.speedX = Math.random() * 1.9 - 0.5;
    this.speedY = Math.random() * 0.9 - 0.5;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = 'gold';
    ctx.fill();
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0) {
      this.x = canvas.width;
    }
    if (this.x > canvas.width) {
      this.x = 0;
    }
    if (this.y < 0) {
      this.y = canvas.height;
    }
    if (this.y > canvas.height) {
      this.y = 0;
    }
  }
}

function createParticles() {
  for (let i = 0; i < numberOfParticles; i++) {
    particles.push(new Particle());
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(function(particle) {
    particle.draw();
  });
  updateParticles();
}

function updateParticles() {
  particles.forEach(function(particle) {
    particle.update();
  })
}

createParticles();
setInterval(drawParticles, 30);
