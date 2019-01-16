import axios from "axios";
import setAuthorizationToken from '../utils/setAuthorizationToken';

import {URL,SHOWAMI_ATTEMPT1,SHOWAMI_ATTEMPT2,REMOVEAMI_ATTEMPT} from "./types";

export const Showami1 = (id) =>{
    let token = localStorage.getItem("app_token");
    setAuthorizationToken(token);
    let user = JSON.parse(localStorage.getItem('user'));
    return (dispatch) => {
        axios.get(URL + "api/connexion/List_amis/"+user.id)
            .then((response)=> {
                dispatch({type:SHOWAMI_ATTEMPT1, data:response.data});
            })
            .catch((err)=>{
                console.log(err);
            });
    };
};

export const Showami2 = () =>{
    let token = localStorage.getItem("app_token");
    setAuthorizationToken(token);
    let user = JSON.parse(localStorage.getItem('user'));
    return (dispatch) => {
        axios.get(URL + "api/connexion/List_amis2/"+user.id)
            .then((response)=> {
                dispatch({type:SHOWAMI_ATTEMPT2, data:response.data});
            })
            .catch((err)=>{
                console.log(err);
            });
    };
};

export const RemoveAmi = (id) =>{
    let token = localStorage.getItem("app_token");
    setAuthorizationToken(token);

    return (dispatch) => {
        axios.delete(URL + "api/connexion/delete/"+id)
            .then((response)=> {
                dispatch({type:REMOVEAMI_ATTEMPT, data:id});
            })
            .catch((err)=>{
                console.log(err);
            });
    };
};


