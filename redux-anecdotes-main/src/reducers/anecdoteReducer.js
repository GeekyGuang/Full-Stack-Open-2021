import anecdotesService from '../services/anecdotes'
// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
// ]

// const getId = () => (100000 * Math.random()).toFixed(0)

export const voteAction = (id) => {
  return async (dispatch) => {
    const anecdote = await anecdotesService.get(id)
    anecdote.votes += 1
    const votedAnecdote = await anecdotesService.update(id, anecdote)
    dispatch({
      type: 'VOTE',
      votedAnecdote,
    })
  }
}

export const createAction = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdotesService.createNew(content)
    dispatch({
      type: 'CREATE',
      newAnecdote,
    })
  }
}

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0,
//   }
// }

export const initAction = () => {
  return async (dispatch) => {
    const anecdotes = await anecdotesService.getAll()
    dispatch({
      type: 'INIT',
      anecdotes,
    })
  }
}

// const initialState = anecdotesAtStart.map(asObject)

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE': {
      return state.map((item) =>
        item.id !== action.votedAnecdote.id ? item : action.votedAnecdote
      )
    }
    case 'INIT': {
      return action.anecdotes
    }
    case 'CREATE': {
      return [...state, action.newAnecdote]
    }
    default:
      return state
  }
}

export default anecdoteReducer
