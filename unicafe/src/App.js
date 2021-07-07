import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const Statistic = ({ text, value }) => (
  <div>{text} {value}</div>
)

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all === 0) {
    return <div>No feedback given</div>
  } else return (
    <div>
      <Statistic text={'good'} value={good} />
      <Statistic text={'neutral'} value={neutral} />
      <Statistic text={'bad'} value={bad} />
      <Statistic text={'all'} value={all} />
      <Statistic text={'average'} value={average} />
      <Statistic text={'positive'} value={positive} />
    </div>
  )

}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let all = good + neutral + bad
  let average = good - bad / 3
  let positive = all !== 0 ? (good / all) * 100 + '%' : '0'

  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <Button handleClick={() => setGood(good + 1)} text={'good'} />
        <Button handleClick={() => setNeutral(neutral + 1)} text={'neutral'} />
        <Button handleClick={() => setBad(bad + 1)} text={'bad'} />
      </div>
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}
        all={all} average={average} positive={positive} />
    </div>

  )
}

export default App;
