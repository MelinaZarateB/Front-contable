import {
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  CHECK_EMAIL,
} from "./action-types";
import axios from "axios";

export const signUp = (newUser) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/auth/register`,
        newUser
      );
      console.log("try", response);
      if (response) {
        dispatch({
          type: SIGN_UP_SUCCESS,
          payload: true,
        });
      }
    } catch (error) {
      const message = error.response && error.response.data.message;
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

export const login = (user) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/auth/login`,
        user
      );
      console.log('try', response)
      if (response) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: true,
        });
      }
    } catch (error) {
      const message = error.response && error.response.data.message;
      error.response && error.response.data.message
        ? error.response.data.message
        : "Ocurrio un error inesperado";
        console.log('catch', message)
      dispatch({
        type: LOGIN_FAILURE,
        payload: message,
      });
    }
  };
};

export const checkEmail = () => {};

export const restorePassword = (email) => {
  console.log(email);
  return async () => {
    try {
      const response = axios.post(
        `http://localhost:3000/auth/forgot-password`,
        email
      );
      console.log('try', response)
    } catch (error) {
        const message = error.response && error.response.data.message;
        error.response && error.response.data.message
          ? error.response.data.message
          : "Ocurrio un error inesperado";
          console.log('catch', message)

    }
  };
};
