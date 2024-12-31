import {api} from '../../../Config';
import { CREATE_INGREDIENT_FAILURE, CREATE_INGREDIENT_REQUEST, CREATE_INGREDIENT_SUCCESS, GET_INGREDIENT_CATEGORY_FAILURE, GET_INGREDIENT_CATEGORY_SUCCESS, GET_INGREDIENTS, UPDATE_STOCK } from './ActionTypes';

export const getIngredientsOfRestaurant = ({ id, jwt }) => {
    return async (dispatch) => {
        try {
            const response = await api.get(
                `/api/admin/ingredients/restaurant/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );

            console.log("get all ingredients", response.data);
            dispatch({
                type:GET_INGREDIENTS, 
                payload: response.data
            })

        } catch (error) {
            console.log("catch error", error);

        }
    }
}

export const createIngredient = ({ data, jwt }) => {
    return async (dispatch) => {
        dispatch({type:CREATE_INGREDIENT_REQUEST})
        try {
            const {data} = await api.post(
                `/api/admin/ingredients`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );

            console.log("create  ingredients", data);
            dispatch({
                type:CREATE_INGREDIENT_SUCCESS, 
                payload: data
            })

        } catch (error) {
            console.log("catch error", error);
            dispatch({type:CREATE_INGREDIENT_FAILURE, payload: error})

        }
    }
}

export const getIngredientCategory = ({id, jwt}) => {
    return async (dispatch) => {
        try {
            const {data} = await api.get(
                `/api/admin/ingredients/restaurants/${id}/category`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );
            console.log("get ingredients category", data);
            dispatch({
                type: GET_INGREDIENT_CATEGORY_SUCCESS, 
                payload:data
            });

        }catch (error) {
           console.log("catch error",error);
           dispatch({type: GET_INGREDIENT_CATEGORY_FAILURE, payload: error})
        }
    } 
}

export const updateStockOfIngredient = ({id, jwt}) => {
    return async (dispatch) => {
        try {
            const {data} = await api.put(
                `/api/admin/ingredients/${id}/stock`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );
            console.log("update ingredients category", data);
            dispatch({
                type: UPDATE_STOCK, 
                payload:data
            });

        }catch (error) {
           console.log("catch error",error);
        }
    } 
}
