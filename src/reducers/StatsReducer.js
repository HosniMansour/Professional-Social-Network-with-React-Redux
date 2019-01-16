import {STATS_ATTEMPT,ADDSTATS_ATTEMPT,ADDCMT_ATTEMPT,SHOWSTATS_ATTEMPT} from "../actions/types";

const INITIAL_STATE = {
    data: [],
    cmts: [],
    loading:false
};

export default (state=INITIAL_STATE, action) => {
    switch (action.type){
        case STATS_ATTEMPT:{
            return{...state, loading:false, data:action.data};
        }
        case ADDSTATS_ATTEMPT:{
            let ar = state.data;
            ar.unshift(action.data);
            return{...state, loading:false,data:ar};
        }
        case SHOWSTATS_ATTEMPT:{
            return{...state, loading:false, cmts:action.data};
        }
        case ADDCMT_ATTEMPT:{
            let ar = state.cmts;
            ar.push(action.data);
            return{...state, loading:false,cmts:ar};
        }
        default:
            return state;
    }
};