import React, {useState} from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Divider, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';


const categories = [
    'Burgers',
    'Pizza',
    'Sushi',
    'Salads',
    'Desserts',
    'Drinks'
];

const foodTypes = [
    { label: 'All', value: 'all' },
    { label: 'Vegetarian only', value: 'vegetarian' },
    { label: 'Non-Vegetarian', value: 'non-vegetarian' },
    {label: 'Seasonal', value: 'seasonal' }
];

const RestaurantDetails = () => {

    const [foodType, setFoodType] = useState('all');

    const handleFilter = (e) => {
        console.log(e.target.value, e.target.name)
    }

  return (
    <div className='px-5 lg:px-20'>
      <section>
        <h3 className='text-gray-500 py-2 mt-10'>Home/Kenya/kenyan fast food</h3>

        <div className='flex flex-col gap-2'>
          {/* Top image - full width */}
          <img
            className='w-full h-[30vh] md:h-[40vh] object-cover rounded-lg'
            src='https://images.unsplash.com/photo-1581349485608-9469926a8e5e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt=''
          />

          {/* Bottom row - two equal halves */}
          <div className='flex gap-2'>
            <img
              className='w-full md:w-1/2 h-[30vh] md:h-[40vh] object-cover rounded-lg'
              src='https://images.unsplash.com/photo-1613946069412-38f7f1ff0b65?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt=''
            />
            <img
              className='w-full md:w-1/2 h-[30vh] md:h-[40vh] object-cover rounded-lg'
              src='https://plus.unsplash.com/premium_photo-1679434184720-f729541052eb?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt=''
            />
          </div>
        </div>

        <div className = 'pt-3 pb-5'>
            <h1 className = 'text-4xl font-semibold'>Kenya Fast Food</h1>

            <p className = 'text-gray-500 mt-1'>
              Experience the taste of Kenya with our delicious fast food options.
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
                            {categories.map((item) => (
                                <FormControlLabel
                                    key={item}
                                    value={item}
                                    control={<Radio />}
                                    label={item}
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>
                </div>
            </div>

        </div>

        <div className = 'space-y-5 lg:w-[20%] lg:pl-10'>
            Menu
        </div>
      </section>
    </div>
  )
}

export default RestaurantDetails