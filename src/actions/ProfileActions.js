import axios from "axios";
import setAuthorizationToken from '../utils/setAuthorizationToken';

import {URL,FORMATION_ATTEMPT,COMPITION_ATTEMPT,SKILLS_ATTEMPT,PROFILE_ATTEMPT} from "./types";

export const GetUser = (id) =>{
    let token = localStorage.getItem("app_token");
    setAuthorizationToken(token);

    return (dispatch) => {
        axios.get(URL + "api/utilisateur/"+id)
            .then((response)=> {
                dispatch({type:PROFILE_ATTEMPT, data:response.data});
            })
            .catch((err)=>{
                console.log(err);
            });
    };
};

export const GetFormation = (id) =>{
    let token = localStorage.getItem("app_token");
    setAuthorizationToken(token);

    return (dispatch) => {
        axios.get(URL + "api/formation/get/"+id)
            .then((response)=> {
                dispatch({type:FORMATION_ATTEMPT, data:response.data});
            })
            .catch((err)=>{
                console.log(err);
            });
    };
};

export const GetExperience = (id) =>{
    let token = localStorage.getItem("app_token");
    setAuthorizationToken(token);

    return (dispatch) => {
        axios.get(URL + "api/experience/get/"+id)
            .then((response)=> {
                dispatch({type:COMPITION_ATTEMPT, data:response.data});
            })
            .catch((err)=>{
                console.log(err);
            });
    };
};

export const GetSkills = (id) =>{
    let token = localStorage.getItem("app_token");
    setAuthorizationToken(token);

    return (dispatch) => {
        axios.get(URL + "api/competence/get/"+id)
            .then((response)=> {
                dispatch({type:SKILLS_ATTEMPT, data:response.data});
            })
            .catch((err)=>{
                console.log(err);
            });
    };
};
