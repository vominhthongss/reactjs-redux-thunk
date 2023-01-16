import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadPost from "./store/actions/post";

function App() {
  const data = useSelector((state) => state.post.data);
  const requesting = useSelector((state) => state.post.requesting);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPost());
  }, [dispatch]);
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
