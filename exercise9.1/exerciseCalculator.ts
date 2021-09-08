interface Result {
  periodLength: number
  trainingDays: number
  target: number
  average: number
  success: boolean
  rating: number
  ratingDescription: string
}

const calculateExercises = (
  trainingTime: Array<number>,
  target: number
): Result => {
  const periodLength = trainingTime.length
  const trainingDays = trainingTime.filter((i) => i !== 0).length
  const average =
    trainingTime.reduce((sum, item) => sum + item, 0) / periodLength
  const success = average >= target ? true : false
  let rating = 0,
    ratingDescription = ''
  if (average < 0.5) {
    rating = 1
    ratingDescription = 'keep going'
  } else if (average >= 0.5 && average < 1) {
    rating = 2
    ratingDescription = 'not too bad but could be better'
  } else {
    rating = 3
    ratingDescription = 'awesome!'
  }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  }
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2))
