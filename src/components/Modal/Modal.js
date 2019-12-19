import React from 'react'

const ThomasModal = (props) =>{
    return (
        <div className="modal__structure">
                    <div className="modal__modal-content" >
                        {props.children}
                        </div>
                    </div>
    )
}
export default ThomasModal;