import React, { useEffect, useState } from 'react'

const TodoList = () => {

    const [todos, setTodos] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        const fetchTodos = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/todos")
            const data = await res.json()
            setTodos(data)
            console.log(data)
        }
        fetchTodos();
    }, [])

    const renderFilteredTodoList = todos.filter(({title}) => {
        return title.indexOf(searchTerm) >= 0
    }).map((todo) => {
        return(
            <div key={todo.id}>
                <p> {todo.title}</p>
            </div>
        )
    })

    const renderTodoList = todos.map((todo) => {
        return(
            <div key={todo.id}>
                <p> {todo.title}</p>
            </div>
        )
    })

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            ></input>
            {renderFilteredTodoList}
        </div>
    )
}

export default TodoList