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
  type: "addToDo" | "taskCompleted";
  payload: TTodo | string;
};

const typeConstants = {
  ADD_TODO: "addToDo",
  TASK_COMPLETE: "taskCompleted",
};
const initialState: TTodo[] = [];

const reducer = (currentState: TTodo[], action: TAction) => {
  switch (action.type) {
    case typeConstants.ADD_TODO:
      return [...currentState, action.payload];
    case typeConstants.TASK_COMPLETE:
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
