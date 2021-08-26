import React from 'react'
import { connect } from 'react-redux'
import { voteAction } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes
      .filter((item) => item.content.indexOf(state.filter) >= 0)
      .sort((a, b) => b.votes - a.votes),
  }
}

const AnecdoteList = (props) => {
  const vote = (id, content) => {
    props.voteAction(id)
    props.setNotification(`you voted '${content}'`, 10)
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {props.anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.content)}>
              vote
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default connect(mapStateToProps, { voteAction, setNotification })(
  AnecdoteList
)
