import { useContext } from 'react'
import { TodoContext } from "../App"
import './TodoItem.css'
import { deleteTodo, updateTodo } from '../api/todo'

const TodoItem = (props) => {

    const { dispatch } = useContext(TodoContext)

    const { todo } = props

    const handleTextClick = () => {
        updateTodo(todo.id, {id: todo.id, text: todo.text, done: !todo.done})
            .then(todo => dispatch({type: 'TOGGLE', id: todo.id}))
        // dispatch({type: 'TOGGLE', id: todo.id})
    }

    const handleDeleteItem = async () => {
        await deleteTodo(todo.id)
            .then(todo => dispatch({type: 'DELETE', id: todo.id}))
        // dispatch({type: 'DELETE', id: todo.id})
    }

    return(
        <div className="todo-item">
            <a className={todo.done ? 'text-cross' : ''} onClick={handleTextClick}>{todo.text}</a>
            <button className='todo-item-btn' onClick={handleDeleteItem}>x</button>
        </div>
    )
}

export default TodoItem