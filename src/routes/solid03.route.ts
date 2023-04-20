import express from 'express'
import { areaShapeCircle, areaShapeRectangle } from '../controllers/shape.controller'

const router = express.Router()

router.get('/areaRectangle', areaShapeRectangle)
router.get('/areaCircle', areaShapeCircle)

export default router
