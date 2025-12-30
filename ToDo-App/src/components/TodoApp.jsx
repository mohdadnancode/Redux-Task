import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, editTodo } from '../redux/todoSlice';
import { selectAllTodos } from '../redux/todoSelector';

function TodoApp() {

    const [input, setInput] = useState("");
    const [editId, setEditId] = useState(null);
    const dispatch = useDispatch();
    const todos = useSelector(selectAllTodos);

    const handleAddorEdit = () => {
        if(!input.trim()) return;

        if(editId) {
            dispatch(editTodo({ id: editId, text: input }));
            setEditId(null);
        } else {
            dispatch(addTodo(input));
        }

        setInput("");
    };

    const handleCancelEdit = () => {
        setEditId(null);
        setInput("");
    } 

  return (
    <div>
        <h2>Todo List</h2>
        <input type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder='Enter task'
        />

        <button onClick={handleAddorEdit}>
            {editId ? "Update Task" : "Add Task"}
        </button>

        {editId && (
            <button onClick={handleCancelEdit}>
                Cancel
            </button>
        )}

        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    {todo.text}
                    <button onClick={() => dispatch(deleteTodo(todo.id))}>
                        Delete
                    </button>
                    <button onClick={() => {
                        setEditId(todo.id);
                        setInput(todo.text)
                    }}>
                        Edit
                    </button>
                </li>
            ))}
        </ul>
    </div>
  );
}

export default TodoApp;