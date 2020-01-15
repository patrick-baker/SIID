import React, { Component } from 'react'
import Modal from '../Modal/Modal'
import ModalForm from '../Modal/ModalForm'
import ModalInput from '../Modal/ModalInputAvg'
import { connect } from 'react-redux';
let verbose = false; // console.logs run if verbose = true

class AddRule extends Component {
    // Add rule function runs 
    state = {
        note: '',
        considerate: '',
        inconsiderate: '',
        message: '',

    }
    
    // changes local state for corresponding input value
    handleChangeFor = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // This will turn the state into the correct format 
    // then send as payload.
    // Potential future improvement: currently only allows one 
    // entry into considerate and inconsiderate.
    // ex: inconsiderate: dumb blonde should be in format: dumb-blonde
    handleSubmit = () => {
        const preparedObject = {
            "id": `Use ${this.state.considerate} not ${this.state.inconsiderate}`, // Instead of this.state.id
            "type": "simple",
            "note": this.state.note,
            "message": this.state.message,
            "categories": [
                "a"
            ],
            "considerate": {},
            "inconsiderate": {}
        }
        // Due to format of retext.js, creates a key of this.state.considerate, and a value of "a"
        preparedObject.considerate[this.state.considerate.toLowerCase()] = "a";
        // Due to format of retext.js, creates a key of this.state.considerate, and a value of "a"
        preparedObject.inconsiderate[this.state.inconsiderate.toLowerCase()] = "a";
        if (verbose) console.log(preparedObject);
        // dispatches prepared object to ADD_RULE in ruleSaga.js
        this.props.dispatch({ type: "ADD_RULE", payload: preparedObject });
        // closes add ruled modal
        this.props.addRule(); 
    }

    render() {
        return (
            <Modal>
                <i onClick={this.props.addRule} className="fas fa-times fa-2x modal__cancelIcon"></i>
                <ModalForm>
                    <div style={{paddingTop:'2rem'}} ></div>
                    <ModalInput label={"Inconsiderate word/phrase"} >
                        <input placeholder="Inconsiderate"
                            value={this.state.inconsiderate}
                            className="formInput__average"
                            name="inconsiderate"
                            onChange={this.handleChangeFor}
                        />
                    </ModalInput>
                    <ModalInput label={"Considerate"} >
                        <input placeholder="Considerate"
                            value={this.state.considerate}
                            className="formInput__average"
                            name="considerate"
                            onChange={this.handleChangeFor}
                        />
                    </ModalInput>
                    <ModalInput label={"Message"} >
                        <input placeholder="Message"
                            value={this.state.message}
                            className="formInput__average"
                            name="message"
                            onChange={this.handleChangeFor}
                        />
                    </ModalInput>
                    <ModalInput label={"Note"} >
                        <textarea
                            rows="5"
                            placeholder="Sources, more context and other information"
                            value={this.state.note}
                            className="formInput__average"
                            name="note"
                            onChange={this.handleChangeFor}
                        />
                    </ModalInput>
                    <div className="modal__centeredButtons">
                        <button className="formInput__submitButton" onClick={this.handleSubmit} >Submit</button>
                    </div>
                </ModalForm>
            </Modal >
        )
    }
}
const mapReduxStateToProps = (reduxState) => {
    return reduxState
}
export default connect(mapReduxStateToProps)(AddRule);
