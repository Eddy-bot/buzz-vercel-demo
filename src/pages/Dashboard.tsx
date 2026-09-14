import { useState, useEffect } from 'react'
import StatCard from '../components/StatCard'

type Order = {
  id: number
  customer: string
  status: string
  amount: number
}

function Dashboard() {
  const [orders, setOrders] = useState(1284)
  const [testOrder, setTestOrder] = useState<Order | null>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Dashboard is active')
    }, 2000)

    return () => {
      clearInterval(timer)
      console.log('Dashboard cleanup')
    }
  }, [])

  async function testAsync() {
    try {
      console.log('Starting...')

      const result = await new Promise<Order>((resolve, reject) =>
        setTimeout(
          () =>
            resolve({
              id: 1001,
              customer: 'John',
              status: 'delivered',
              amount: 35
            }),
          3000
        )
      )

      console.log(result.id)
      console.log(result.customer)
      console.log(result.status)
      console.log(result.amount)

      setTestOrder(result)
    } catch (error) {
      console.log('Something went wrong:', error)
    }
  }

  return (
    <div>
      <div className="topbar">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back. Here's what's happening with BUZZ today.</p>
        </div>

        <div className="admin">
          <div className="avatar">OS</div>
          <span>Admin</span>
        </div>
      </div>

      <div className="stats">
        <StatCard
          title="Total Orders"
          value={orders.toLocaleString()}
          change="+12.5% this month"
          description="Orders completed and placed"
        />

        <StatCard
          title="Active Riders"
          value="86"
          change="+8.2% this month"
          description="Riders currently available"
        />

        <StatCard
          title="Customers"
          value="2,481"
          change="+15.4% this month"
          description="Registered BUZZ customers"
        />

        <StatCard
          title="Revenue"
          value="GH₵45,820"
          change="+10.8% this month"
          description="Total revenue this month"
        />
      </div>

      <button onClick={() => setOrders(orders + 1)}>
        Add Test Order
      </button>

      <button onClick={testAsync}>
        Test Async
      </button>

      {testOrder && (
        <div>
          <p>Order ID: {testOrder.id}</p>
          <p>Customer: {testOrder.customer}</p>
          <p>Status: {testOrder.status}</p>
          <p>Amount: GH₵{testOrder.amount}</p>
        </div>
      )}
    </div>
  )
}

export default Dashboard
