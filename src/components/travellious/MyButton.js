import React from 'react'

const MyButton = (props) => {
    return(
        <button style={{backgroundColor: props.backgroundColor, color: props.color, border: "1px solid black"}}>
            {props.buttonName}
        </button>
    )
}

export default MyButton