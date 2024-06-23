import { ToDoContext } from "../../context/ToDoProvider";

const TodoForm = (props) => {
  const { todoTitle } = useContext(ToDoContext);
  return (
    <div>
      <h1>Todo From component</h1>
      <h2>context title is: {todoTitle}</h2>
    </div>
  );
};

TodoForm.propTypes = {};

export default TodoForm;
