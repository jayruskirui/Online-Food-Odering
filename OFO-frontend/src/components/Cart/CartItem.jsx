import IconButton from '@mui/material/IconButton'
import React from 'react'
import DoDisturbOnOutlinedIcon from '@mui/icons-material/DoDisturbOnOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { Chip } from '@mui/material';

const CartItem = () => {
  return (
    <div className='px-5'>
        <div className='lg:flex justify-center lg:space-x-5'>
            <div>
                <img className='w-[5rem] h-[5rem] object-cover'
                src='https://images.unsplash.com/photo-1705174299330-939dd03cc864?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
                alt='' />
            </div>

            <div className='flex items-center justify-between lg:w-[70%]'>
                <div className='space-y-1 lg:space-y-3 w-full'>
                    <p>Biryani</p>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center space-x-1'>
                            <IconButton>
                                <DoDisturbOnOutlinedIcon/>
                            </IconButton>
                            <div className='w-5 h-5 text-xs flex items-center justify-between'>
                                {5}
                            </div>
                            <IconButton>
                                <AddCircleOutlineOutlinedIcon/>
                            </IconButton>
                        </div>
                    </div>
                </div>
                <p>Ksh 1800</p>
            </div>
        </div>
        <div className='pt-3 space-x-2'>

            {[1,1,1].map((item)=>(<Chip label={"Bread"}/>))}

        </div>
    </div>
  )
}

export default CartItem