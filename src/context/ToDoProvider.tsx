import { ReactNode, createContext, useReducer } from "react";

type TTodoProviderProps = {
  children: ReactNode;
};
type TTodo = {
  id: string;
  title: string;
  isCompleted: boolean;
};

const initialState: TTodo[] = [];

const reducer = (currentState, action) => {
  switch (action.type) {
    case "addTodo":
      return;

    default:
      return initialState;
  }
};
export const ToDoContext = createContext(undefined);
const ToDoProvider = ({ children }: TTodoProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const values = {
    todoTitle: "This is todo title",
  };
  return <ToDoContext.Provider value={values}>{children}</ToDoContext.Provider>;
};

export default ToDoProvider;
