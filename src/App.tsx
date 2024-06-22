import "./App.css";
import ComponentWithClass from "./Components/ComponentWithClass";
import ComponentWithFunction from "./Components/ComponentWithFunction";

function App() {
  return (
    <div>
      <h1>React TS App</h1>
      function
      <ComponentWithFunction />
      class
      <ComponentWithClass />
    </div>
  );
}

export default App;
