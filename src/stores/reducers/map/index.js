import { MAP_INITIAL_STATE } from "../../initial_states";



const MapReducer = (state = MAP_INITIAL_STATE, action)=>{
    switch(action.type){
        case ' SET_LOCATION':
            return{...state}


        default:
            return state
    }
}

export default MapReducer