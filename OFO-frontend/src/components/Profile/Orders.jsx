import React, { useEffect } from 'react'
import OrderCard from './OrderCard'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersOrders } from '../State/Order/Action'

const Orders = () => {
    const {auth, order} = useSelector(store => store);
    const jwt = auth.jwt || localStorage.getItem("jwt");
    const dispatch = useDispatch();

    useEffect(()=>{
      if (jwt) dispatch(getUsersOrders(jwt))
    }, [dispatch, jwt])

    const orders = Array.isArray(order.orders) ? order.orders : [];
    const orderItems = orders.flatMap((order) =>
      (Array.isArray(order.items) ? order.items : []).map((item) => ({ item, order }))
    );

  return (
    <div className='flex items-center flex-col'>
      <h1 className='text-xl text-center py-7 font-semibold'>My Orders</h1>
      <div className='space-y-5 w-full lg:w-1/2'>
        {order.loading && <p className='text-center'>Loading orders...</p>}
        {order.error && <p className='text-center text-red-500'>Could not load your orders.</p>}
        {!order.loading && !order.error && orderItems.length === 0 && (
          <p className='text-center'>You have no orders yet.</p>
        )}
        {orderItems.map(({ item, order }) => (
          <OrderCard key={`${order.id}-${item.id}`} item={item} order={order} />
        ))}
      </div>
    </div>
  )
}

export default Orders