import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Numbers from './components/Numbers'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterFlag, setFilterFlag] = useState(false)
  const [filterPersons, setFilterPersons] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const names = persons.map(item => item.name)
    if (names.indexOf(newName) >= 0) {
      alert(`${newName}已存在`)
    } else {
      setPersons([...persons, { name: newName, number: newNumber }])
    }
    setFilterFlag(false)
  }

  const handleFilterName = (event) => {
    const name = event.target.value.toLowerCase()
    const names = persons.filter(item => item.name.toLowerCase().indexOf(name) >= 0)
    setFilterPersons(names)
    setFilterFlag(true)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterName={handleFilterName} />
      <h2>add a new</h2>
      <PersonForm handleSubmit={handleSubmit}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Numbers flag={filterFlag} persons={persons} filterPersons={filterPersons} />
    </div>
  )
}

export default App