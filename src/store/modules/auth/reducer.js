import * as types from "../types";

const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    // case types.LOGIN_SUCCESS: {
    //   console.log("Sucesso");
    //   const newState = { ...state };
    //   newState.botaoClicado = !newState.botaoClicado;
    //   return newState;
    // }
    // case types.LOGIN_FAILURE: {
    //   console.log("estou retornando uma falha");
    //   return state;
    // }
    case types.LOGIN_REQUEST: {
      console.log("REDUCER", action.payload);
      return state;
    }

    default: {
      return state;
    }
  }
}
