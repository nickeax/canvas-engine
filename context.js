import { Rgba } from "./rgba.js";

export class Context {
  canv;
  ctx;
  colour;
  
  constructor(context) {    
    this.ctx = context;
    this.colour = new Rgba([5, 255, 5, 1.0]);    
  }

  setColour(c) {
    this.ctx.setColour = (`rgba(${c})`);;
  }

  getColour() {
    return this.colour;
  }

  dRect(r) {
    this.ctx.fillStyle = `rgba(${r.getColour()})`;
    this.ctx.fillRect(r.x1, r.y1, r.width,  r.height);
  }
  cRect(r) {
    this.ctx.clearRect(r.x1, r.y1, r.x1 + r.width, r.y1 + r.height);
  }
  cScreen() {
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }
}