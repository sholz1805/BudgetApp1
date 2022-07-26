import React, {useEffect, useState} from 'react';
import './BudgetBalance.css'
import axios from 'axios'
import {useHistory} from "react-router-dom";

const BudgetBalance = (props) => {
    const[input, setInput] = useState(0)
    const[exchangeRate, setExchangeRate] = useState({})
    const[selectOption, setSelectOption] = useState("")

    let { budget, setSelectOpt } = props


    let  history = useHistory()

    const handleInput = (e)=>{
        setInput(e.target.value)
    }

    function signOut() {
        history.push("/")
        props.setSignIn(false)


    }

    const handleSelect = (e)=>{
        console.log(exchangeRate[e.target.value])
        selectOption === "" ?
            props.setBalance(props.balance * exchangeRate[e.target.valueOf]) :
            props.setBalance(props.balance / exchangeRate[selectOption] * exchangeRate[e.target.value])
        setSelectOpt(e.target.value)



        for(let i = 0; i < budget.length; i++){
            budget[i]["budgetAmount"] = budget[i]["budgetAmount"] / exchangeRate[selectOption] * exchangeRate[e.target.value]
        }

        setSelectOption(e.target.value)

    }


    useEffect(()=>{
        axios.get('https://v6.exchangerate-api.com/v6/21eba664b886af6eab591fe2/latest/NGN')
            .then((response)=>
            {setExchangeRate(response.data.conversion_rates)
                setSelectOption(Object.keys(response.data.conversion_rates)[0])
            })
    },[])

    useEffect(()=>{
        console.log('mounted @ budget balance')
        return()=>{
            console.log('unmounted @ budget balance')
        }
    },[props.balance])

    return (
        <div className="budgetBalance">
            <div className="balance">
                {props.balance}
            </div>
            <select className="balance-dropdown" onChange = {handleSelect}>
                {Object.keys(exchangeRate).length>0 &&
                Object.keys(exchangeRate).map(
                    (data, index)=><option key={index}>{data}</option>)}
            </select>
            <div className="balance-buttons">
                <input type="number" onChange={handleInput}/>
                <button onClick={()=> props.setBalance(input)}>Set Budget</button>
            </div>
            <div className="balance-button">
                <button onClick={()=> signOut()}>Sign Out</button>
            </div>
        </div>
    );
};

export default BudgetBalance;
