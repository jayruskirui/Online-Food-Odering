import React from 'react'
import { Card, Chip, IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';



const RestaurantCard = ({ item }) => {
  const imageUrl = item?.images[0];
  const name = item?.name || 'Restaurant';
  const description = item?.description;
  const isOpen = item?.open ?? true;

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
          <p className='font-semibold text-lg'>{name}</p>
          <p className='text-gray-500 text-sm'>{description}</p>
        </div>

        <div>
          <IconButton>
            {true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </div>
      </div>
    </Card>
  )
}

export default RestaurantCard