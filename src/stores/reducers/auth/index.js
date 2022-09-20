import { INITIAL_STATE } from "../../initial_states";

const AuthReducer = ( state  = INITIAL_STATE, action ) =>{
    switch(action.type){
        case 'AUTH_START':
        return { ...state, loading: true}
        case 'AUTH_ERROR':
          return{ ...state, loading: false, isAuthenticated: false}
        case ' REGISTER_USER':
            return{...state, loading: false, }
        case 'USER_LOGIN':
            return{...state, loadiing: false,
                user: action.payload,
                isAuthenticated: true}
        case 'LOGOUT':
            return {...state, loading: false, 
            isAuthenticated:false
            }
        case 'GET_USER_PROFILE':
            return{
                ...state, 
                user:action.payload,
                loading: false,
                isAuthenticated: true
            }

        default:
            return state
    }

}

export default AuthReducer