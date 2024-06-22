import { useReducer } from "react";

const initialState = {
  name: "",
  age: "",
  hobbies: [],
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case "addName":
      return {
        ...currentState,
        name: " next level",
      };

    default:
      break;
  }
};

const UserInfoWithUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <form>
      <input
        onChange={(e) => dispatch({ type: "addName" })}
        type="text"
        className=""
        name="name"
        id="name"
        placeholder="Name"
      />

      <input type="text" className="" name="age" id="age" placeholder="Age" />

      <input
        type="text"
        className=""
        name="hobbies"
        id="hobbies"
        placeholder="Hobbies"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserInfoWithUseReducer;
