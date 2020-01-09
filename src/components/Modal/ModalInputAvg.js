import React from 'react'

const ModalInput = (props) => {
    return (
        <div>
            <label>
                <div className="formInput__labelText"  >
                    {props.label}:
                    </div>
                    {props.children}

            </label>
        </div>
    )
}
export default ModalInput
