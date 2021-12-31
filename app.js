// const canvasEl = document.querySelector("canvas");
// const canvasContext = canvasEl.getContext("2d");

// canvasEl.width = window.innerWidth;
// canvasEl.height = window.innerHeight;

// let mouseEffect = {
//   x: undefined,
//   y: undefined,
// };

// let maxiRadius = 50;
// let miniRadius = 5;

// // mouseMoveEvent Listener
// window.addEventListener("mousemove", (e) => {
//   mouseEffect.x = e.x;
//   mouseEffect.y = e.y;
//   console.log(mouseEffect);
// });

// // RunBalls Class
// class RunBalls {
//   constructor(xP, yP, xV, yV, radius, red, green, blue) {
//     this.xP = xP;
//     this.yP = yP;
//     this.xV = xV;
//     this.yV = yV;
//     this.radius = radius;
//     this.red = red;
//     this.green = green;
//     this.blue = blue;
//   }

//   // drawing the balls
//   drawBalls = function () {
//     canvasContext.fillStyle = `rgb(${this.red}, ${this.green}, ${this.blue})`;
//     canvasContext.beginPath();
//     canvasContext.arc(this.xP, this.yP, this.radius, 0, Math.PI * 2);
//     canvasContext.fill();
//   };

//   // collision detection on edges
//   updateBalls = function () {
//     if (this.xP + this.radius > canvasEl.width || this.xP - this.radius < 0) {
//       this.xV = -this.xV;
//     }

//     if (this.yP + this.radius > canvasEl.height || this.yP - this.radius < 0) {
//       this.yV = -this.yV;
//     }

//     this.xP += this.xV;
//     this.yP += this.yV;

//     // mouse move effect
//     if (
//       mouseEffect.x - this.xP < 20 &&
//       mouseEffect.x - this.xP > -20 &&
//       mouseEffect.y - this.yP < 20 &&
//       mouseEffect.y - this.yP > -20
//     ) {
//       if (this.radius < maxiRadius) {
//         this.radius += 1;
//       }
//     } else if (this.radius > miniRadius) {
//       this.radius -= 1;
//     }

//     this.drawBalls();
//   };
// }

// // balls Array
// let ballsArray = [];
// for (let i = 0; i < 1000; i++) {
//   let radius = 30;
//   let xP = Math.random() * (canvasEl.width - radius * 2) + radius;
//   let yP = Math.random() * (canvasEl.height - radius * 2) + radius;
//   let xV = (Math.random() - 0.5) * 2;
//   let yV = (Math.random() - 0.5) * 2;
//   let red = Math.ceil(Math.random() * 255);
//   let green = Math.ceil(Math.random() * 255);
//   let blue = Math.ceil(Math.random() * 255);

//   ballsArray.push(new RunBalls(xP, yP, xV, yV, radius, red, green, blue));
// }

// console.log(ballsArray);

// // The Game Loop
// function animateBalls() {
//   requestAnimationFrame(animateBalls);
//   canvasContext.clearRect(0, 0, canvasEl.width, canvasEl.height);

//   for (let k = 0; k < ballsArray.length; k++) {
//     ballsArray[k].updateBalls();
//   }
// }

// animateBalls();

// never let the future disturb you. you will fight it, if you must, with the same weapons of reason which today arm you against the present

/*
my code below
*/

const canvasEl = document.querySelector("canvas");
const canvasCTX = canvasEl.getContext("2d");

canvasEl.height = window.innerHeight;
canvasEl.width = window.innerWidth;

// RunBalls Class

class RunBalls {
  constructor(xP, yP, xV, yV, radius, red, green, blue) {
    this.xP = xP;
    this.yP = yP;
    this.xV = xV;
    this.yV = yV;
    this.radius = radius;
    this.red = red;
    this.green = green;
    this.blue = blue;
  }

  // drawing my balls
  drawMyBalls = function () {
    canvasCTX.fillStyle = `rgb(${this.red}, ${this.green}, ${this.blue})`;
    canvasCTX.beginPath();
    canvasCTX.arc(this.xP, this.yP, this.radius, 0, Math.PI);
    canvasCTX.fill;
  };

  // collision detection on the edges
  updateMyBalls = function () {
    //right and left
    if (this.xP + this.radius > canvasEl.width || this.xP - this.radius < 0) {
      this.xV = -this.xV;
    }
    //up n down
    if (this.yP + this.radius > canvasEl.height || this.yP - this.radius < 0) {
      this.yV = -this.yV;
    }

    this.xP += this.xV;
    this.yP += this.yV;
  };
}

// the game loop

function animateBalls() {
  requestAnimationFrame(animateBalls);
  canvasCTX.clearRect(0, 0, canvasEl.width, canvasEl.height);
}

animateBalls();
