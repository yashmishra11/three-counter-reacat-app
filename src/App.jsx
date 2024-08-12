import React from 'react'
import { useState } from 'react'
import Counter1 from './components/Counter1'
import Counter2 from './components/Counter2'
import Counter3 from './components/Counter3'

function App() {
  let [count, setCount] = useState(0)
  return (
    <div>
    <Counter1 count={count} />
    <Counter2 count={count} />
    <Counter3 count={count} />
    <button onClick={() => setCount(count + 1)}>Increase</button>
    <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

export default App
