//import React from 'react'
const Hello = ({ name, age, ...props }) => {
    console.log(props.gender)

    const bornYear = () => new Date().getFullYear() - age

    return (
        <>
            <p>Hello {name}, you are {age} years old</p>
            <p>So you were probably born in {bornYear()}</p>
        </>

    )
}


const App = () => {
    const name = 'Peter'
    const age = 10

    return (
        <>
            <h1>Greetings</h1>
            <Hello name="Maya" age={26 + 10} gender='female' />
            <Hello name={name} age={age} />
        </>
    )
}

export default App