import { auth } from "constants/ActionTypes";

const initialState = {
  isLoggedIn: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case auth.LOGIN_PENDING: {
      return state;
    }

    case auth.LOGIN_COMPLETED: {
      return state;
    }

    case auth.LOGIN_FAILED: {
      return state;
    }

    case auth.LOGOUT: {
      return state;
    }

    default:
      return state;
  }
}
