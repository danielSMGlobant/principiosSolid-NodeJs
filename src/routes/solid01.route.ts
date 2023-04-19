import express, { NextFunction, Request, Response } from 'express'
import { check, validationResult } from 'express-validator'
import usuarioData from '../data/usuarioData.json'

const router = express.Router()

/*
 CASO: Se quiere obtener la información de un usuario en específico pero validando que el parametro de entrada sea su DNI y que cumpla con ciertos criterios
 Respuestas Exitosa: Si responde correctamente devolver un Código HTTP 200 y la data del usuario buscado
 Respuesta Exitosa pero Vacio: La consulta fue correcta pero no se encontro datos, devolver un Código HTTP 204
 Error de Parámetro: Si la validación del parametros de ruta dni no es el correcto, devolver un Código HTTP 422 con un mensaje indentificando el error
*/

// 01. Se creó Interface y Enum
enum Genero {
  Masculino = 'masculino',
  Femenino = 'femenino',
  Otro = 'otro',
}

interface Usuario {
  nombre: string
  apellido: string
  dni: string
  direccion: string
  genero: Genero
  edad: number
  fechaNacimiento: string
  pais: string
}

// 02. Se convirtió la data JSON en una data Array de tipo Usuario
const usuarios: Usuario[] = usuarioData as Usuario[]

// 03. Se creó un regex para que ayude a validar el DNI
const patternDNI = /^[0-9]{8}$/

// 04. Se creó Rutas
router.get(
  '/usuario/:dni',
  [
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
  ],
  (req: Request, res: Response) => {
    // 06. Se creó función Controller
    const requestDni = req.params.dni
    const filterDni = (params: string): Usuario | undefined => {
      // 07. Se creó función para filtro
      return usuarios.find((d) => d.dni === params)
    }
    const result = filterDni(requestDni)
    if (result === undefined) {
      res.status(204).send() // No Content - La solicitud ha sido exitosa pero no devuelve contenido
    } else {
      res.send(result) // Respuesta éxitosa
    }
  }
)

// GET ALL usuarios
router.get('/usuario', (_req: Request, res: Response): any => {
  const resultado: Usuario[] = usuarios
  res.send(resultado)
})

export default router
