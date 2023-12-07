const INITIAL_STATE = {
    user: null,
    loading: false,
    error: null,
  };
  
  const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "LOGIN_START":
        return {
          ...state,
          loading: true,
        };
      case "LOGIN_SUCCESS":
        return {
          ...state,
          user: action.payload,
          loading: false,
        };
      case "LOGIN_FAILURE":
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      case "REGISTER_SUCCESS":
        return state;
      case "LOGOUT":
        return INITIAL_STATE;
      default:
        return state;
    }
  };
  
  export default authReducer;
  