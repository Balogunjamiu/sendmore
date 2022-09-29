import React, { useEffect } from 'react'
import { useAuth } from '../hooks/useAuth';
import { useNavigate , useLocation  } from "react-router-dom";
import { getToken, setLocationHistory } from '../utils/helpers';
import toast from 'react-hot-toast';


export default function ProtectedRoute({Children}) {
    const location = useLocation()
 const navigate = useNavigate()
 const {stateAuth,getProfile} = useAuth()

    const getUserProfile = ()=>{
        getProfile()        
    }

    useEffect(()=>{
        if(stateAuth.isAuthenticated){
            // setLocationHistory
             navigate('/dashboard', {replace:true})
        }else{
            setLocationHistory(location.pathname)
            navigate('/login', {replace:true})
            toast.success('Please login')
        }
        if(getToken() !== null){
            getUserProfile()
            return;
        }
    },[stateAuth.isAuthenticated])

  return <Children />
}