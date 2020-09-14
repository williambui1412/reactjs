import productApi from "../api/productApi"
import { GET_HERO_LIST, GET_HERO_LIST_SUCCESS, GET_HERO_LIST_FAILED } from "./actionType";
export const getPostReduxthunk = () => {
    return async (dispatch) => {
        dispatch({ type: GET_HERO_LIST });

        try {
            //throw new Error('It\'s me, it works :P');

            // Call API to get a list of posts
            const response = await productApi.getAll({ _limit: 10 });
            console.log(response.data, response.pagination);

            dispatch({
                type: GET_HERO_LIST_SUCCESS,
                payload: response,
            });
        } catch (error) {
            console.log('Failed to fetch product list: ', error.message);
            dispatch({
                type: GET_HERO_LIST_FAILED,
                payload: error.message,
            });
        }
    };
}
