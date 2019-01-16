import {JOBS_ATTEMPT} from "../actions/types";

const INITIAL_STATE = {
    jobs: [],
    loading:false
};

export default (state=INITIAL_STATE, action) => {
    switch (action.type){
        case JOBS_ATTEMPT:{
            return{...state, loading:false, jobs:action.jobs};
        }
        default:
            return state;
    }
};