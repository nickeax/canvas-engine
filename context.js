import { Rgba } from "./rgba.js";

export class Context {
  canv;
  ctx;
  colour;
  
  constructor(context) {
    this.ctx = context;
    this.colour = new Rgba([255, 255, 255, 1.0]);
  }

  setColour(c) {
    this.ctx.setColour = (`rgba(${c})`);;
  }

  getColour() {
    return this.colour;
  }

  dRect(r) {
    this.setColour(`rgba(${r.getColour()})`);
    this.ctx.fillRect(r.x1, r.y1, r.x2, r.y2);
  }

}