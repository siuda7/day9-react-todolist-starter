const TodoItem = (props) => {

    const { todo_text } = props

    return(
        <>
            <div>{todo_text}</div>
        </>
    )
}

export default TodoItem