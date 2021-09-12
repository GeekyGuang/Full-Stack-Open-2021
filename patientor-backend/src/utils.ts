import { NewPatient, Gender } from './types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (gender: any): gender is Gender => {
  return Object.values(Gender).includes(gender)
}
const parseGender = (gender: unknown): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error('incorrect or missing gender: ' + gender)
  }

  return gender
}

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String
}

const parseString = (text: unknown, name: string): string => {
  if (!text || !isString(text)) {
    throw new Error(`incorrect or missing ${name}: ${text}`)
  }

  return text
}

type Fields = {
  name: unknown
  dateOfBirth: unknown
  ssn: unknown
  gender: unknown
  occupation: unknown
}

const toNewPatient = ({
  name,
  dateOfBirth,
  ssn,
  gender,
  occupation,
}: Fields): NewPatient => {
  const newPatient = {
    name: parseString(name, 'name'),
    dateOfBirth: parseString(dateOfBirth, 'dateOfBirth'),
    ssn: parseString(ssn, 'ssn'),
    gender: parseGender(gender),
    occupation: parseString(occupation, 'occupation'),
  }

  return newPatient
}

export default toNewPatient
