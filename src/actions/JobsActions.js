import axios from "axios";
import setAuthorizationToken from '../utils/setAuthorizationToken';

import {URL,JOBS_ATTEMPT} from "./types";

export const ShowJobs = () =>{
    let token = localStorage.getItem("app_token");
    setAuthorizationToken(token);

    return (dispatch) => {
        axios.get(URL + "api/offreEmploi/1")
            .then((response)=> {
                dispatch({type:JOBS_ATTEMPT, jobs:response.data});
            })
            .catch((err)=>{
                console.log(err);
            });
    };
};

