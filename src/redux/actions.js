import {
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from "./action-types";
import axios from "axios";

export const signUp = (newUser) => {

  return async (dispatch) => {
    try {
      axios.post(`http://localhost:3000/auth/register`, newUser);
      dispatch({
        type: SIGN_UP_SUCCESS,
        payload: true
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : "Ocurrio un error inesperado";
      dispatch({
        type: SIGN_UP_FAILURE,
        payload: message,
      });
    }
  };
};
