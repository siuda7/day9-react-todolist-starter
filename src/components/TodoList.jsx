import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

const TodoList = () => {
  return (
    <>
      <div>This is the TodoList Component.</div>
      <TodoGroup />
      <TodoGenerator />
    </>
  );
};

export default TodoList;
