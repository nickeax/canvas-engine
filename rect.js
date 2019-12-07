import { Rgba } from './rgba.js'

export class Rect {
  constructor(area, c, v) {
    [this.x1, this.y1, this.width, this.height] = area;
    this.colour = new Rgba(...c);
    this.vel = v;
  }

  x1;y1;
  width;
  height;
  directionX = true;
  directionY = false;
  vel = [];
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
  
  setDirectionY (dir) {
    this.directionY = dir;
  }

  toggleDirectionX() {
    this.directionX = !this.directionX;
  }

  toggleDirectionY() {
    this.directionY = !this.directionY;
  }
  
  isLeftScreen() {
    if(this.x1 <= 0) return true;
    return false;
  }
  
  isRightScreen() {
    if(this.x1 + this.width >= window.innerWidth) return true;
    return false;
  }

  isTopScreen() {
    if(this.y1 <= 0) return true;
    return false;
  }

  isBottomScreen() {
    if(this.height + this.y1 > window.innerHeight) return true;
    return false;
  }

  hitEdge() {
    if(this.isRightScreen()) this.toggleDirectionX();
    if(this.isLeftScreen()) this.toggleDirectionX();
    if(this.isTopScreen()) this.toggleDirectionY();
    if(this.isBottomScreen()) this.toggleDirectionY();
  }

  move(v) { 
    let v0 = this.vel[0];
    let v1 = this.vel[1];   
    (this.vel[0] > 0) ? v0 = true: v0 = false;
    (this.vel[1] > 0) ? v1 = true: v1 = false;
    this.hitEdge();
    console.log(`this.DirectionX: ${this.directionX}`);
    
    switch (this.directionX) {      
      case true: {
        this.x1 += this.vel[0];
        break;
      }
      case false: {
        this.x1 -= Math.abs(this.vel[0]);
        break;
      }
    }

    switch (this.directionY) {
      case true: {
        this.y1 += this.vel[1];
        break;
      }
      case false: {
        this.y1 -= Math.abs(this.vel[1]);
        break;
      }
    }
  }
}
