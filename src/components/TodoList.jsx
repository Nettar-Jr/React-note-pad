import React, { useState } from 'react'
import './TodoList.css';
import Todo from './Todo.js';
import TodoForm from './TodoForm.jsx'



export default function TodoList() {

    const [todos, setTodos] = useState([])

    const addTodo = todo =>{
        if (!todo.text || /^\s*$/.test(todo.text)){
            return;
        }

        const newTodos = [todo, ...todos]
        setTodos(newTodos)
    }

    const editTodo = (todoId, newValue) => {

        if (!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }
        setTodos(prevValue => prevValue.map(item => 
            (item.id === todoId ? newValue : item))
        );

    }

    const detleteTodo = id => {
        const remainingTodo = [...todos].filter(todo => todo.id !== id)

        setTodos(remainingTodo)
    }

    return (
        <div className="container">
            <h1>Sticky Notes</h1>
            <TodoForm onSubmit={addTodo} />
            <ul className="notes">
                    <Todo todos={todos}
                    editTodo={editTodo}
                    deleteTodo={detleteTodo}
                    />
            </ul>
        </div>
    )
}
