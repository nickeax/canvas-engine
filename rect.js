import { Rgba } from './rgba.js'

export class Rect {
  constructor(area, c) {
    [this.x1, this.y1, this.x2, this.y2] = area;
    this.colour = new Rgba(...c);
    console.table(this.colour);    
  }

  x1;y1;x2;y2;
  directionX = true;
  directionY = false;
  vel;
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
  
  isLeftScreen() {
    if(this.x1 <= 0) return true;
    return false;
  }
  
  isRightScreen() {
    if(this.x2 - this.x1 >= window.innerWidth) return true;
    return false;
  }

  isTopScreen() {
    if(this.y1 <= 0) return true;
    return false;
  }

  isBottomScreen() {
    if(this.y2 - this.y1 > window.innerHeight) return true;
    return false;
  }

  hitEdge() {
    if(this.isRightScreen()) this.toggleDirectionX();
    if(this.isLeftScreen()) this.toggleDirectionX();
    if(this.isTopScreen()) this.toggleDirectionY();
    if(this.isBottomScreen()) this.toggleDirectionY();
  }

  move(v) {    
    (v[0] > 0) ? this.directionX = true: this.directionX = false;
    (v[1] > 0) ? this.directionY = true: this.directionY = false;
    this.hitEdge();
    switch (this.directionX) {      
      case true: {
        this.x1 += v[0];
        this.x2 += v[0];
        break;
      }
      case false: {
        this.x1 -= Math.abs(v[0]);
        this.x2 -= Math.abs(v[0]);
        break;
      }
    }

    switch (this.directionY) {
      case true: {
        this.y1 += v[1];
        this.y2 += v[1];
        break;
      }
      case false: {
        this.y1 -= Math.abs(v[1]);
        this.y2 -= Math.abs(v[1]);
        break;
      }
    }
  }
}
