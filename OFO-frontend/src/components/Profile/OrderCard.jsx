import { Button, Card } from '@mui/material'
import React from 'react'

const OrderCard = ({item, order}) => {
  const food = item?.food
  const image = food?.images?.[0]
  const total = item?.totalPrice ?? 0

  return (
    <Card className='flex justify-between items-center p-5'>
        <div className='flex items-center space-x-5'>
             {image && <img className='h-16 w-16 object-cover' src={image} alt={food?.name ?? ''} />}
             <div>
               <p>{food?.name ?? 'Food item'}</p>
                <p>Ksh {Number(total).toLocaleString()}</p>
             </div>
        </div>
        <div>
            <Button disabled>{order?.orderStatus ?? 'Status unavailable'}</Button>
        </div>
    </Card>
  )
}

export default OrderCard