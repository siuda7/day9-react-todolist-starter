import { useContext } from "react"
import { TodoContext } from "../App"
import TodoItem from "./TodoItem"
import './TodoGroup.css'

const TodoGroup = () => {

    const { state: todoList } = useContext(TodoContext)

    return (
        <div className="todo-group">
            {
                todoList?.length !== 0 ? 
                    todoList.map(todo => <TodoItem key={Math.random()} todo={todo}/>) : 
                <h3>Add the things you need to do today</h3>
            }
        </div>
    )
}

export default TodoGroup