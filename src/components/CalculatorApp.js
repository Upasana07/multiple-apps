import { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const CalculatorApp = () => {
    const [textInput, setTextInput] = useState([])
    const [answer, setAnswer] = useState()
    const navigate = useNavigate()
    const goBack = () => {
        navigate('/')
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(textInput[textInput.length-1].match(/[+*/-]/)){
            alert('Please select a number to end calculation')
        } else {
            setAnswer(eval(textInput.toString().replace(/,/g, '')))
            setTextInput('')
        }
    }
    const addToInput = (value) => {
        setTextInput((input)=> [...input, value].join(''))
    }
     return (
            <div className="App">
                <button className="btn" onClick={goBack}>Go Back</button>
                <h1>Calculator App</h1>
                <form onSubmit={handleFormSubmit}>
                <input className="calc-input" value={textInput} disabled type="text"/>
                 <br />
                 <br />
                <div className="numbers">
                    <button type='button' onClick={()=> {addToInput(1)}}>1</button>
                    <button type='button' onClick={()=> {addToInput(2)}}>2</button>
                    <button type='button'onClick={()=> {addToInput(3)}}>3</button>
                    <button type='button' onClick={()=> {addToInput(4)}}>4</button>
                    <button type='button' onClick={()=> {addToInput(5)}}>5</button>
                    <button type='button' onClick={()=> {addToInput(6)}}>6</button>
                    <button type='button' onClick={()=> {addToInput(7)}}>7</button>
                    <button type='button' onClick={()=> {addToInput(8)}}>8</button>
                    <button type='button' onClick={()=> {addToInput(9)}}>9</button>
                </div>
                <br />
                <div className="numbers">
                <button type='button' onClick={()=> {addToInput('+')}}>+</button>
                <button type='button' onClick={()=> {addToInput('-')}}>-</button>
                <button type='button' onClick={()=> {addToInput('/')}}>/</button>
                <button type='button' onClick={()=> {addToInput('*')}}>*</button>
                </div>
                <br />
                <button type="submit" className="my-btn">Calculate</button>
                </form>
            {answer && <h1>Your Answer is: {answer}</h1>}
            </div>
    )
}

export default CalculatorApp