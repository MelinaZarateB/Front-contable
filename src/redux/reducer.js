import { LOGIN_FAILURE, LOGIN_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_SUCCESS } from "./action-types";

let initialState = {
    signUpStatus: null,  
    signUpMessage: '',
    loginMessage: ''
};

const Reducer = (state = initialState, action) => {
    switch(action.type){
        case SIGN_UP_SUCCESS:
            return{
                ...state,
                signUpMessage: action.payload
            }
            case SIGN_UP_FAILURE:
                return{
                    ...state,
                    signUpMessage: action.payload
                }
                case LOGIN_SUCCESS:
                    return{
                        ...state,
                        loginMessage: action.payload
                    }
                    case LOGIN_FAILURE: 
                    return{
                        ...state,
                        loginMessage: action.payload
                    }
        default: return state;

    }
}
export default Reducer;
