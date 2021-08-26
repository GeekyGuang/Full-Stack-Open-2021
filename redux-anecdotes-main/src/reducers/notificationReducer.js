export const setNotification = (notification, seconds) => {
  return (dispatch) => {
    dispatch({
      type: 'SET_NOTIFICATION',
      notification,
    })
    if (window.timeoutID) {
      console.log(window.timeoutID)
    }
    window.timeoutID = setTimeout(() => {
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
