import { Request, Response, NextFunction } from 'express'
import { check, validationResult } from 'express-validator'

// 03. Se creó un regex para que ayude a validar el DNI
const patternDNI = /^[0-9]{8}$/

export const validatorUser = [
  // 05. Se creó Validación con Express Validator
  check('dni')
    .exists()
    .notEmpty()
    .withMessage('No se agrego valor en DNI')
    .matches(patternDNI)
    .withMessage('No cumple con los parámetros del valor DNI'),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (errors.isEmpty() === true) {
      return next()
    }
    return res.status(422).json({ error: errors.array() }) // Error por ingresar parametros no validos
  }
]
