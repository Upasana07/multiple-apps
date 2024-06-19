import { useRef, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

// small todo app 
// add todo task
// strike off when done
// give a checkbox to help strike it off
// give keyboard access

const TodoApp = () => {
  const navigate = useNavigate()
    const goBack = () => {
        navigate('/')
    }
  return (
    <div className="App">
    <button className="btn" onClick={goBack}>Go Back</button>
    <h1>Todo App</h1>
    </div>
  )
}

export default TodoApp