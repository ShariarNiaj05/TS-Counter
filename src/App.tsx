import "./App.css";
import ComponentWithClass from "./Components/ComponentWithClass";
import ComponentWithFunction from "./Components/ComponentWithFunction";
import UserInfoWithUseState from "./Components/UserInfoWithUseState";

function App() {
  return (
    <div>
      <h1>React TS App</h1>

      <UserInfoWithUseState />
      {/* function
      <ComponentWithFunction />
      class
      <ComponentWithClass /> */}
    </div>
  );
}

export default App;
