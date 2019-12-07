export class Rgba {
  red;
  green;
  blue;
  alpha;

  constructor(r=200, g=200, b=200, a=0.01) {
    this.red = r;
    this.green = g;
    this.blue = b;
    this.alpha = a;
  }

  setRGBA(r, g, b, a) {
    this.red = r;
    this.green = g;
    this.blue = b;
    this.alpha = a;

    return this.getCurrent();
  }

  setRandomAll(r = 255, g = 255, b = 255) {
    this.red = Math.floor(Math.random() * r);
    this.green = Math.floor(Math.random() * g);
    this.blue = Math.floor(Math.random() * b);
    // this.alpha = Math.random() * (a > 0) ? a : 0.7;

    return this.getCurrent();
  }

  getCurrent() {
    return `${this.red}, ${this.green}, ${this.blue}, ${this.alpha}`;
  }

  getIncCurrent() {
    if (this.red > 255) {
      this.red = 0;
    }
    if (this.green > 255) {
      this.green = 0;
    }
    if (this.blue > 255) {
      this.blue = 0;
    }
    if (this.alpha >= 1) {
      this.alpha = 0;
    } 
    this.alpha += 0.001;
    this.red += 33;
    this.green += 33;
    this.blue += 33;

    return this.getCurrent();
  }
}
