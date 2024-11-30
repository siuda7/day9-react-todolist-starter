import { useState, useContext } from "react"
import { TodoContext } from "../App"
import { addTodo } from "../api/todo";
import { Modal } from 'antd';
import './TodoGenerator.css'

const TodoGenerator = () => {

    const [text, setText] = useState("");

    const { dispatch } = useContext(TodoContext)

    const handleTextChange = (event) => {
        setText(event.target.value)
    }

    const handleAdd = async () => {
        if (text.trim() !== '') showModal();
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = async () => {
        if (text.trim() !== '') {
            await addTodo(text)
                .then(todo => dispatch({type: 'ADD', payload: todo}))
            setText('')
        }
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="todo-generator">
            <Modal title="Are you sure?" 
                open={isModalOpen} 
                onOk={handleOk} 
                onCancel={handleCancel}>
                <p>{text}</p>
            </Modal>
            <input type="text" value={text} onChange={handleTextChange}/>
            <button className="todo-generator-btn" onClick={handleAdd}>Add</button>
        </div>
    )
}

export default TodoGenerator