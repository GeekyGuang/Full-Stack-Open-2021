import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Numbers from './components/Numbers'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterFlag, setFilterFlag] = useState(false)
  const [filterPersons, setFilterPersons] = useState([])
  const [errorMessage, setErrorMessage] = useState('no error presently')

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
    const newObject = {
      name: newName,
      number: newNumber
    }
    if (names.indexOf(newName) >= 0) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const person = persons.find(item => item.name === newName)
        personService.update(person.id, newObject)
          .then(response => {
            setPersons(persons.map(item => item.name !== newName ? item : response))
            setErrorMessage(`${newName}'number is replaced`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000);
          })
      }
    } else {
      personService.create(newObject)
        .then(response => {
          setPersons(persons.concat(response))
          setFilterFlag(false)
          setErrorMessage(`${newName} is added successfully`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000);
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
          setErrorMessage(`${item.name} is deleted`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000);
        })
        .catch(error => console.log(error))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
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