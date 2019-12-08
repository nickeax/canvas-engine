import { Rect } from "./rect.js";
import { Rgba } from "./rgba.js";
import { Context } from "./context.js";

const c = new Context(init());
const rectArr = [];

let originXmin = 0, originXmax = 500, originYmin = 0, originYmax = 300, sizeXmin = 50, sizeXmax = 500, sizeYmin = 50, sizYmax = 500;


for(let i = 0; i < 2; i++) {
  let tmpSize = [rr(originXmin, originXmax),rr(originYmin, originYmax), rr(sizeXmin, sizeXmax), rr(sizeYmin, sizYmax)];
  
  let tmpCol = [rr(0, 255), rr(0, 255), rr(0, 255), Math.random()];
  let tmpVel = [rr(1, 14), rr(1, 14)];
  let tmpRec = new Rect(tmpSize, tmpCol, tmpVel);
  rectArr.push(tmpRec);
}

// window.setInterval(moveRec, 5);
window.requestAnimationFrame(moveRec);

function moveRec() {
  // shuffle(rectArr);
  c.cScreen();
  rectArr.forEach(x => {
    // c.cRect(x);
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
  console.log(canv.width, canv.height);

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