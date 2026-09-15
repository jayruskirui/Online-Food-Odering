import Divider from '@mui/material/Divider'
import React, { useState } from 'react'
import CartItem from './CartItem'
import AddressCard from './AddressCard'
import { Box, Button, Card, Modal } from '@mui/material'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  outline: 'none',
  boxShadow: 24,
  p: 4,
};

const items = [1,1,1];
const Cart = () => {

    const createOrderUsingSelectedAddress = () => {};
    const handleOpenAddressModal = () => setOpen(true);
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

  return (
    <>
        <main className='lg:flex justify-between'>

            <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
                {items.map((item)=>(<CartItem/>))}

                <Divider/>

                <div className='billDetails px- text-sm '>
                    <p className='font-extralight py-5'>Bill Details</p>
                    <div className='space-y-3'>
                        <div className='flex justify-between text-gray-400'>
                            <p>Item Total</p>
                            <p>Ksh 5400</p>
                        </div>
                        <div className='flex justify-between text-gray-400'>
                            <p>Delivery Fee</p>
                            <p>Ksh 54</p>
                        </div>
                        <div className='flex justify-between text-gray-400'>
                            <p>GST & Restaurant Charges</p>
                            <p>Ksh 50</p>
                        </div>

                        <Divider/>

                        <div className='flex justify-between text-gray-400 '>
                            <p>Total Pay</p>
                            <p>Ksh 5504</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <Divider orientation='vertical' flexItem/>

            <section className='lg:w-[70%] flex justify-between px-5 pb-10 lg:pb-0'>
                <div className='w-full'>
                    <h1 className='text-center font-semibold text-2xl py-10'>
                        Choose Delivery Address
                    </h1>
                    <div className='flex gap-5 flex-wrap justify-center'>
                        {[1,1,1,1].map((item) =>(<AddressCard item={item} showButton={true} handleSelectAddress={createOrderUsingSelectedAddress()}/>))}
                        
                        <Card className='flex gap-5 w-64 p-5'>
                            <AddLocationAltIcon/>
                             <div className='space-y-3 text-gray-500'>
                                <h1 className='font-semibold text-lg text-white'>Add New Address</h1>
                        
                            <Button variant='outlined' fullWidth onClick={handleOpenAddressModal}>Add</Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
            
        </main>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
    
             </Box>
        </Modal>
    </>
  )
}

export default Cart