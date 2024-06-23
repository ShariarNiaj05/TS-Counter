import { useContext } from "react";
import { TTodo, ToDoContext } from "../../context/ToDoProvider";

const TodoList = () => {
  const { state, dispatch } = useContext(ToDoContext);

  return (
    <div>
      {state?.map((item: TTodo) => (
        <p onClick={() => dispatch({ type: "taskComplete", payload: item.id })}>
          {item.title}{" "}
        </p>
      ))}
    </div>
  );
};

export default TodoList;
