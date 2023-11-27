import { useEffect, useState } from "react";

import "./App.css";
import { TodoProvider } from "./Context";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import Example from "./Components/Example";
function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((pretodo) => [{ id: Date.now(), ...todo }, ...pretodo]);
  };
  const updatedTodo = (id, todo) => {
    setTodos((pretodo) =>
      pretodo.map((ele) => {
        return ele.id === id ? todo : ele;
      })
    );
  };
  const deleteTodo = (id) => {
    setTodos((pretodo) =>
      pretodo.filter((ele) => {
        return ele.id !== id;
      })
    );
  };
  const toggleComplete = (id) => {
    setTodos((pretodo) =>
      pretodo.map((ele) => {
        return ele.id === id ? { ...ele, completed: !ele.completed } : ele;
      })
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, toggleComplete, updatedTodo }}>
      <div className="border w-6/2 pb-10">
        <h1 className="text-3xl">MyTodo App</h1>
        <div className="mt-10 p-5  w-4/5 m-auto">
          <TodoInput />
        </div>

        <div className="flex flex-wrap gap-y-3  w-4/5 m-auto">
          {/*Loop and Add TodoItem here */}
          {todos.map((ele) => (
            <div key={ele.id} className="w-full ">
              <TodoList todo={ele} />
            </div>
          ))}
        </div>
      </div>
      {/* <Example /> */}
    </TodoProvider>
  );
}

export default App;
