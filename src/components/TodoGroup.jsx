import { useContext } from "react"
import { TodoContext } from "../App"
import TodoItem from "./TodoItem"

const TodoGroup = () => {

    const { state: todoList } = useContext(TodoContext)

    return (
        <>
            <div>TodoGroup</div>
            {todoList.map(todo => <TodoItem key={todo.id} todo_text={todo.text}/>)}
        </>
    )
}

export default TodoGroup