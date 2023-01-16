const loadPost = () => async (dispatch) => {
  try {
    dispatch({ type: "POSTREQUEST" });
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseBody = await response.json();
    dispatch({ type: "POSTSUCCESS", data: responseBody });
  } catch (error) {
    dispatch({ type: "POSTERROR", message: error });
  }
};
export default loadPost;
