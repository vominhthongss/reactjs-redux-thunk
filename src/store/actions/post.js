import {
  HEADERS,
  POSTERROR,
  POSTREQUEST,
  POSTSUCCESS,
  URLGETPOSTS,
} from "../constants/post";

/**
 * This function is an asynchronous function that takes a dispatch function as an argument and returns
 * a function that dispatches an action to the store.
 */
const loadPost = () => async (dispatch) => {
  try {
    dispatch({ type: POSTREQUEST });
    const url = URLGETPOSTS;
    const response = await fetch(url, {
      method: "GET",
      headers: HEADERS,
    });
    const responseBody = await response.json();
    dispatch({ type: POSTSUCCESS, data: responseBody });
  } catch (error) {
    dispatch({ type: POSTERROR, message: error });
  }
};
export default loadPost;
