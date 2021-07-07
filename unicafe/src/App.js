import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const Statistics = ({ good, neutral, bad, all, average, positive }) => (
  <div>
    <h2>Statistics</h2>
    <div>good {good}</div>
    <div>neutral {neutral}</div>
    <div>bad {bad}</div>
    <div>all {all}</div>
    <div>average {average}</div>
    <div>positive {positive}</div>
  </div>

)

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
      <Statistics good={good} neutral={neutral} bad={bad}
        all={all} average={average} positive={positive} />
    </div>

  )
}

export default App;
