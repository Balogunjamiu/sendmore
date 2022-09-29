import { INITIAL_STATE } from "../../initial_states";
import { AUTH_START,LOG_OUT, GET_USER_PROFILE, LOGIN_USER, REGISTER_USER, AUTH_ERROR, UPDATE_USER_PROFILE } from "../../actions/actionsType";
const AuthReducer = (state = INITIAL_STATE, action ) =>{
    switch(action.type){
        case AUTH_START:
        return { ...state, loading: true};
        case AUTH_ERROR:
          return { ...state, loading: false, isAuthenticated: false};
        case REGISTER_USER:
            return {...state, loading: false};
        case LOGIN_USER:
            return {...state, loading: false,
                isAuthenticated:true};
        case LOG_OUT:
            return {...state, loading: false, 
            isAuthenticated:false
            }
        case UPDATE_USER_PROFILE:
            return{
                ...state, loading: false,
                user: action.payload,
                isAuthenticated: true
            }
        case GET_USER_PROFILE:
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