import { profile,
     login,
     register,
      logout,
     updateProfile } from "../../../services/auth";
      import toast from "react-hot-toast";
      import { AUTH_START,
          GET_USER_PROFILE,
          LOGIN_USER,
          LOG_OUT,
           REGISTER_USER,
            AUTH_ERROR,
             UPDATE_USER_PROFILE } from '../actionsType'
import { clearToken, setAccessToken } from "../../../utils/helpers";

export const registerUser = async (values) => async (dispatch) =>{
     try{
           dispatch({ type : AUTH_START});
          const res = await register(values);
          console.log(res)
          dispatch({type:REGISTER_USER});
          toast.success(res?.message)
          window.open('/login','_self')
     }catch(err){
          dispatch({ type: AUTH_ERROR });
          
          Object.keys(err?.response?.data?.error).map(error =>  toast.error(err?.response?.data?.error[error][0]))
     }
}
export const loginUser = async (values) => async (dispatch)=>{
     try{
          dispatch({type:AUTH_START});
          const res = await login(values);
          // console.log(res)
          dispatch({type:LOGIN_USER});
          if(res?.token){
               toast.success('Login Successful')
               setAccessToken(res?.token)
               window.open('/dashboard', '_self')
          }
     }catch(err){
          throw err
          //console.log(err)
//           dispatch({ type: AUTH_ERROR });
//     console.log(err?.response?.data?.verified);
//     toast.error(
//       err?.response?.data?.error?.username[0] ?? err?.response?.data?.message,
//     );
    
     }
}
export const getProfile = async ()=> async(dispatch)=>{

     try{
          dispatch({ type: AUTH_START });
          const res = await profile()
          dispatch({type:GET_USER_PROFILE, payload: res?.data})
     }catch(err){
          throw err
          // dispatch({ type: AUTH_ERROR });
          // Object.keys(err?.response?.data?.error).map(error =>  toast.error(err?.response?.data?.error[error][0]))
     }
}
export const updateUserProfile = async(values)=> async(dispatch)=>{
     try{
          dispatch({ type: AUTH_START})
          const res = await updateProfile(values)
          dispatch({type:UPDATE_USER_PROFILE, payload: res?.data})
     }catch(e){
          dispatch({ type: AUTH_ERROR });
     }
}

export const logoutUser = async () => async(dispatch)=>{
     await logout()
     dispatch({type:LOG_OUT})
     clearToken()
     window.open('/login','_self')
}