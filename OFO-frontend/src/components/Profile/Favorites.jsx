import React from 'react'
import RestaurantCard from '../Restaurant/RestaurantCard'
import { useSelector } from 'react-redux'

const Favorites = () => {
  const {auth} = useSelector(store => store )
  const favorites = Array.isArray(auth?.favorites) ? auth.favorites : []

  return (
    <div className='space-y-5 pt-5'>
      <h1 className='py-5 text-xl font-semibold text-center'>My Favorites</h1>
      <div className='flex flex-wrap gap-3 justify-center'>
        {favorites.map((item)=>(<RestaurantCard key={item.id} item={item}/>))}
      </div>
    </div>
  )
}

export default Favorites