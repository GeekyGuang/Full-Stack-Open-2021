import React, { useState } from "react"

const Display = (props) => {
    return (
        <div>{props.counter}</div>
    )
}

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    )
}

const App = () => {
    const [counter, setCounter] = useState(0)

    const increaseByOne = () => setCounter(counter + 1)
    const decreaseByOne = () => setCounter(counter - 1)
    const setToZero = () => setCounter(0)

    return (
        <div>
            <Display counter={counter} />
            <Button text={'plus'} handleClick={increaseByOne} />
            <Button text={'Zero'} handleClick={setToZero} />
            <Button text={'minus'} handleClick={decreaseByOne} />
        </div>

    )
}

export default App