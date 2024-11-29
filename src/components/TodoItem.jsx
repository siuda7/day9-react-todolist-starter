import { useState, useContext } from 'react'
import { TodoContext } from "../App"
import './TodoItem.css'

const TodoItem = (props) => {

    const { dispatch } = useContext(TodoContext)

    const { todo } = props

    const handleTextClick = () => {
        dispatch({type: 'TOGGLE', id: todo.id})
    }

    const handleDeleteItem = () => {
        dispatch({type: 'DELETE', id: todo.id})
    }

    return(
        <div className="todo-item">
            <a className={todo.done ? 'text-cross' : ''} onClick={handleTextClick}>{todo.text}</a>
            <button className='todo-item-btn' onClick={handleDeleteItem}>x</button>
        </div>
    )
}

export default TodoItem