import express = require('express')
import calculateBmi from './bmiCalculator'

const app = express()

app.get('/bmi', (req, res) => {
  res.send(calculateBmi(Number(req.query.height), Number(req.query.weight)))
})

const PORT = 3003

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
