import { ReactNode, createContext, useReducer } from "react";

type TTodoProviderProps = {
  children: ReactNode;
};
export type TTodo = {
  id: string;
  title: string;
  isCompleted: boolean;
};

export type TAction = {
  type: string;
  payload: TTodo | string;
};
const initialState: TTodo[] = [];

const reducer = (currentState: TTodo[], action: TAction) => {
  switch (action.type) {
    case "addTodo":
      return [...currentState, action.payload];
    case "taskComplete":
      return currentState?.map((item) =>
        item.id === action.payload
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      );

    default:
      return currentState;
  }
};
export const ToDoContext = createContext<
  { state: TTodo[]; dispatch: React.Dispatch<TAction> } | undefined
>(undefined);
const ToDoProvider = ({ children }: TTodoProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const values = {
    state,
    dispatch,
  };
  return <ToDoContext.Provider value={values}>{children}</ToDoContext.Provider>;
};

export default ToDoProvider;
