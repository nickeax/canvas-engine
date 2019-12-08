import { Rect } from "./rect.js";
import { Rgba } from "./rgba.js";
import { Context } from "./context.js";

const c = new Context(init());
c.fillStyle = "green";
c.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

const rectArr = [];

let originXmin = 0, originXmax = 40, originYmin = 0, originYmax = 40, sizeXmin = 100, sizeXmax = 400, sizeYmin = 100, sizeYmax = 400;

for(let i = 0; i < 90; i++) {
  let tmpSize = [rr(originXmin, originXmax),rr(originYmin, originYmax), rr(sizeXmin, sizeXmax), rr(sizeYmin, sizeYmax)];
  let tmpCol = [rr(250, 255), rr(25, 25), rr(0, 25), Math.abs(0.5 - Math.random())];
  let tmpVel = [rr(1, 2), rr(1, 2)];
  let tmpRec = new Rect(tmpSize, tmpCol, tmpVel);
  rectArr.push(tmpRec);
  tmpSize = [rr(originXmin, originXmax),rr(originYmin, originYmax), rr(sizeXmin, sizeXmax), rr(sizeYmin, sizeYmax)];
  tmpCol = [rr(25, 25), rr(200, 255), rr(0, 25), Math.abs(0.5 - Math.random())];
  tmpVel = [rr(1, 4), rr(1, 4)];
  let tmpRec2 = new Rect(tmpSize, tmpCol, tmpVel);
  rectArr.push(tmpRec2);
}

// window.setInterval(moveRec, 5);
window.requestAnimationFrame(moveRec);

function moveRec() {
  let col = new Rgba();
  c.cScreen();
  rectArr.forEach(x => {
    x.move(x.vel);
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