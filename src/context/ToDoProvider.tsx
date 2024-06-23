import { ReactNode, createContext } from "react";

type TTodoProviderProps = {
  children: ReactNode;
};
export const ToDoContext = createContext(undefined);
const ToDoProvider = ({ children }: TTodoProviderProps) => {
  const values = {
    todoTitle: "This is todo title",
  };
  return <ToDoContext.Provider value={values}>{children}</ToDoContext.Provider>;
};

export default ToDoProvider;
