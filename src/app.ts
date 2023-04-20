import express from 'express'
import usuarioRouter from './routes/solid01.route'
import shippingRouter from './routes/solid02.route'
import shapeRouter from './routes/solid03.route'
import loginRouter from './routes/solid04.route'

const app = express()
const PORT = 4000

app.use(express.json())

app.use('/apiSOLID01', usuarioRouter)
app.use('/apiSOLID02', shippingRouter)
app.use('/apiSOLID03', shapeRouter)
app.use('/apiSOLID04', loginRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
