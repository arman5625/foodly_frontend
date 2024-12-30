import {api} from '../../../component/Config';
import { CREATE_INGREDIENT_FAILURE, CREATE_INGREDIENT_REQUEST, CREATE_INGREDIENT_SUCCESS, GET_INGREDIENTS } from './ActionTypes';

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

            console.log("create all ingredients", data);
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

