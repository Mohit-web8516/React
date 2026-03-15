import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    // counter = counter + 1
    setCounter(counter + 1)
    // console.log("clicked", counter);
  }
  const removeValue = () => {
    setCounter(counter - 1);
  }

  return (
    <>

      <h1>hello !! lets learn react...</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>add value{counter} </button>
      <br />
      <button onClick={removeValue} >remove value{counter}</button>
      <p>footer: {counter}</p>
    </>

  )

}

export default App 
