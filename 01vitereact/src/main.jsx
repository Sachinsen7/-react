import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
      <div>
        <h1>Custom App !</h1>
        <div>
          <p>Learned Javascript nd now learning React</p>
        </div>
      </div>
    )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://goggle.com',   /* bad syntax*/ 
//       target: '_blank'
//   },
//   children: 'Click me to visit goggle'
// }

const anotherElement = (
  <a href="https://goggle.com" target='_blank'>Visit Google</a>
)

const anotherUser = "My Name is Sachin"

const reactElement = React.createElement(
  'a',
  {href: 'https://goggle.com', target: '_blank' },
  'click me to visit goggle',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <MyApp />
  // MyApp()  
  // ReactElement
  // anotherElement
  // reactElement
  // <App/>
)
