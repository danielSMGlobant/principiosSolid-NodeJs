import { Shape } from './shape.model'

export class Circle extends Shape {
  radius: number
  constructor (x: number, y: number, r: number) {
    super(x, y)
    this.radius = r
  }

  getArea = (): number => {
    return Math.PI * this.radius * this.radius
  }
}
