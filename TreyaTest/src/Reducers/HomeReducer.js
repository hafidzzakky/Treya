import { 
    GET_DATA_FROM_HOME_SUCCESS,
    GET_DATA_FROM_HOME_LOADING
 } from '../Actions/type';

const INITIAL_STATE = {
    data: null,
    error: '',
    loading: false,
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_DATA_FROM_HOME_LOADING:
            return { ...state, error: '', loading: true};
        case GET_DATA_FROM_HOME_SUCCESS:
            return { ...state, ...INITIAL_STATE, data: action.payload, loading: false};
        default:
            return state;
    }
};