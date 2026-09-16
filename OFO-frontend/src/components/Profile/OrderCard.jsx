import { Button, Card } from '@mui/material'
import React from 'react'

const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p-5'>
        <div className='flex items-center space-x-5'>
             <img className='h-16 w-16'
             src='https://images.unsplash.com/photo-1589302168068-964664d93dc0?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
             alt='' />
             <div>
                <p>Biryani</p>
                <p>Ksh 1200</p>
             </div>
        </div>
        <div>
            <Button className='cursor-not-allowed'>Completed</Button>
        </div>
    </Card>
  )
}

export default OrderCard