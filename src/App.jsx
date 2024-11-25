import { useState } from 'react'
import './App.css'

const func = (x) => x * x;
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <form onSubmit={} >
      <input className='myinp' type="text" />
      <button>Add</button>
      </form>
    </>
  )
}

export default App
