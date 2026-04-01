import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
<div className='w-[250px] h-screen bg-danger-200 p-4' style={{background: '#f8f9fa'}}>

  <ul>
    <li className='mb-2'><Link to="/admin/dashboard" className='text-gray-700 hover:text-gray-900'>Dashboard</Link></li>
    <li className='mb-2'><Link to="/admin/categories" className='text-gray-700 hover:text-gray-900'>Categories</Link></li>
    <li className='mb-2'><Link to="/admin/products" className='text-gray-700 hover:text-gray-900'>Products</Link></li>
    <li className='mb-2'><Link to="/admin/orders" className='text-gray-700 hover:text-gray-900'>Orders</Link></li>
    <li className='mb-2'><Link to="/admin/users" className='text-gray-700 hover:text-gray-900'>Users</Link></li>
  </ul>
</div>
    </div>
  )
}

export default Sidebar