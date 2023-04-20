import express from 'express'
import { validatorUser } from '../validators/user.validator'
import { userGetByDni } from '../controllers/user.controller'

const router = express.Router()

/*
 CASO: Se quiere obtener la información de un usuario en específico pero validando que el parametro de entrada sea su DNI y que cumpla con ciertos criterios
 Respuestas Exitosa: Si responde correctamente devolver un Código HTTP 200 y la data del usuario buscado
 Respuesta Exitosa pero Vacio: La consulta fue correcta pero no se encontro datos, devolver un Código HTTP 204
 Error de Parámetro: Si la validación del parametros de ruta dni no es el correcto, devolver un Código HTTP 422 con un mensaje indentificando el error
*/

// 04. Se creó Rutas
router.get('/usuario/:dni', validatorUser, userGetByDni)

// GET ALL usuarios
// router.get('/usuario', (_req: Request, res: Response): any => {
//   const resultado: Usuario[] = usuarios
//   res.send(resultado)
// })

export default router
