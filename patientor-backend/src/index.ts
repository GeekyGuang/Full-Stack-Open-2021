import express from 'express'
import cors from 'cors'
import diagnoseRouter from './routes/diagnoses'
import patientRouter from './routes/patients'

const app = express()
app.use(express.json())
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors())

app.get('/api/ping', (_req, res) => {
  console.log('someone send a request')
  res.send('pong')
})

const PORT = 3001

app.use('/api/diagnoses', diagnoseRouter)
app.use('/api/patients', patientRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
