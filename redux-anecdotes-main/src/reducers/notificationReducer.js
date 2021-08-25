export const setNotification = (notification, seconds) => {
  return (dispatch) => {
    dispatch({
      type: 'SET_NOTIFICATION',
      notification,
    })
    setTimeout(() => {
      dispatch({
        type: 'SET_NOTIFICATION',
        notification: '',
      })
    }, seconds * 1000)
  }
}

const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.notification
    default:
      return state
  }
}

export default notificationReducer
