const initialState = {
  requesting: false,
  success: false,
  message: null,
  data: null,
};
const postReducers = (state = initialState, action) => {
  switch (action.type) {
    case "POSTREQUEST":
      return { ...state, requesting: true };
    case "POSTSUCCESS":
      return {
        ...state,
        requesting: false,
        success: true,
        data: action.data,
      };
    case "POSTERROR":
      return { ...state, requesting: false, message: action.message };

    default:
      return state;
  }
};
export default postReducers;
