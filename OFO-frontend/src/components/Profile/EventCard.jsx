import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';


const EventCard = () => {
  return (
    <div>
        <Card sx={{width:345}}>
            <CardMedia
            sx={{height:345}}
            image='https://images.unsplash.com/photo-1613946069412-38f7f1ff0b65?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />

            <CardContent>
                <Typography variant='h5'>
                    Kenya's Stable Food
                </Typography>
                <Typography variant='body2'>50% off on your first order</Typography>

                <div className='py-2 space-y-2'>
                    <p>Nairobi</p>
                    <p className='text-sm text-blue-500'>September 16, 2026 13:00 PM</p>
                    <p className='text-sm text-red-500'>September 28, 2026 14:00 PM</p>
                </div>
            </CardContent>

            {true && <CardActions>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </CardActions>}
        </Card>
    </div>
  )
}

export default EventCard