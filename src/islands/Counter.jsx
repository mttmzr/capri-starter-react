import { useState } from 'react'

export default function Counter({ start = 0 }) {
  const [counter, setCounter] = useState(start)

  return (
    <div>
      <button onClick={() => setCounter((c) => c - 1)}>-</button>
      <span>{counter}</span>
      <button onClick={() => setCounter((c) => c + 1)}>+</button>
    </div>
  )
}
