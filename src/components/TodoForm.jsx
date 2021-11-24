import React, { useState } from 'react'
import './TodoForm.css';

export default function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : "");
    
    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e =>{
        e.preventDefault();

        props.onSubmit({
            id: Date.now(),
            text: input
        })

        setInput('')
    }

    return (
       <form className="note-form" onSubmit={handleSubmit}>
            {
            props.edit ? 
            <>
                <textarea 
                type="text" 
                value={input}
                className="edit-note-input"
                onChange={handleChange}
                /><br/>
                <button className="edit-note-btn">
                    Update
                </button>
            </>
           : 
           <>
                <textarea 
                type="text" 
                value={input}
                className="note-input"
                onChange={handleChange}
                /><br/>
                <button className="note-btn">
                    Add Todo
                </button>
                </>
           }
       </form>
    )
}
