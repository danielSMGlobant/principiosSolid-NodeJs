import express from 'express'
import usuarioRouter from './routes/solid01.route'
const app = express()
const PORT = 4000

app.use(express.json())

app.use('/apiSOLID', usuarioRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
