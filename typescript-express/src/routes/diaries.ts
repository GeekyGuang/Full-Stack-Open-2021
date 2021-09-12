import express from 'express'
import diaryService from '../services/disaryService'
import toNewDiaryEntry from '../utils'

const router = express.Router()

router.get('/:id', (req, res) => {
  const diary = diaryService.findById(Number(req.params.id))

  if (diary) {
    res.send(diary)
  } else {
    res.sendStatus(404)
  }
})

router.get('/', (_req, res) => {
  res.send(diaryService.getNonSensitiveEntries())
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)
    const addedEntry = diaryService.addDiary(newDiaryEntry)
    res.json(addedEntry)
  } catch (e) {
    if (e instanceof Error) res.status(404).send(e.message)
  }
})

export default router
