import express from 'express'
import patientService from '../services/patientService'
import toNewPatient from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(patientService.getPatients())
})

router.post('/', (req, res) => {
  console.log('someone send a post')
  try {
    const newPaitent = toNewPatient(req.body)
    console.log(newPaitent)
    const addedPatient = patientService.addPatient(newPaitent)
    res.send(addedPatient)
  } catch (e) {
    if (e instanceof Error) res.status(400).send(e.message)
  }
})

export default router
