import React from 'react'
import { Card, Chip, IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { isPresentInFavorites } from '../Config/logic';
import { addToFavorite } from '../State/Authentication/Action';



const RestaurantCard = ({ item }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt")
  const {auth} = useSelector(store => store)

  const imageUrl = item?.images[0];
  const name = item?.name || item?.title || 'Restaurant';
  const description = item?.description || item?.Description;
  const isOpen = item?.open ?? true;

  const handleAddToFavorite = () => {
    dispatch(addToFavorite({restaurantId:item?.id, jwt}))
  }

  const handleNavigateToRestaurant=()=>{
    if(item?.id){
      const city = item?.address?.city || 'unknown'
      navigate(`/restaurant/${encodeURIComponent(city)}/${encodeURIComponent(name)}/${item.id}`)
    }
  }

  return (
    <Card className="w-[18rem]">
      <div className={`${true ? 'cursor-pointer' : 'cursor-not-allowed'} relative`}>
        <img
          src={imageUrl}
          alt=""
          className='w-full h-[10rem] object-cover rounded-t-md'
        />

        <Chip
          size='small'
          label={isOpen ? 'Open' : 'Closed'}
          color={isOpen ? 'success' : 'error'}
          className='absolute top-2 left-2'
        />
      </div>

      <div className='p-4 textPart lg:flex justify-between w-full'>
        <div className='space-y-1'>
          <p onClick={handleNavigateToRestaurant} className='font-semibold text-lg cursor-pointer'>{name}</p>
          <p className='text-gray-500 text-sm'>{description}</p>
        </div>

        <div>
          <IconButton onClick={handleAddToFavorite}>
            {isPresentInFavorites(Array.isArray(auth?.favorites) ? auth.favorites : [], item) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </div>
      </div>
    </Card>
  )
}

export default RestaurantCard