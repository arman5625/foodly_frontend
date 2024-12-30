import { ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_REQUEST, LOGOUT, REGISTER_FAILURE, LOGIN_FAILURE, GET_USER_FAILURE, ADD_TO_FAVORITE_FAILURE, REGISTER_SUCCESS } from "./ActionType";
import { api } from "../../Config/api";

export const registerUser = (reqData) => async(dispatch) => {
    dispatch({type:REGISTER_REQUEST})
    try{
        const {data} = await api.post(`/auth/signup`,reqData.userData)
        if(data.jwt)localStorage.setItem("jwt", data.jwt);
        if(data.role === "ROLE_RESTAURANT_OWNER"){
            reqData.navigate("/admin/restaurant")
        }
        else{
            reqData.navigate("/")
        }
        dispatch({type:REGISTER_SUCCESS,payload:data.jwt})
        console.log("register success",data)

    } catch (error){
        dispatch({type:REGISTER_FAILURE, payload: error})
        console.log("error", error);

    }
}

export const loginUser = (reqData) => async(dispatch) => {
    dispatch({type:LOGIN_REQUEST})
    try{
        const {data} = await api.post(`/auth/signin`,reqData.userData)
        if(data.jwt)localStorage.setItem("jwt", data.jwt);
        if(data.role === "ROLE_RESTAURANT_OWNER"){
            reqData.navigate("/admin/restaurant")
        }
        else{
            reqData.navigate("/")
        }
        dispatch({type:LOGIN_SUCCESS,payload:data.jwt})
        console.log("Login success",data)

    } catch (error){
        dispatch({type:LOGIN_FAILURE, payload:error})
        console.log("error", error);

    }
}

export const getUser = (jwt) => async(dispatch) => {
    dispatch({type:GET_USER_REQUEST})
    try{
        const {data} = await api.get(`/api/users/profile`,{
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
        })

        dispatch({type:GET_USER_SUCCESS,payload:data, jwt:jwt})
        console.log("user profile",data)

    } catch (error){
        dispatch({type:GET_USER_FAILURE, payload:error})
        console.log("error", error);

    }
}

export const addToFavorite=({jwt, restaurantId})=>async(dispatch)=>{
    dispatch({type:ADD_TO_FAVORITE_REQUEST})
    try {
        const {data} = await api.post(`/api/restaurants/${restaurantId}/add-favorite`,{},{
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })

        dispatch({type:ADD_TO_FAVORITE_SUCCESS,payload:data.jwt})
        console.log("add to favorite", data);
    } catch (error) {
        dispatch({type:ADD_TO_FAVORITE_FAILURE, payload: error})
        console.log("error", error);
        
    }

}

export const logout=(jwt)=>async(dispatch)=>{
    try {
        dispatch({type:LOGOUT})
        const {data} = await api.post(`/auth/logout`,{},{
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        localStorage.removeItem("jwt");
        console.log("Logout successfull", data);
    } catch (error) {
        console.log("error", error);
        
    }

}