import { POSTERROR, POSTREQUEST, POSTSUCCESS } from "../constants/post";

/* Setting the initial state of the reducer. */
const initialState = {
  requesting: false,
  success: false,
  message: null,
  data: null,
};
/**
 * It takes in a state and an action and returns a new state.
 * @param [state] - This is the current state of the store.
 * @param action - {
 * @returns The state is being returned.
 */
const postReducers = (state = initialState, action) => {
  switch (action.type) {
    case POSTREQUEST:
      return { ...state, requesting: true };
    case POSTSUCCESS:
      return {
        ...state,
        requesting: false,
        success: true,
        data: action.data,
      };
    case POSTERROR:
      return { ...state, requesting: false, message: action.message };

    default:
      return state;
  }
};
export default postReducers;
