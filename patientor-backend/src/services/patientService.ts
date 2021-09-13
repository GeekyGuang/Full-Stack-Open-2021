import patients from '../../data/patients'
import { PatientNoSsn, Patient, NewPatient } from '../types'
import { v1 as uuid } from 'uuid'

const getPatients = (): Array<PatientNoSsn> => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }))
}

const addPatient = (info: NewPatient): Patient => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const id = uuid()
  const newPatient = {
    id,
    ...info,
  }
  patients.push(newPatient)
  return newPatient
}

export default {
  getPatients,
  addPatient,
}
