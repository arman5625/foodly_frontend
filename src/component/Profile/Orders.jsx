import React, { useEffect } from 'react'
import OrderCart from './OrderCart'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getUsersOrder } from '../../State/Order/Action';

const Orders = () => {
  const {auth, order, cart} = useSelector(store => store);
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const dispatch =  useDispatch();
  useEffect( ()=> {
    dispatch(getUsersOrder(jwt));
  }, [auth.jwt]);

console.log("orders",order);


  return (
    <div className='flex items-center flex-col'>
        <h1 className="text-xl text-center py-7 font-semibold">My Orders</h1>
        <div className='space-y-5 w-full lg:w-1/2'>
            {
                order.orders.map((order) => order.items.map((item)=>(<OrderCart order={order} item={item}/>)))

            }
        </div>
    </div>
  )
}

export default Orders
