import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

const TodoList = () => {
  return (
    <>
      <h2>Todo List</h2>
      <TodoGroup />
      <TodoGenerator />
    </>
  );
};

export default TodoList;
