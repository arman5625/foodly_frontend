import * as actionTypes from "./ActionTypes";

const initialState = {
    restaurants: [],
    userRestaurant:null,
    restaurant: null,
    loading: false,
    error: null,
    events:[],
    restaurantsEvents: [],
    categories: [],
}

const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_RESTAURANT_REQUEST:
        case actionTypes.GET_ALL_RESTAURANT_REQUEST:
        case actionTypes.DELETE_RESTAURANT_REQUEST:
        case actionTypes.UPDATE_RESTAURANT_REQUEST:
        case actionTypes.GET_RESTAURANT_BY_ID_REQUEST:
        case actionTypes.CREATE_CATEGORY_REQUEST:
        case actionTypes.GET_RESTAURENT_CATEGORY_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
            
        default:
            return {...state}
    }

}