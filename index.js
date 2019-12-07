import { Rect } from "./rect.js";
import { Rgba } from "./rgba.js";
import { Context } from "./context.js";

const c = new Context(init());

let c1 = [22, 177, 53, 0.5];
let a1 = [10, 10, 100, 100];
let vel = [15, 1];
let rec1 = new Rect(a1, c1);

c.dRect(rec1);
// window.setInterval(moveRec, 130);
function moveRec() {
   c.cRect(rec1);
   rec1.move(vel);
   console.log(rec1.x1);
   c.dRect(rec1);
}

window.addEventListener('resize', init);

function init() {
  const canv = document.querySelector("#canv");
  canv.width = window.innerWidth - 5;
  canv.height = window.innerHeight -5;
  console.log(canv.width, canv.height);
  
  return canv.getContext("2d");
}
