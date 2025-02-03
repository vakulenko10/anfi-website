import { RootState } from '@/store';
import { UserState } from '@/store/slices/AuthSlice';
import React from 'react'
import { useSelector } from 'react-redux';

const Dashboard = () => {
    const userState = useSelector((state:RootState)=>state.user);
    const userS : UserState = userState;
    const user = userS.user;
  return (
    <div>
        <h5>{user.username}</h5>
        <h5>{user.isAuthenticated?'authenticated successfully':''}</h5>
        <h5>{user.isAdmin?'you are allowed to manage this website data because you are an admin':''}</h5>
    </div>
  )
}

export default Dashboard