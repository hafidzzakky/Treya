import {
    GET_DATA_FROM_HOME_LOADING,
    GET_DATA_FROM_HOME_SUCCESS
} from './type';


export const sendData = (data) => {
    return(dispatch) => {
        dispatch({ type: GET_DATA_FROM_HOME_LOADING });
        dispatch({ type: GET_DATA_FROM_HOME_SUCCESS, payload: data });
    };
};