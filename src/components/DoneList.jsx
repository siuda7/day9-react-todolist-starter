import { useContext } from "react";
import { TodoContext } from "../App";

const DoneList = () => {

    const {state} =  useContext(TodoContext)
    console.log(state)

    const doneList = state.filter(todo => todo.done)
    console.log(doneList)

    return (
        <div>
            {doneList.map(todo => <div key={todo.id}>{todo.text}</div>)}
        </div>
    );
}

export default DoneList