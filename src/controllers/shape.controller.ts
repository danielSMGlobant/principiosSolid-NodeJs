import { Request, Response } from 'express'
import { Shape } from '../models/shape.model'
import { Rectangle } from '../models/rectangle.model'
import { Circle } from '../models/circle.model'

export const areaShapeRectangle = (req: Request, res: Response): any => {
  const width: number = Number(req.query.width)
  const height: number = Number(req.query.height)

  // Calcular Area
  const calcularArea = (shape: Shape): number => {
    return shape.getArea()
  }

  const myRectangle = new Rectangle(0, 0, width, height)
  const area = calcularArea(myRectangle)

  // Enviar Area
  res.status(200).send({
    figura: 'Rectangulo',
    area
  })
}

export const areaShapeCircle = (req: Request, res: Response): any => {
  const radius: number = Number(req.query.radius)

  // Calcular Area
  const calcularArea = (shape: Shape): number => {
    return shape.getArea()
  }

  const myCircle = new Circle(0, 0, radius)
  const area = calcularArea(myCircle)

  // Enviar Area
  res.status(200).send({
    figura: 'Circulo',
    area
  })
}
