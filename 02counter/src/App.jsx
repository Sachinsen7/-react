import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(1)  //its a let counter 
  // let counter = 15

  const AddValue = () => {

    if (counter < 20) {
      setCounter(counter + 1)
    } else {
      console.log('Maximum value reached');
      
    // }
    // // counter = counter + 1
    // setCounter(counter + 1)
    // console.log("clicked", Math.random(), counter);
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    } else {
      console.log('Minimum value reached');
      
    }
    // setCounter(counter - 1)
  }

  const stopValue = () => {
    setCounter(0);
  }
  
  if (counter === 20 || counter === -1) {
    stopValue()
    
  } 


  

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={AddValue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
      {/* <p>you have reached the maximum counter</p> */}

    </>
  )
}

export default App
