import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
  todos: [],
  addTodo: (todo, id) => {},
  updatedTodo: (todo, id) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
console.log(TodoProvider);
