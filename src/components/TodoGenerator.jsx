import { useState, useContext } from "react"
import { TodoContext } from "../App"
import './TodoGenerator.css'

const TodoGenerator = () => {

    const [text, setText] = useState("");

    const { dispatch } = useContext(TodoContext)

    const handleTextChange = (event) => {
        setText(event.target.value)
    }

    const handleAdd = () => {
        if (text.trim() !== '') {
            dispatch({type: 'ADD', text: text})
            setText('')
        }
    }

    return (
        <div className="todo-generator">
            <input type="text" value={text} onChange={handleTextChange}/>
            <button className="todo-generator-btn" onClick={handleAdd}>Add</button>
        </div>
    )
}

export default TodoGenerator