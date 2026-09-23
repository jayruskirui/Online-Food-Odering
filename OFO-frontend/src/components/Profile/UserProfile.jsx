import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../State/Authentication/Action';

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth } = useSelector((store) => store);

  const user = auth?.user;
  const userName = user?.fullName || user?.name || 'User';
  const email = user?.email || 'No email available';

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className='min-h-[80vh] flex flex-col justify-center items-center text-center'>
      <div className='flex flex-col justify-center items-center'>
        <AccountCircleIcon sx={{ fontSize: '9rem' }} />
        <h1 className='py-5 text-2xl font-semibold'>{userName}</h1>
        <p>{email}</p>
        <Button variant='contained' onClick={handleLogout} sx={{ margin: '2rem 0rem' }}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default UserProfile