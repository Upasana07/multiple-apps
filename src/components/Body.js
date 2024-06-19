import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import Expense from './ExpenseApp'
import TodoApp from './TodoApp'
import CalculatorApp from './CalculatorApp'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/expense',
            element: <Expense />
        },
        {
            path: '/todo',
            element: <TodoApp/>
        },
        {
            path: '/calculator',
            element: <CalculatorApp/>
        }
    ])
    return (
        <RouterProvider router={appRouter} />
    )
}

export default Body