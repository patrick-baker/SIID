import React from 'react'

const AddCard = (props) => {
    return (
        // addEducator function passed as props from educators component
        <div onClick={props.addEducator} className="card__createCard">
            <div className="card__plusIconDiv">
                {props.children}
            </div>
        </div>
    )
}
export default AddCard;