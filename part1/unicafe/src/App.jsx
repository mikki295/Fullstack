import { useState } from 'react'
// is this what is meant in 1.10 "Button vastaa yksittäistä palautteenatonappia"
const Button = (props) => {
  return (
      <button onClick={props.handleClick}>{props.text}</button>
  )
}

const StatisticsLine = (props) => {
  if (props.text === "Positive")
    return (
      <tr>
        <td>{props.text}</td>
        <td></td>
        <td></td>
        <td>{props.value} %</td>
      </tr>
    )
  return (
    <tr>
      <td>{props.text}</td>
      <td> </td>
      <td> </td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>
        No feedback given yet!
      </div>
    )
  }

  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  const total = props.total

  const average = (a,b, total) => (a * 1 + b * -1) / total
  const fraction = (a,b) => {
    return a/b * 100
  }
  

  return (
    <table>
      <tbody>
        <StatisticsLine text='Good' value={good} />
        <StatisticsLine text='Neutral' value={neutral} />
        <StatisticsLine text='Bad' value={bad} />
        <StatisticsLine text='Average' value={average(good,bad,total)} />
        <StatisticsLine text='Positive' value={fraction(good,total)} /> 
      </tbody>
    </table>
  )

}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <Button handleClick={handleGoodClick} text='Good' />
        <Button handleClick={handleNeutralClick} text='Neutral' />
        <Button handleClick={handleBadClick} text='Bad' />
      </div>
      <div>
        <h1>Statistics</h1>
        <Statistics  good={good} bad={bad} neutral={neutral} total={total} />
      </div>
    </div>

  )
}

 export default App