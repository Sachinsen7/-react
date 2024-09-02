import { useState } from 'react'

function App() {
  const [color, setColor] = useState("gray")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "red"}} >
          red
          </button>
          <button onClick={() => setColor("gray")}className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "gray"}} >
          gray
          </button>
          <button onClick={() => setColor("pink")}className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "pink"}} >
          pink
          </button>
          <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "yellow"}} >
          yellow
          </button>
          <button onClick={() => setColor("orange")} className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "orange"}} >
          orange
          </button>
          <button onClick={() => setColor("blue")}className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "blue", color: 'white'}} >
          blue
          </button>
          <button onClick={() => setColor("black")}className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "black", color: 'white'}} >
          black
          </button>
          <button onClick={() => setColor("violet")}className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "violet"}} >
          violet
          </button>
          <button onClick={() => setColor("brown")} className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "brown"}} >
          brown
          </button>
        </div>
      </div>
    </div>

    
  )
}

export default App
