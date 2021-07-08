import React, { useState } from 'react'

const Anecdote = ({ anecdote, point, title }) => (
  <>
    <h1>{title}</h1>
    <div>{anecdote}</div>
    <div>has {point} points</div>
  </>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(anecdotes.map(item => 0))


  const randomNumber = () => {
    const num = Math.floor(Math.random() * anecdotes.length)
    setSelected(num)
  }

  const changePoints = () => {
    const newPoints = [...points]
    newPoints[selected] += 1
    setPoints(newPoints)
  }

  const findMostVotes = () => {
    let maxNumber = points[0]
    for (let i = 1; i < points.length; i++) {
      if (points[i] > maxNumber) {
        maxNumber = points[i]
      }
    }

    return points.indexOf(maxNumber)
  }

  return (
    <div>
      <Anecdote title={'Anecdote of the day'} anecdote={anecdotes[selected]} point={points[selected]} />
      <div>
        <button onClick={changePoints}>vote</button>
        <button onClick={randomNumber}>next anecdote</button>
      </div>
      <Anecdote title={'Anecdote with most votes'} anecdote={anecdotes[findMostVotes()]} point={points[findMostVotes()]} />
    </div>
  )
}

export default App
