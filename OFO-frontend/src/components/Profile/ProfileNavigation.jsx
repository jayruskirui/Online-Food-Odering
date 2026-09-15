import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LogoutIcon from '@mui/icons-material/Logout';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router-dom';


const menu = [
    {title:"Orders", icon:<ShoppingBagIcon/>},
    {title:"Favorites", icon:<FavoriteIcon/>},
    {title:"Address", icon:<HomeIcon/>},
    {title:"Payment", icon:<AccountBalanceWalletIcon/>},
    {title:"Notifications", icon:<NotificationsIcon/>},
    {title:"Events", icon:<EventAvailableIcon/>},
    {title:"LogOut", icon:<LogoutIcon/>}
]

const ProfileNavigation = ({open, handleClose}) => {
    const isLargeScreen = useMediaQuery("(min-width:900px)");
    const navigate = useNavigate();
    const handleNavigate = (item) => {
        navigate(`/my-profile/${item.title.toLowerCase()}`)
        if (!isLargeScreen) handleClose();
    }

  return (
    <div>
        <Drawer 
        variant={isLargeScreen ? "permanent" : "temporary"}
        onClose={handleClose}
        open={isLargeScreen || open}
        anchor='left'
        sx={{ position:"sticky", zIndex: 40 }}>

            <div className='w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center gap-8 pt-16 text-xl'>
                {menu.map((item,i)=><>
                <div onClick={()=>handleNavigate(item)}
                    className='px-5 flex items-center space-x-5 cursor-pointer'>
                    {item.icon}
                    <span>{item.title}</span>
                </div>
                {i!== menu.length-1 && <Divider/>}
                </>)}
            </div>

        </Drawer>
    </div>
  )
}

export default ProfileNavigation