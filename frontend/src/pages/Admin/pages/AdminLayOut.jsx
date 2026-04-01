import React from 'react'
import Navbar from '../../../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const AdminLayOut = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />
      <div className="row ">
        <Sidebar />
      
          <div className="col-md-9 p-4">
            
            <Outlet />
          </div>
        
      </div>
    </div>
  )
}

export default AdminLayOut