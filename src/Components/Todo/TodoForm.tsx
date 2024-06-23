import { FormEvent, useContext, useState } from "react";
import { ToDoContext } from "../../context/ToDoProvider";

const TodoForm = () => {
  const { state, dispatch } = useContext(ToDoContext);
  const [task, setTask] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const todo = {
      id: Math.random().toString(36).substring(2, 7),
      title: task,
      isCompleted: false,
    };
    dispatch({ type: "addTodo", payload: todo });
  };
  console.log(state);
  return (
    <div>
      <h1>Todo From</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="Todo">Task</label>
        <input
          type="text"
          name="todo"
          id="todo"
          onBlur={(e) => setTask(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

TodoForm.propTypes = {};

export default TodoForm;
