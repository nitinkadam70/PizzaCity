import axios from 'axios';

//action type
export const GET_DISHES_LOADING = 'GET_DISHES_LOADING';
export const GET_DISHES_SUCCESS = 'GET_DISHES_SUCCESS';
export const GET_DISHES_ERROR = 'GET_DISHES_ERROR';

//actions

export const getDishloading = () => ({
  type: GET_DISHES_LOADING,
});
export const getDishSuccess = (payload) => ({
  type: GET_DISHES_SUCCESS,
  payload,
});
export const getDishError = () => ({
  type: GET_DISHES_ERROR,
});

//Fetching Data
export const getDishes = (payload) => (dispatch) => {
  let userid = localStorage.getItem('userid');
  dispatch(getDishloading());
  axios({
    method: 'GET',
    url: process.env.REACT_APP_API_URL,
    params: { ...payload },
  })
    .then((res) => {
      dispatch(getDishSuccess(res.data));
    })
    .catch((err) => dispatch(getDishError()));
};
