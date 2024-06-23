import "./App.css";
// import ComponentWithClass from "./Components/ComponentWithClass";
// import ComponentWithFunction from "./Components/ComponentWithFunction";
import TodoForm from "./Components/Todo/TodoForm";
import TodoList from "./Components/Todo/TodoList";
// import UserInfoWithUseReducer from "./Components/UserInfoWithUseReducer";
// import UserInfoWithUseState from "./Components/UserInfoWithUseState";
import ToDoProvider from "./context/ToDoProvider";

function App() {
  return (
    <ToDoProvider>
      <div>
        <h1>React TS App</h1>

        <TodoForm />
        <TodoList />
        {/* <UserInfoWithUseReducer /> */}
        {/* <UserInfoWithUseState /> */}
        {/* function
      <ComponentWithFunction />
      class
      <ComponentWithClass /> */}
      </div>
    </ToDoProvider>
  );
}

export default App;
