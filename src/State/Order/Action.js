import api from "../../Config";
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_USERS_ORDER_FAILURE, GET_USERS_ORDER_REQUEST, GET_USERS_ORDER_SUCCESS } from "./ActionTypes";

export const createOrder = (reqData) => {
    return async (dispatch) => {
        dispatch({type:CREATE_ORDER_REQUEST});
        try {
            const {data} = await api.post("api/order", reqData.order,
                {
                    headers: {
                        Authorization: `Beare ${reqData.jwt}`,
                    },
                });
                if(data.payment_url){
                    window.location.href = data.payment_url;
                }
                console.log("created order data", data);
                dispatch({type:CREATE_ORDER_SUCCESS, payload:data});

        } catch (error) {
            console.log("catch error", error);
            dispatch({type:CREATE_ORDER_FAILURE, payload:error});
            
        }
    }
}

export const getUsersOrder = (jwt) => {
    return async (dispatch) => {
        dispatch({type:GET_USERS_ORDER_REQUEST});
        try {
            const {data} = await api.get("api/order",
                {},
                {
                    headers: {
                        Authorization: `Beare ${jwt}`,
                    },
                });
                console.log("order data", data);
                dispatch({type:GET_USERS_ORDER_SUCCESS, payload:data});

        } catch (error) {
            console.log("catch error", error);
            dispatch({type:GET_USERS_ORDER_FAILURE, payload:error});
            
        }
    }
}

