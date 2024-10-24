import { useState } from 'react'


const Person = (props) => {

  return (
    <div>
      {props.name} {props.number}
    </div>
  )
}

const Persons = (props) => {
  return (
    <div>
      {props.persons.map(person => {

        if (person.name.toLowerCase().includes(props.newFilter)) {
          return (
            <Person key={person.name} name={person.name} number={person.number} filter={props.newFilter} />
          )
      }
      })}
    </div>
  )
}

const Filter = (props) => {
  return (
    <form>
      filter shown with <input value={props.newFilter} onChange={(props.handleFilterChange)} />
    </form>
  )

}

const PersonForm = (props) => {
  return (
    <form onSubmit={props.addPerson}>
      <div>
        name: <input value={props.newName} onChange={props.handlePersonChange} />
      </div>
      <div>
        number: <input value={props.newNumber} onChange={props.handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')


  const doesExist = (persons) => {
    const names = persons.map(person => person.name)
    return names.includes(newName)
  }

  
  const addPerson = (event) => {
    event.preventDefault()

    if (doesExist(persons)) {
      console.log('there is already',newName)
      alert(`${newName} is already added to phonebook`)
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      }

      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value.toLowerCase())
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} handleFilterChange={handleFilterChange} />
      
      <h2>add a new person</h2>
      <PersonForm 
        addPerson={addPerson}
        newName={newName}
        handlePersonChange={handlePersonChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter} />
    </div>
  )

}

export default App