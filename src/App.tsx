import OrderPractice from './components/OrderPractice'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Customers from './pages/Customers'
import Riders from './pages/Riders'
import Analytics from './pages/Analytics'
import Payments from './pages/Payments'
import Orders from './pages/Orders'
import Welcome from './components/Welcome'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
<Welcome name="Edwin" />
<OrderPractice orderNumber="1001" />
      <aside className="sidebar">
          <div className="logo">
            <span className="logo-mark">B</span>
            <span>BUZZ</span>
          </div>

          <nav>
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/orders"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Orders
            </NavLink>

            <NavLink
              to="/riders"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Riders
            </NavLink>

            <NavLink
              to="/customers"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Customers
            </NavLink>

            <NavLink
              to="/payments"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Payments
            </NavLink>

            <NavLink
              to="/analytics"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Analytics
            </NavLink>
          </nav>

          <div className="sidebar-bottom">
            <a>Settings</a>
            <a>Logout</a>
          </div>
        </aside>

        <main className="main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/riders" element={<Riders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
