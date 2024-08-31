import { userState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)
  let myObj = {
    name: "sachin",
    age: 21
  }

  // let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl place-items-center mb-4'>Tailwind Test</h1>
      <Card channel="chaiaurcode" btnText="click me"/>
      <Card username="Sachin"/>

    </>
  )
}

export default App
