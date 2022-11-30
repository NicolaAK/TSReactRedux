import React from "react";
import { useAction } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const TodoList = () => {
  const { error, limit, loading, page, todos } = useTypedSelector(
    (state) => state.todos
  );
  const { fetchTodos } = useAction();
  if (loading) {
    return <h1>Идёт загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id} - {todo.name}
        </div>
      ))}
    </div>
  );
};
export default TodoList;
