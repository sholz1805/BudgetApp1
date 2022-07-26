import React, {useState} from 'react';
import './BudgetBody.css'
import { toDateTimeLocal } from '../../util'


const BudgetDetails = (props) => {
    let {budget, setBudget, balance, setBalance, selectOpt} = props
    const [input, setInput] = useState("")

    const handleInput = (e) =>{
        setInput(e.target.value)
    }

    const filterTable = () =>{
        let newObject = [...budget]
        setBudget(newObject.filter((data)=>input === data["budgetDescription"] || input === data["budgetName"]))
    }

    const Delete = (objectID, budgetAmount) => {
        let newObject = [...budget]
        setBudget(newObject.filter((data, index)=>index !== objectID))
        let reversedBalance = balance+budgetAmount
        setBalance(reversedBalance)
    }

    return (
        <div className="budget-details-container">
            <div className="budget-details-header">
                <div className="header-text">
                    <h1>Details</h1>
                </div>
                <div className="search-bar">
                    <label>Search For: </label>
                    <input onChange={handleInput} />
                    <button onClick={filterTable} >Search</button>
                </div>
            </div>
            {budget.length > 0 ?
                <table>
                    <tr className="table-header">
                        <th>Date</th>
                        <th>Budget Name</th>
                        <th>Amount</th>
                        <th>Description</th>
                        <th> </th>
                    </tr>
                    {budget.map((data, index) =>
                        <tr key={index} className="data-row">
                            <td>{toDateTimeLocal(data.date)}</td>
                            <td>{data.budgetName}</td>
                            <td>{selectOpt} { data.budgetAmount}</td>
                            <td>{data.budgetDescription}</td>
                            <td>
                                <button style={{backgroundColor: "red", color:"white", padding: "2px 10px", border: "unset"}} onClick={()=> Delete(index, +data.budgetAmount)} >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )}
                </table>
                :
                "Empty"
            }
        </div>
    );
};



export default BudgetDetails;
