import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const goToExpense = () => {
        navigate('/expense')
    }
    const goToTodo = () => {
        navigate('/todo')
    }
    const goToCalculator = () => {
        navigate('/calculator')
    }
    return (
        <div>
            <nav className='header'>
            <button className='btn' onClick={goToExpense}>Expense App</button>
            <button className='btn' onClick={goToTodo}>Todo App</button>
            <button className='btn' onClick={goToCalculator}>Calculator App</button>
            </nav>
        </div>
    )
}

export default Home