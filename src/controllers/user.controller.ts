import { Request, Response } from 'express'
import * as serviceUser from '../services/user.service'

export const userGetByDni = (req: Request, res: Response): any => {
  // 06. Se creó función Controller
  const requestDni = req.params.dni
  //   const filterDni = (params: string): Usuario | undefined => {
  //     // 07. Se creó función para filtro
  //     return usuarios.find((d) => d.dni === params)
  //   }
  const resultFilterDni = serviceUser.userByDNI(requestDni)

  if (resultFilterDni === undefined) {
    res.status(204).send() // No Content - La solicitud ha sido exitosa pero no devuelve contenido
  } else {
    res.send(resultFilterDni) // Respuesta éxitosa
  }
}
