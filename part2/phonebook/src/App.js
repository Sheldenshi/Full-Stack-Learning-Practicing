import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])

  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  },[])
  const addNumbers = (event) => {
    event.preventDefault()
    const newPerson = {name: newName,
                      number: newNumber}
    
    if (!persons.some(p => p.name === newName)) {
      setPersons(persons.concat(newPerson))
    } else {
      alert(`${newName} is already added to phonebook`)
    }
    setNewName('')
    setNewNumber('')
  }
  const handelNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handelNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={newFilter} onChange={event => setFilter(event.target.value)}></input>
      </div>
      <h2>Add New</h2>
      <form onSubmit={addNumbers}>
        <div>
          name: <input value={newName} onChange={handelNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handelNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      
        {persons.filter(person => person.name.toLowerCase().startsWith(newFilter.toLowerCase())).map((person) =>
          <li key={person.name}>{person.name} {person.number}</li>
        )}
      </ul>
      
    </div>
  )
}

export default App