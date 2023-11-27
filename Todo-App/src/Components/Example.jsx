import React from "react";
import { useTodo } from "../Context";

export default function Example() {
  const { todos } = useTodo();
  console.log("todos: ", todos);
  return (
    <div>
      {todos?.map((ele) => {
        return <h1>{ele.todo}</h1>;
      })}
    </div>
  );
}
