import { Shape } from './shape.model'

export class Rectangle extends Shape {
  width: number
  height: number
  constructor (x: number, y: number, width: number, height: number) {
    super(x, y)
    this.width = width
    this.height = height
  }

  getArea = (): number => {
    return this.width * this.height
  }
}

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

export const calculateArea = (shape: Shape): number => {
  return shape.getArea()
}

const myRectangle = new Rectangle(0, 0, 4, 5)
const myCircle = new Circle(0, 0, 10)
const areaRectangle = calculateArea(myRectangle)
console.log(areaRectangle)

const areaCircle = calculateArea(myCircle)
console.log(areaCircle)
