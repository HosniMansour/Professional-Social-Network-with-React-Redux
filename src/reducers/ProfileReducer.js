import {FORMATION_ATTEMPT,COMPITION_ATTEMPT,SKILLS_ATTEMPT,PROFILE_ATTEMPT} from "../actions/types";

const INITIAL_STATE = {
    user: {},
    forma: [],
    xp: [],
    skills: [],
    loading:false
};

export default (state=INITIAL_STATE, action) => {
    switch (action.type){
        case PROFILE_ATTEMPT:{
            return{...state, loading:false, user:action.data};
        }
        case FORMATION_ATTEMPT:{
            return{...state, loading:false, forma:action.data};
        }
        case COMPITION_ATTEMPT:{
            return{...state, loading:false, xp:action.data};
        }
        case SKILLS_ATTEMPT:{
            return{...state, loading:false, skills:action.data};
        }
        default:
            return state;
    }
};