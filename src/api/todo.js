import axios from "axios";

const instance = axios.create({
    baseURL: 'https://67495c88868020296630ab6c.mockapi.io/api/v1',
    timeout: 5000
});

export const getTodoList = async () => {
    return instance.get("/todos")
        .then(response => response.data)
}

export const addTodo = async (text) => {

    const request_body = {
        text: text,
        done: false
    }

    return instance.post("/todos", request_body)
        .then(response => response.data)
}

export const updateTodo = async (id, todo) => {

    return instance.put("/todos/"+id, todo)
    .then(response => response.data)
}

export const deleteTodo = async (id) => {
    return instance.delete("/todos/"+id) 
        .then(response => response.data)
}