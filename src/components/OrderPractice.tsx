import { useState, useEffect } from 'react'

function OrderPractice({ orderNumber }) {
  const [count, setCount] = useState(0)
useEffect(() => {
  console.log(`Started effect for count: ${count}`)

  return () => {
    console.log(`Cleaned up effect for count: ${count}`)
  }
}, [count])
  return (
    <div>
      <div>Order: {orderNumber}</div>
      <div>Count: {count}</div>

<button
  className="order-button"
  onClick={() => setCount(count + 1)}
> Add
</button>
      {count >= 3 && <div>Ready!</div>}
    </div>
  )
}
export default OrderPractice
