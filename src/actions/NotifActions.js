import axios from "axios";
import setAuthorizationToken from '../utils/setAuthorizationToken';

import {URL,NOTIF_ATTEMPT} from "./types";

export const ShowNotif = () =>{
    let token = localStorage.getItem("app_token");
    setAuthorizationToken(token);
    let user = JSON.parse(localStorage.getItem('user'));
    return (dispatch) => {
        axios.get(URL + "api/notification/user/"+user.id)
            .then((response)=> {
                dispatch({type:NOTIF_ATTEMPT, data:response.data});
            })
            .catch((err)=>{
                console.log(err);
            });
    };
};