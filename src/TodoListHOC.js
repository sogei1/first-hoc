import React, { useEffect, useState } from 'react'
import HOC from './HOC'

const TodoListHOC = ({data}) => {

    const renderTodoList = data.map((todo) => {
        return(
            <div key={todo.id}>
                <p> {todo.title}</p>
            </div>
        )
    })

    return (
        <div>
            {renderTodoList}
        </div>
    )
}

const SearchTodos = HOC(TodoListHOC, "todos")

export default SearchTodos