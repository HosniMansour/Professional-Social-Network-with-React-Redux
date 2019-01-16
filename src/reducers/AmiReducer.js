import {SHOWAMI_ATTEMPT1,SHOWAMI_ATTEMPT2,REMOVEAMI_ATTEMPT} from "../actions/types";

const INITIAL_STATE = {
    ami1: [],
    ami2: [],
    loading:false
};

export default (state=INITIAL_STATE, action) => {
    switch (action.type){
        case SHOWAMI_ATTEMPT1:{
            return{...state, loading:false, ami1:action.data};
        }
        case SHOWAMI_ATTEMPT2:{
            return{...state, loading:false, ami2:action.data};
        }
        case REMOVEAMI_ATTEMPT:{
            let a1 = state.ami1;
            let a2 = state.ami2;
            let index = a1.map(x => {
                return x.id;
            }).indexOf(action.data);
            a1.splice(index, 1);

            /*index = a2.map(x => {
                return x.id;
            }).indexOf(action.data);
            a2.splice(index, 1);*/


            return{...state, loading:false,ami1:a1,ami2:a2};
        }
        default:
            return state;
    }
};