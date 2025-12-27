import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Welcome To SKNSCOE College,Korti,Pandharpur</h1>
      <h1 className='class1'>Leadsoft React Training</h1>
      <h1>Registration Form</h1>
      <button className='btn-primary'>Submit</button>
      <button>Click me</button>
      <div className="container1">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    
      

    </>
  )
}

export default App
