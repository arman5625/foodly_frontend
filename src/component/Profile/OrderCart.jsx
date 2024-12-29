import { Button, Card } from '@mui/material'
import React from 'react'

const OrderCart = () => {
  return (
    <Card className='flex justify-between items-center p-5'>
        <div className="flex items-center space-x-5">
            <img
              className='h-16 w-16'
              src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
             />
            <div>
                <p>Burger</p>
                <p>$399</p>
            </div>
        </div>
        <div>
            <Button className="cursor-not-allowed">Completed</Button>
        </div>
      
    </Card>
  )
}

export default OrderCart
