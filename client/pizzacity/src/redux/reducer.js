import {
  GET_DISHES_ERROR,
  GET_DISHES_LOADING,
  GET_DISHES_SUCCESS,
} from './action';

const initState = {
  loading: false,
  dishes: [],
  error: false,
};

export const dishesReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_DISHES_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_DISHES_SUCCESS:
      return {
        ...state,
        loading: false,
        dishes: action.payload,
      };
    case GET_DISHES_ERROR:
      return {
        ...state,
        loading: false,
        dishes: [],
        error: true,
      };
    default:
      return state;
  }
};
