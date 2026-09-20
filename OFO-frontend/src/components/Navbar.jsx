import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import { useSelector } from 'react-redux';


const Navbar = () => {
  const {auth} = useSelector(store => store)
  const navigate = useNavigate()
 
  const handleCartClick = () => {
    const isLoggedIn = auth.user || auth.jwt || localStorage.getItem("jwt")

    navigate(isLoggedIn ? "/cart" : "/account/login")
  }

  const handleAvatarClick = () => {
      if(auth.user?.role==="ROLE_RESTAURANT_OWNER" || auth.user?.role==="ROLE_ADMIN"){
      navigate("/admin/restaurant")
      }
      else{
      navigate("/my-profile")
     }
  }

  return (
    <div className = 'px-5 sticky top-0 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between'>
        <div className = 'lg:mr-10 cursor-pointer flex items-center space-x-4'>
          <div onClick={()=>navigate("/")} className = ' logo text-gray-300 font-semibold text-2xl'>
            Online Eats
          </div>
        </div>

        <div className = 'flex items-center space-x-2 lg:space-x-10'>

          <div className= ''>
            <IconButton>
              <SearchIcon sx = {{fontSize: "1.5rem"}} />
            </IconButton> 
          </div>

          <div className =''>
            {auth.user ? (<Avatar onClick={handleAvatarClick} sx = {{bgcolor: "white", color: "pink.A400"}}>
              {auth.user?.fullName[0].toUpperCase()}
              </Avatar>) : 
            (<IconButton onClick={()=>navigate("/account/login")}>
              <PersonIcon />
            </IconButton>)}
          </div>

          <div className= ''>
            <IconButton onClick={handleCartClick}>
              <Badge color="primary" badgeContent={3  }>
                <ShoppingCartIcon sx = {{fontSize: "1.5rem"}} />
              </Badge>
            </IconButton> 
          </div>

        </div>
        
    </div>
  )
}

export default Navbar