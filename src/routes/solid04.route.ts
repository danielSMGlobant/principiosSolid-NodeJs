import express from 'express'
import { login, loginExt } from '../controllers/sign.controller'

const router = express.Router()

router.get('/login', login)
router.get('/loginExt', loginExt)

export default router
