import { useState } from 'react'


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Display = props => <div>{props.value}</div>

const App = () => {
  const [value, setValue] = useState(0)

  const setToValue = (newValue) => {
    console.log('Value now',newValue)
    setValue(newValue)
  }

  

  return (
    <div>
      <Display value={value} />
      <div>
        <Button handleClick={() => setToValue(value + 1000)} text='Thousand' />
        <Button handleClick={() => setToValue(0)} text='reset' />
        <Button handleClick={() => setToValue(value + 1)} text='increment' />
      </div>
    </div>
  )
}

export default App