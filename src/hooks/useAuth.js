import {
    logoutUser as logout,
    loginUser as login,
    registerUser as register,
    updateUserProfile as update,
    getProfile as profile
} from '../stores/actions/auth'

import {useDispatch, useSelector} from 'react-redux'

export const useAuth = () =>{
    const dispatch = useDispatch()
    const stateAuth = useSelector((state)=> state.auth)



    const logUserOut = () => dispatch(logout())
    const logUserIn = (values) => dispatch(login(values))
    const registerUsers = (values) => dispatch(register(values))
    const UpdateUser = (values) => dispatch(update(values))
    const getProfile = () => dispatch(profile())
    return{
        stateAuth,
        logUserIn,
        logUserOut,
        registerUsers,
        UpdateUser,
        getProfile
    }
}