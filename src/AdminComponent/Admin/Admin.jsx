import React from 'react'
import AdminSideBar from './AdminSideBar'
import { Route, Routes } from 'react-router-dom'
import RestaurantDashboard from '../Dashboard/Dashboard'
import Orders from '../Orders/Orders'
import RestaurantDetails from './RestaurantDetails'
import Menu from '../Menu/Menu'
import FoodCategory from '../FoodCategory/FoodCategory'
import Events from '../Events/Events'
import Ingredients from '../Ingredients/Ingredients'

const Admin = () => {
    const handleClose = ()=>{

    }
  return (
    <div>
      <div className="lg:flex justify-between">
        <div className='lg:w-[20%]'>
            <AdminSideBar handleClose={handleClose}/>
        </div>
        <div className='lg:w-[80%]'>
            <Routes>
                <Route path="/" element={<RestaurantDashboard/>}/>
                <Route path="/orders" element={<Orders/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/category" element={<FoodCategory/>}/>
                <Route path="/ingredients" element={<Ingredients/>}/>
                <Route path="/events" element={<Events/>}/>
                <Route path="/details" element={<RestaurantDetails/>}/>
            </Routes>
        </div>

      </div>
    </div>
  )
}

export default Admin;
