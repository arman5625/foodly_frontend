import * as actionTypes from "./ActionTypes";

const initialState = {
    loading: false,
    error: null,
    orders:[],
    notifications: null,
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_USERS_ORDER_REQUEST:
            return { ...state, error: null, loading: true };
        case actionTypes.GET_USERS_ORDER_SUCCESS:
            return { ...state, error: null, loading: false, orders: action.payload };
        case actionTypes.GET_USERS_ORDER_FAILURE:
            return { ...state, error: payload, loading: false };
     
        default:
            return state;
    }

}

export default orderReducer;