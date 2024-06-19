import { useRef, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Expense = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([]);
    const name = useRef();
    const amt = useRef();
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const newEntry = {
            name: name.current.value,
            amt: amt.current.value,
            id: crypto.randomUUID()
        };
        setData((data) => [...data, newEntry]);
    };
    const removeEntryFromData = (id) => {
        setData(data.filter((d) => d.id !== id));
    };
    const goBack = () => {
        navigate('/')
    }
    return (
        <div className="App">
            <button className="btn" onClick={goBack}>Go Back</button>
            <h1>Expense App</h1>
            <form onSubmit={handleFormSubmit} className="submit-form">
                <div className="input-div">
                    <label htmlFor="name">Expense Name</label>
                    <input ref={name} id="name" type="text" />
                </div>
                <div className="input-div">
                    <label htmlFor="amount">Amount Spent</label>
                    <input ref={amt} type="number" id="amount" />
                </div>
                <button type="submit" className="my-btn">
                    Add
                </button>
            </form>
            <h2>Your Expenses</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d) => (
                        <tr key={d.id}>
                            <td>{d.name}</td>
                            <td>{d.amt}</td>
                            <td>
                                <button onClick={() => removeEntryFromData(d.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Expense;