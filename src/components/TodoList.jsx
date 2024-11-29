import { useContext, useEffect, useState } from "react";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import { getTodoList } from "../api/todo";
import { TodoContext } from "../App";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import './TodoList.css'

const TodoList = () => {

  const {dispatch} = useContext(TodoContext)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getTodoList().then((todos) => {
      dispatch({type: "INIT", payload: todos})
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    })
  }, []);

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      { 
        loading ? 
          <Spin indicator={<LoadingOutlined spin />} size="large" spinning={loading}/> 
          :
          <TodoGroup />}
      <TodoGenerator />
    </div>
  );
};

export default TodoList;
