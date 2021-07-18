const Notification = ({ message }) => {
    const style = {
        color: 'green',
        fontWeight: 'bold',
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        background: 'lightgrey'
    }

    if (message === null) {
        return null
    }
    return (
        <div style={style}>{message}</div>
    )

}

export default Notification