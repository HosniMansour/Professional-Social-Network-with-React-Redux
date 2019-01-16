import {NOTIF_ATTEMPT} from "../actions/types";

const INITIAL_STATE = {
    notif:[],
    loading:false
};

export default (state=INITIAL_STATE, action) => {
    switch (action.type){
        case NOTIF_ATTEMPT:{
            return{...state, loading:false, notif:action.data};
        }
        default:
            return state;
    }
};