import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CustomerRoutes from './CustomerRoutes'
import AdminRoute from './AdminRoute'

const Routers = () => {
  return (
    <div>
        <Routes>
            <Route path="/*" element={<CustomerRoutes/>}></Route>
            <Route path="/admin/restaurants/*" element={<AdminRoute/>}></Route>
        </Routes>
    </div>
  )
}

export default Routers
