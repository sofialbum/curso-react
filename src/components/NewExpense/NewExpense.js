import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NexExpense.css";

const NewExpense = (props) => {
  const [addingExpense, setAddingExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setAddingExpense(false);
  };


  const startEditingHandler = () => {
    setAddingExpense(!addingExpense);
  };

  const stopEditingHandler = () => {
    setAddingExpense(false);
  };


  let addNewExpense = (
    <button onClick={startEditingHandler}>Add New Expense</button>
  );

  if (addingExpense === true) {
    addNewExpense = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={stopEditingHandler}
      />
    );
  }

  return <div className="new-expense">{addNewExpense}</div>;
};

export default NewExpense;
