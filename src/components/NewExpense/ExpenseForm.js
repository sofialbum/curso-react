import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const[enteredTitle, setEnteredTitle] = useState('');
    const[enteredAmount, setEnteredAmount] = useState('');
    const[enteredDate, setEnteredDate] = useState('');
    //const [userInput, setUserInput] = useState({
    //    enteredTitle: '',
    //    enteredAmount: '',
    //    enteredDate: ''
    //}); --> This is the approach that use just one state.
    // Esta forma se usaría con lo comentado debajo para actualizar el estado.

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        
        //setUserInput({
        //   ...userInput,
        //   enteredTitle: event.target.value
        //}); --> not a good practice to update it like this.//

        //setUserInput((prevState) => {
        //    return { ...prevState, enteredTitle: event.target.value };
        //}); --> SAFER WAY. if your state update depends on the previous state, use this function form

    };
    
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        //setUserInput({
        //    ...userInput,
        //    enteredAmount: event.target.value
        //})
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        //setUserInput({
        //    ...userInput,
        //    enteredDate: event.target.value
        //})
    };
    
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
// Look at input from Title. It has a two-way binding, because it doesn't just listen to changes
// in the input too update the state but also feed the state back into the input, so that when we change
// the state, we also change input.
// The advantage is that when the form is submitted for example, we can call setEnteredTitle and set 
// that back to an empty string, which also was our initial state.
// Two-way binding is useful when you are working with forms.
    return (
        <form onSubmit={submitHandler} >
            <div className="new-expense__controls">
                <div className="new-expense__control">
                 <label>Title</label>
                 <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                 <label>Amount</label>
                 <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                 <label>Date</label>
                 <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;