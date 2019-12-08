import { Rect } from "./rect.js";
import { Rgba } from "./rgba.js";
import { Context } from "./context.js";

let inc = 0;
const c = new Context(init());
c.fillStyle = "green";
c.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

const rectArr = [];

let originXmin = 2, originXmax = 600, originYmin = 2, originYmax = 400, sizeXmin = 250, sizeXmax = 650, sizeYmin = 250, sizeYmax = 650;

for(let i = 0; i < 20; i++) {
  let tmpSize = [rr(originXmin, originXmax),rr(originYmin, originYmax), rr(sizeXmin, sizeXmax), rr(sizeYmin, sizeYmax)];
  let tmpCol = [rr(10, 255), rr(10, 255), rr(10, 255), Math.random() / 1.5];
  let tmpVel = [rr(1, 2), rr(1, 2)];
  let tmpRec = new Rect(tmpSize, tmpCol, tmpVel);
  rectArr.push(tmpRec);
}

// window.setInterval(moveRec, 5);
window.requestAnimationFrame(moveRec);

function moveRec() {
  let col = new Rgba();
  c.cScreen();
  rectArr.forEach(x => {
    if(inc > 1000) inc = 0;
    inc++;  
    x.move(x.vel);
    if(inc % 30 == 0) x.incColours();
    // x.setColour([rr(10, 255), rr(10, 255), rr(10, 255), Math.random() / 1.5]);
    c.dRect(x);
  })
  window.requestAnimationFrame(moveRec);
}

window.addEventListener('resize', init);

function init() {
  const canv = document.querySelector("#canv");
  canv.width = window.innerWidth - 5;
  canv.height = window.innerHeight - 5;
  
  return canv.getContext("2d");
}

function rr(a, b) {
  return Math.random() * (b - a) + a;
}

function shuffle(arr) {
  for(let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
}