import { Request, Response } from 'express'
import { UserCorp, UserExt } from '../models/userCorp.model'

export const login = (req: Request, res: Response): any => {
  const nameReq = req.body.name
  const ageReq = Number(req.body.age)
  const mailUserReq = req.body.mailUser
  const mailCorpReq = req.body.mailCorp
  const studioReq = req.body.studio

  const userGlobant = new UserCorp(
    nameReq,
    ageReq,
    mailUserReq,
    mailCorpReq,
    studioReq
  )
  const respuestaLogin = userGlobant.login('daniglobant', '123')
  res.status(200).send({
    respuesta: respuestaLogin
  })
}

export const loginExt = (req: Request, res: Response): any => {
  const nameReq = req.body.name
  const ageReq = Number(req.body.age)
  const mailUserReq = req.body.mailUser
  const corpReq = req.body.corp

  const userGlobant = new UserExt(
    nameReq,
    ageReq,
    mailUserReq,
    corpReq
  )
  const respuestaLogin = userGlobant.login('danibcp', '567')
  res.status(200).send({
    respuesta: respuestaLogin
  })
}
