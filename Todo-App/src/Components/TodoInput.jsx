import React, { useState } from "react";
import { useTodo } from "../Context";

export default function TodoInput() {
  const [todo, setTodo] = useState("");

  const { addTodo } = useTodo();

  const handleTodo = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });

    setTodo("");
  };
  return (
    <div className=" m-auto ">
      <form action="" onSubmit={handleTodo}>
        <input
          value={todo}
          type="text"
          placeholder="Add todo"
          onChange={(e) => setTodo(e.target.value)}
          className="rounded-md px-10 py-2 text-black w-4/5"
        />
        <button
          type="submit"
          className="rounded-md  text-gray-50 border ml-2 px-5 py-2">
          Add
        </button>
      </form>
    </div>
  );
}
