
import { useState } from 'react'

function Welcome(props) {
  const [count, setCount] = useState(0)
const isAdmin = true
  return (
    <>
      <p className="welcome-text">
        {props.name} — {count}
      </p>

      <button onClick={() => setCount(count + 1)}>
        Add 1
      </button>

{isAdmin && <p>Admin Panel</p>}
    </>
  )
}

export default Welcome
