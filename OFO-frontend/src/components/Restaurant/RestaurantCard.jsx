import React from 'react'
import { Card, Chip, IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';



const RestaurantCard = () => {
  return (
    <Card className = "w-[18rem]">
      <div className = {`${true ? "cursor-pointer" : "cursor-not-allowed"} relative`}>
        <img src = "https://www.webstaurantstore.com/uploads/buying_guide/2025/9/restaurant-floor-plan-1.jpg" 
        alt = "" 
        className = 'w-full h-[10rem] object-cover rounded-t-md' />

        <Chip
        size = 'small'
        label = {true ? "Open" : "Closed"}
        color = {true ? "success" : "error"}
        className = 'absolute top-2 left-2'
        />
      </div>

      <div className = 'p-4 textPart lg:flex justify-between w-full'>
        <div className = 'space-y-1'>
            <p className = 'font-semibold text-lg'>Kenya Fast Food</p>
            <p className = 'text-gray-500 text-sm'>Craving it all. Be part of our clients today</p>
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