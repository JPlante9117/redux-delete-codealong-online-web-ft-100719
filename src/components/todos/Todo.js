import React from 'react'

const Todo = props => {
    return(
        <div>
            <span>{props.todo.text}</span><button onClick={() => props.deleteTodo(props.todo.id)} >DELETE</button>
        </div>
    )
}

export default Todo;
