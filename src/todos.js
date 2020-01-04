import React from 'react'

function todos({ todos, deleteTodos, addTodos }) {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div key={todo.id} className="collection-item" onClick={() => { deleteTodos(todo.id) }}>
                    <span className="todo">{todo.content}</span>
                </div>
            )
        })
    ) : (
            <p className="center">You have nothing left to do!</p>
        )

    return (
        <div className="container todos collection">
            {todoList}
        </div>
    )
}


export default todos;