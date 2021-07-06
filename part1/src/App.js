import React, { useState } from "react"

const Display = ({ counter }) => <div>{counter}</div>


const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)


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