import { Rect } from "./rect.js";
import { Rgba } from "./rgba.js";
import { Context } from "./context.js";

const c = new Context(init());
const rectArr = [];

for(let i = 0; i < 55; i++) {
  let tmpSize = [rr(10, 50), rr(10, 50), rr(10, 50), rr(10, 50)];
  let tmpCol = [rr(0, 255), rr(0, 255), rr(0, 255), 0.5];
  let tmpVel = [rr(1, 4), rr(1, 4)];
  let tmpRec = new Rect(tmpSize, tmpCol, tmpVel);
  rectArr.push(tmpRec);
}

// window.setInterval(moveRec, 5);
window.requestAnimationFrame(moveRec);

function moveRec() {
  // shuffle(rectArr);
  rectArr.forEach(x => {
    c.cRect(x);
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