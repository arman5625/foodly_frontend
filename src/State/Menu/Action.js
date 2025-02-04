import {api} from "../../Config/api";
import { CREATE_MENU_ITEM_FAILURE, CREATE_MENU_ITEM_REQUEST, CREATE_MENU_ITEM_SUCCESS, DELTE_MENU_ITEM_FAILURE, DELTE_MENU_ITEM_REQUEST, DELTE_MENU_ITEM_SUCCESS, GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST, GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, SEARCH_MENU_ITEM_FAILURE, SEARCH_MENU_ITEM_REQUEST, SEARCH_MENU_ITEM_SUCCESS, UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE, UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST, UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS } from "./ActionTypes";

export const createMenuItem = ({menu, jwt}) => {
    return async (dispatch) => {
        dispatch({type:CREATE_MENU_ITEM_REQUEST});
        try {
            const {data} = await api.post("api/admin/food", menu,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                });
                console.log("created menu", data);
                dispatch({type:CREATE_MENU_ITEM_SUCCESS, payload:data});

        } catch (error) {
            console.log("catch error", error);
            dispatch({type:CREATE_MENU_ITEM_FAILURE, payload:error});
            
        }
    }
}

export const getMenuItemByRestaurantId = (reqData) => {
    return async (dispatch) => {
        dispatch({type:GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST});
        try {
            const {data} = await api.get(`api/food/restaurant/${reqData.restaurantId}?vegetarian=${reqData.vegetarian}
                &nonVeg=${reqData.nonveg}&seasonal=${reqData.seasonal}&food_category=${reqData.foodCategory}`,
                {
                    headers: {
                        Authorization: `Bearer ${reqData.jwt}`,
                    },
                });
                console.log(" menu by restaurant id", data);
                dispatch({type:GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, payload:data});

        } catch (error) {
            console.log("catch error", error);
            dispatch({type:GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, payload:error});
            
        }
    }
}

export const searchMenuItem = ({keyword, jwt}) => {
    return async (dispatch) => {
        dispatch({type:SEARCH_MENU_ITEM_REQUEST});
        try {
            const {data} = await api.get(`api/food/search?name=${keyword}`, {},
                {
                    headers: {
                        Authorization: `Beare ${jwt}`,
                    },
                });
                console.log("search menu", data);
                dispatch({type:SEARCH_MENU_ITEM_SUCCESS, payload:data});

        } catch (error) {
            console.log("catch error", error);
            dispatch({type:SEARCH_MENU_ITEM_FAILURE, payload:error});
            
        }
    }
} 


// export const getAllIngredientsOfMenuItem = (reqData) => {
//     return async (dispatch) => {
//         dispatch({type:GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST});
//         try {
//             const {data} = await api.get(`api/food/restaurant/${reqData.restaurantID}`,
//                 {},
//                 {
//                     headers: {
//                         Authorization: `Beare ${reqData.jwt}`,
//                     },
//                 });
//                 console.log("search menu", data);
//                 dispatch({type:GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, payload:data});

//         } catch (error) {
//             console.log("catch error", error);
//             dispatch({type:GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, payload:error});
            
//         }
//     }
// } 


export const updateMenuItemAvailability = ({foodId, jwt}) => {
    return async (dispatch) => {
        dispatch({type:UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST});
        try {
            const {data} = await api.put(`api/admin/food/${foodId}`,
                {},
                {
                    headers: {
                        Authorization: `Beare ${jwt}`,
                    },
                });
                console.log(" menu item availability", data);
                dispatch({type:UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS, payload:data});

        } catch (error) {
            console.log("catch error", error);
            dispatch({type:UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE, payload:error});
            
        }
    }
}

export const deleteFoodAction = ({foodId, jwt}) => {
    return async (dispatch) => {
        dispatch({type:DELTE_MENU_ITEM_REQUEST});
        try {
            const {data} = await api.delete(`api/admin/food/${foodId}`,
                {
                    headers: {
                        Authorization: `Beare ${jwt}`,
                    },
                });
                console.log(" deleted food ", data);
                dispatch({type:DELTE_MENU_ITEM_SUCCESS, payload:foodId});

        } catch (error) {
            console.log("catch error", error);
            dispatch({type:DELTE_MENU_ITEM_FAILURE, payload:error});
            
        }
    }
}