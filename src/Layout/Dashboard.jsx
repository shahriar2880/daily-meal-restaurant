import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='flex'>
        {/* dashboard side bar */}
      <div className='w-64 min-h-full bg-orange-600'>
        <ul className='menu'>
            <li><NavLink to="/dashboard/cart">My Cart</NavLink></li>
        </ul>
      </div>
      {/* Dashboard content */}
      <div className='flex-1'><Outlet></Outlet></div>
    </div>
  )
}

export default Dashboard
