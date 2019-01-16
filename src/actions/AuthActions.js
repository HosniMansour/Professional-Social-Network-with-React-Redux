import axios from "axios";
import {URL} from "./types";
import {LOGOUT, LOGIN_ATTEMPT,LOGIN_FAILED,LOGIN_SUCCESS} from "./types";
import {REGISTER_ATTEMPT,REGISTER_FAILED,REGISTER_SUCCESS} from "./types";

import setAuthorizationToken from '../utils/setAuthorizationToken';

export function logout() {
    return dispatch => {
        localStorage.removeItem('app_token');
        localStorage.removeItem('user');
        setAuthorizationToken(false);
        dispatch({type:LOGOUT});
    }
}

// =========================== Register

export const registerUser = ({email1,prenom,nom,pays,titre,password1}) =>{
    return (dispatch) => {
        dispatch({type:REGISTER_ATTEMPT});
        let us = {
            nom:nom,
            prenom:prenom,
            email:email1,
            motDePasse:password1,
            titreProfil:titre,
            pays:pays,
            image_path:"assets/images/users/default_pic_user.jpg",
            role:0
        };
        axios.post(URL + "register", us)
            .then((response)=> {
                handleRegisterResponse(dispatch,response.data);
            })
            .catch((err)=>{
                onRegisterFailed(dispatch,err.response);
            });
    };
};

const handleRegisterResponse = (dispatch, data) =>{
    if(!data.data){
        onRegisterFailed(dispatch,data.message);
    }else{
        localStorage.setItem('app_token', data.data[0]);
        setAuthorizationToken(data.data[0]);
        localStorage.setItem('user', JSON.stringify(data.data[1]));
        onRegisterSuccess(dispatch,data);
    }
};

const onRegisterSuccess = (dispatch,user) =>{
    dispatch({type:REGISTER_SUCCESS, user});
};

const onRegisterFailed = (dispatch, errorMessage) =>{
    dispatch({type:REGISTER_FAILED, error:"Wrong Information !"});
};

// =========================== Login

export const loginUser = ({email,password}) =>{
	return (dispatch) => {
		dispatch({type:LOGIN_ATTEMPT});
        let us = {
            email:email,
            motDePasse:password,
        };
		axios.post(URL + "login", us)
			.then((response)=> {
				handleResponse(dispatch,response.data);
			})
			.catch((err)=>{
				onLoginFailed(dispatch,err);
			});
	};
};

const handleResponse = (dispatch, data) =>{

	if(!data.data){
		onLoginFailed(dispatch,data.message);
	}else{
        localStorage.setItem('app_token', data.data[0]);
        setAuthorizationToken(data.data[0]);
        localStorage.setItem('user', JSON.stringify(data.data[1]));
		onLoginSuccess(dispatch,data.user,data.token);
	}
};

const onLoginSuccess = (dispatch,user,token) =>{
	dispatch({type:LOGIN_SUCCESS, user, token});
};

const onLoginFailed = (dispatch, errorMessage) =>{
	dispatch({type:LOGIN_FAILED, error:"invalid email or password"});
};