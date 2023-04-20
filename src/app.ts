import express from 'express'
import usuarioRouter from './routes/solid01.route'
import shippingRouter from './routes/solid02.router'

const app = express()
const PORT = 4000

app.use(express.json())

app.use('/apiSOLID01', usuarioRouter)
app.use('/apiSOLID02', shippingRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
