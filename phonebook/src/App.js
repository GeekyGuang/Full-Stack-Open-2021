import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Numbers from './components/Numbers'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterFlag, setFilterFlag] = useState(false)
  const [filterPersons, setFilterPersons] = useState([])

  useEffect(() => {
    personService.getAll()
      .then(persons => {
        setPersons(persons)
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
      const newObject = {
        name: newName,
        number: newNumber
      }
      personService.create(newObject)
        .then(response => {
          setPersons(persons.concat(response))
          setFilterFlag(false)
        })
    }
  }

  const handleFilterName = (event) => {
    const name = event.target.value.toLowerCase()
    const names = persons.filter(item => item.name.toLowerCase().indexOf(name) >= 0)
    setFilterPersons(names)
    setFilterFlag(true)
  }

  const handleDelete = (item) => {
    if (window.confirm(`Delete ${item.name}?`)) {
      personService.deletePerson(item.id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== item.id))
        })
        .catch(error => console.log(error))
    }
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
      <Numbers flag={filterFlag} persons={persons} filterPersons={filterPersons} handleDelete={handleDelete} />
    </div>
  )
}

export default App