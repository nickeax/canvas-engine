import { Rgba } from './rgba.js'

export class Rect {
  constructor(area, c) {
    [this.x1, this.y1, this.x2, this.y2] = area;
    this.colour = new Rgba(...c);
    console.table(this.colour);
    
  }

  x1;y1;x2;y2;
  directionX = true;
  directionY = true;
  vel = 0.0;
  colour;

  setColour(c) {
    this.colour = c;
  }

  getColour() {
    return this.colour.getCurrent();
  }

  setDirectionX (dir) {
    this.directionX = dir;
  }

  toggleDirectionX() {
    this.directionX = !this.directionX;
  }

  setDirectionX (dir) {
    this.directionX = dir;
  }

  toggleDirectionY() {
    this.directionY = !this.directionY;
  }

  move() {
    switch (this.direction) {
      case "u": {
        this.y1 += this.vel;
        this.y2 += this.vel;
        break;
      }
      case "d": {
        this.y1 -= this.vel;
        this.y2 -= this.vel;
        break;
      }
      case "l": {
        this.x1 -= this.vel;
        this.x2 -= this.vel;
        break;
      }
      case "r": {
        this.x1 -= this.vel;
        this.x2 -= this.vel;
        break;
      }
    }
  }
}
