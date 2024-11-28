import { useState, useContext } from "react"
import { TodoContext } from "../App"

const TodoGenerator = () => {

    const [text, setText] = useState("");

    const { dispatch } = useContext(TodoContext)

    const handleTextChange = (event) => {
        setText(event.target.value)
    }

    const handleAdd = () => {
        dispatch({type: 'ADD', text: text})
    }

    return (
        <>
            <input type="text" value={text} onChange={handleTextChange}/>
            <button onClick={handleAdd}>Add</button>
        </>
    )
}

export default TodoGenerator