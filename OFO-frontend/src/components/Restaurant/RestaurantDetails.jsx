import React, {useEffect, useState} from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Divider, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import MenuCard from './MenuCard';
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getRestaurantById, getRestaurantsCategory } from '../State/Restaurant/Action'
import { getMenuItemsByRestaurantId } from '../State/Menu/Action'





const foodTypes = [
    { label: 'All', value: 'all' },
    { label: 'Vegetarian only', value: 'vegetarian' },
    { label: 'Non-Vegetarian', value: 'non-vegetarian' },
    {label: 'Seasonal', value: 'seasonal' }
];

const menu = [1,1,1,1,1]

const RestaurantDetails = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt")
    const {auth,restaurant, menu} = useSelector(store => store)

    const {id, city} = useParams()

    const [foodType, setFoodType] = useState('all');

    const handleFilter = (e) => {
        console.log(e.target.value, e.target.name)
    }

    console.log("restaurant", restaurant)

    useEffect(()=>{
        dispatch(getRestaurantById({jwt, restaurantId:id}))
        dispatch(getRestaurantsCategory({jwt, restaurantId:id}))
        dispatch(getMenuItemsByRestaurantId({jwt, restaurantId:id, vegetarian: false, nonveg:false, seasonal:false, foodCategory:""}))
    },[])

  return (
    <div className='px-5 lg:px-20'>
      <section>
        <h3 className='text-gray-500 py-2 mt-10'>Home/Kenya/kenyan fast food</h3>

        <div className='flex flex-col gap-2'>
          {/* Top image - full width */}
          <img
            className='w-full h-[30vh] md:h-[40vh] object-cover rounded-lg'
            src={restaurant.restaurant?.images[0]}
            alt=''
          />

          {/* Bottom row - two equal halves */}
          <div className='flex gap-2'>
            <img
              className='w-full md:w-1/2 h-[30vh] md:h-[40vh] object-cover rounded-lg'
              src={restaurant.restaurant?.images[1]}
              alt=''
            />
            <img
              className='w-full md:w-1/2 h-[30vh] md:h-[40vh] object-cover rounded-lg'
              src={restaurant.restaurant?.images[2]}
              alt=''
            />
          </div>
        </div>

        <div className = 'pt-3 pb-5'>
            <h1 className = 'text-4xl font-semibold'>{restaurant.restaurant?.name}</h1>

            <p className = 'text-gray-500 mt-1'>
              {restaurant.restaurant?.description}
            </p>

            <div className = 'space-y-3 mt-3'>
                <p className = 'text-gray-500 flex items-center gap-3'>
                    <LocationOnIcon /> 
                    <span>Kenya, Nairobi</span>
                </p>

                <p className = 'text-gray-500 flex items-center gap-3'>
                    <CalendarTodayIcon />
                    <span>Mon 14th Sep (Today)</span>
                </p>
            </div>
        </div>
      </section>

      <Divider/>
      <section className = 'pt-[2rem] lg:flex relative'>
        <div className = 'space-y-10 lg:w-[20%] filter'>
            
            <div className = 'box space-y-5 lg:sticky top-28'>
                <div>
                    <Typography variant = 'h5' sx = {{paddingBottom: '1rem'}}>
                        Food Type
                    </Typography>

                <FormControl className='py-10 space-y-5' component={"fieldset"}>
                        <RadioGroup onChange={handleFilter} name="foodType" value={foodType}>
                            {foodTypes.map((item) => (
                                <FormControlLabel
                                    key={item.value}
                                    value={item.value}
                                    control={<Radio />}
                                    label={item.label}
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>
                </div>

                <Divider />

                <div>
                    <Typography variant = 'h5' sx = {{paddingBottom: '1rem'}}>
                        Food Categories
                    </Typography>

                <FormControl className='py-10 space-y-5' component={"fieldset"}>
                        <RadioGroup onChange={handleFilter} name="foodType" value={foodType}>
                            {restaurant.categories.map((item) => (
                                <FormControlLabel
                                    key={item}
                                    value={item}
                                    control={<Radio />}
                                    label={item.name}
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>
                </div>
            </div>

        </div>

        <div className = 'space-y-5 lg:w-[80%] lg:pl-10'>
            {menu.menuItems.map((item) => (<MenuCard item={item} />))}
        </div>
      </section>
    </div>
  )
}

export default RestaurantDetails