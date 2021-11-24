import React, { useState } from 'react'
import './Todo.css'
import TodoForm from './TodoForm.jsx';

function Todo(props) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const updateTodo = value => {

        props.editTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id){
        return <TodoForm edit={edit} onSubmit={updateTodo} />
    }

    return props.todos.map((todo) => (
        <li className="note" key={todo.id}>
        <div className="bottons">
            <span className="edit" 
            onClick={() => setEdit({id: todo.id, value: todo.text})}>
                Edit
            </span>
            <span className="delete" onClick={() => props.deleteTodo(todo.id)}>
                X
            </span>
        </div>
        <div className="content">
        {todo.text}
        </div>
    </li>
    ));
}

export default Todo;
