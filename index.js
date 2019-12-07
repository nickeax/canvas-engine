import { Rect } from "./rect.js";
import { Rgba } from "./rgba.js";
import { Context } from "./context.js";

const c = new Context(init());

let c1 = [250, 10, 10, 0.5];
let a1 = [10, 10, 300, 300];
let rec1 = new Rect(a1, c1);

c.dRect(rec1);
// window.setInterval(randRect, 2000);
window.addEventListener('resize', init);
function init() {
  const canv = document.querySelector("#canv");
  canv.width = window.innerWidth;
  canv.height = window.innerHeight;
  console.log(canv.width, canv.height);
  
  return canv.getContext("2d");
}
