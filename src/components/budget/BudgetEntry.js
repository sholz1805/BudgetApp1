import React, {useState} from 'react';
import './BudgetBody.css'


const BudgetEntry = (props) => {
    let {budget, setBudget, balance, setBalance} = props

    let [input, setInput] = useState({budgetName:'', budgetAmount: '', budgetDescription: '', date: ''})

    const handleInput = (e) => {

        setInput({...input, [e.target.name]: e.target.value})
    }

    const createBudget = () => {

        let budgetData = [{ ...input, date: Date.now() }, ...budget]
        let savedBudget = {...input}

        if(!(balance-savedBudget.budgetAmount < 0)){
            setBudget(budgetData)

            let newBalance = balance-savedBudget.budgetAmount
            setBalance(newBalance)
        }
        else setBalance(

            (initial)=>{
                setTimeout(()=> setBalance(initial), 2000)
                return "Budget limit exceeded!"
            }
        )
    }
    return (
        <div className="budget-entry-container">
                <div className="budgetEntry">
                    <p>Budget Name</p>
                    <input name="budgetName" type="text" onChange={handleInput}/>
                </div>
                <div className="budgetEntry">
                    <p>Budget Amount</p>
                    <input name="budgetAmount" type="number" onChange={handleInput}/>
                </div>
                <div className="budgetEntry">
                    <p>Budget Description</p>
                    <input name="budgetDescription" type="text" onChange={handleInput}/>
                </div>
                <button onClick={createBudget}>Enter</button>
        </div>
    );
};

export default BudgetEntry;
