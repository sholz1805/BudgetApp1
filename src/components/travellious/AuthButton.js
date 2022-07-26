import React from 'react'
import "./AuthButton.css"
import SignUpPage from "./SignUpPage"

const AuthButton = () => {
    function handleClick() {
       return( <SignUpPage/>)
    }

    return (
        <button type="button" style={{fontFamily: "'Poppins', sans-serif"}} onClick={handleClick} >
            Sign In
        </button>
    )
}

export default AuthButton

