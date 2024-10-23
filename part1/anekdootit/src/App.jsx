import { useState } from 'react'

const Button = (props) => {
  return ( 
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  //const points = new Array(anecdotes.length - 1).fill(0) 
  const [points, setPoint] = useState(new Array(anecdotes.length).fill(0) )
  console.log("points are",points, anecdotes.length)
   
  const [selected, setSelected] = useState(0)

  const handleSelectedClick = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  const handleVoteClick = () => {
    const copyPoints = [...points]
    copyPoints[selected] += 1
    setPoint(copyPoints)
  }

  const mostVotes = (pointsArray) => {
    let index = 0
    let value = 0
    for (let i = 0; i < pointsArray.length; i++) {
      if (pointsArray[i] > value) {
        console.log("value: ",pointsArray[i],"i:",i," index:",index)
        index = i
        value = pointsArray[i]
      }
    }
    return index
  }

  

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        {anecdotes[selected]}
      </div>
      <div>
        has {points[selected]} votes
      </div>
      <div>
        <Button handleClick={handleVoteClick} text='vote'/>
        <Button handleClick={handleSelectedClick} text='next anecdote'/>
      </div>
      <div>
        <h1>Anecdote with the most votes</h1>
        {anecdotes[mostVotes(points)]}
      </div>
      <div>
        has {points[mostVotes(points)]} votes
      </div>
    </div>
  )
}

export default App