import { useContext, useState } from "react"
import { TodoContext } from "../App"
import TodoItem from "./TodoItem"
import { Pagination } from 'antd';
import './TodoGroup.css'

const TodoGroup = () => {

    const PAGE_SIZE = 5;

    const { state: todoList } = useContext(TodoContext)

    const [page, setPage] = useState(1)

    const onPageChange = (current) => {
        setPage(current)
    }

    return (
        <>
            <div className="todo-group">
                {
                    todoList?.length !== 0 ? 
                        todoList?.map((todo, index) => {
                            if (index >= (page-1) * PAGE_SIZE && index < (page) * PAGE_SIZE) return <TodoItem key={Math.random()} todo={todo}/>
                        })
                        :  
                        <h3>Add the things you need to do today</h3>
                        /* Math.ceil(todoList?.length / PAGE_SIZE) * PAGE_SIZE */
                }
                <Pagination 
                    defaultCurrent={1} 
                    total={todoList?.length} 
                    pageSize={PAGE_SIZE} 
                    current={page} 
                    onChange={onPageChange} />
            </div>
        </>
    )
}

export default TodoGroup