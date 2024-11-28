import { useState, useContext } from 'react'
import { TodoContext } from "../App"
import './TodoItem.css'

const TodoItem = (props) => {

    const [style, setStyle] = useState('')

    const { dispatch } = useContext(TodoContext)

    const { todo } = props

    const handleTextClick = () => {
        if (style !== 'text-cross') setStyle('text-cross')
        return style !== 'text-cross' ? setStyle('text-cross') : setStyle('')
    }

    const handleDeleteItem = () => {
        dispatch({type: 'DELETE', id: todo.id})
    }

    return(
        <div className="todo-item">
            <a className={style} onClick={handleTextClick}>{todo.text}</a>
            <button onClick={handleDeleteItem}>x</button>
        </div>
    )
}

export default TodoItem