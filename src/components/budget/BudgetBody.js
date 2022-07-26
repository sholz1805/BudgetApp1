import React from 'react';
import './BudgetBody.css'
import BudgetDetails from './BudgetDetails';
import BudgetEntry from './BudgetEntry';
import {useParams} from 'react-router-dom'
// import Login from "../authentication/Login";


const BudgetBody = (props) => {
    let {balance, setBalance, budget, setBudget, selectOpt} = props
    let { identity } = useParams()

    const greeting = () => {
        if(new Date().getHours() > -1 && new Date().getHours() < 12){
            return "Good morning, "
        }
        else if(new Date().getHours() > 11 && new Date().getHours() < 17){
            return "Good afternoon, "
        }
        else if(new Date().getHours() > 16 && new Date().getHours() < 24){
            return "Good evening, "
        }
    }

    return (
        <div className="budget-body">
            <div className="text-intro">
                <h1>{greeting()}{identity} <br/> Welcome to your personal budget</h1>
                <p>Enter the price, description, and give a special name to your expenditure</p>
            </div>
            <div className="budget-body-sectioned">
                <BudgetEntry budget={budget} setBudget={setBudget} balance={balance} setBalance={setBalance} />
                <BudgetDetails selectOpt={selectOpt} budget={budget} setBudget={setBudget} balance={balance} setBalance={setBalance}/>
            </div>
        </div>
    );
};

export default BudgetBody;
