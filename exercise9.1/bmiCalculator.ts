const calculateBmi = (w: number, h: number): string => {
  const bmi = w / (h * h)
  let result = 'Normal'
  if (bmi < 0.74) {
    result = 'Underweight'
  } else if (bmi > 0.99 && bmi < 1.2) {
    result = 'Overweight'
  } else if (bmi >= 1.2) {
    result = 'Obese'
  }

  return `${result} (${w}, ${h})`
}

console.log(calculateBmi(180, 70))
