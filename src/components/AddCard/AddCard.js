import React from 'react'

const ThomasAddCard = (props) => {
    return (
        <div onClick={props.addEducator} className="card__createCard">
            <div className="card__plusIconDiv">
                {props.children}
            </div>
        </div>
    )
}
export default ThomasAddCard;