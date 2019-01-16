import axios from "axios";
import setAuthorizationToken from '../utils/setAuthorizationToken';

import {URL,STATS_ATTEMPT,ADDSTATS_ATTEMPT,ADDCMT_ATTEMPT,SHOWSTATS_ATTEMPT} from "./types";

export const Showstats = () =>{
    let token = localStorage.getItem("app_token");
    setAuthorizationToken(token);
    return (dispatch) => {
        axios.get(URL + "api/publication/")
            .then((response)=> {
                dispatch({type:STATS_ATTEMPT, data:response.data});
            })
            .catch((err)=>{
                console.log(err);
            });
    };
};


export const Addstats = ({content}) =>{
    let token = localStorage.getItem("app_token");
    setAuthorizationToken(token);
    let post = {
        id:Math.floor(Math.random() * 100) + 1,
        contenu:content,
        date: new Date(),
        fichier: 'fichier',
        utilisateur: JSON.parse(localStorage.getItem('user'))
    };
    return (dispatch) => {
        axios.post(URL + "api/publication/add",post)
            .then((response)=> {
                dispatch({type:ADDSTATS_ATTEMPT, data:response.data});
            })
            .catch((err)=>{
                console.log(err);
            });
    };
};

export const ShowCmt = () =>{
    let token = localStorage.getItem("app_token");
    setAuthorizationToken(token);
    return (dispatch) => {
        axios.get(URL + "api/commentaire/")
            .then((response)=> {
                dispatch({type:SHOWSTATS_ATTEMPT, data:response.data});
            })
            .catch((err)=>{
                console.log(err);
            });
    };
};

export const Addcmt = ({cmtcontent,idpub}) =>{
    let token = localStorage.getItem("app_token");
    setAuthorizationToken(token);
    let cmt = {
        id:Math.floor(Math.random() * 100) + 1,
        contenu:cmtcontent,
        date: new Date(),
        utilisateur: JSON.parse(localStorage.getItem('user')),
        publication:idpub
    };
    return (dispatch) => {
        axios.post(URL + "api/commentaire/add/",cmt)
            .then((response)=> {
                dispatch({type:ADDCMT_ATTEMPT, data:response.data});
            })
            .catch((err)=>{
                console.log(err);
            });
    };
};