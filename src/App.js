import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadPost from "./store/actions/post";

function App() {
  /* Getting the data from the store. */
  const data = useSelector((state) => state.post.data);
  /* Getting the requesting state from the store. */
  const requesting = useSelector((state) => state.post.requesting);
  /* A hook that gives us access to the dispatch function. */
  const dispatch = useDispatch();
  /* A hook that is called after every render. */
  useEffect(() => {
    /* Dispatching an action. */
    dispatch(loadPost());
  }, [dispatch]);
  /* Checking if the data is requesting, if it is, it will display "Waiting...". If it is not requesting,
it will check if the data is empty or not. If it is not empty, it will display the data. If it is
empty, it will display "Data is empty". */
  return (
    <div>
      {requesting ? (
        <div>Waiting...</div>
      ) : data && data.length > 0 ? (
        <div>
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div>Data is empty</div>
      )}
    </div>
  );
}

export default App;
