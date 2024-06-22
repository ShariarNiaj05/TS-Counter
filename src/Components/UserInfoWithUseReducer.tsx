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
        name: action.payload,
      };
    case "addAge":
      return {
        ...currentState,
        age: action.payload,
      };
    case "addHobbies":
      return {
        ...currentState,
        hobbies: [...currentState.hobbies, action.payload],
      };

    default:
      currentState;
  }
};

const UserInfoWithUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => dispatch({ type: "addName", payload: e.target.value })}
        type="text"
        className=""
        name="name"
        id="name"
        placeholder="Name"
      />

      <input
        onChange={(e) => dispatch({ type: "addAge", payload: e.target.value })}
        type="text"
        className=""
        name="age"
        id="age"
        placeholder="Age"
      />

      <input
        onBlur={(e) =>
          dispatch({ type: "addHobbies", payload: e.target.value })
        }
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
