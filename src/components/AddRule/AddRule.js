import React, { Component } from 'react'
import Modal from '../Modal/Modal'
import ModalForm from '../Modal/ModalForm'
import ModalInput from '../Modal/ModalInputAvg'
import { connect } from 'react-redux';


class AddRule extends Component {
    state = {
        id: '',
        note: '',
        considerate: '',
        inconsiderate: '',

    }
    handleChangeFor = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // This will turn the state into the correct format 
    // then send as payload.
    // Potential future improvment: currently only allows one 
    // entry into considerate and inconsiderate.
    // Next step, add dashes betwen spaces to find multiple word entries
    // ex: inconsiderate: dumb blonde should be in format: dumb-blonde
    handleSubmit = () => {
        const preparedObject = {
            "id": `Use ${this.state.considerate} not ${this.state.inconsiderate}`, // Insetad of this.state.id
            "type": "simple",
            "note": this.state.note,
            "categories": [
                "a"
            ],
            "considerate": {},
            "inconsiderate": {}
        }
        preparedObject.considerate[this.state.considerate.toLowerCase()] = "a"
        preparedObject.inconsiderate[this.state.inconsiderate.toLowerCase()] = "a"
        console.log(preparedObject)
        this.props.dispatch({ type: "ADD_RULE", payload: preparedObject })
        this.props.addRule() // Get rid of when it works.
    }

    render() {
        return (
            <Modal>
                <i onClick={this.props.addRule} className="fas fa-times fa-2x modal__cancelIcon"></i>
                <ModalForm>
                    {/* <ModalInput label={"Name"} >
                        <input placeholder="Name"
                            value={this.state.id}
                            className="formInput__average"
                            name="id"
                            onChange={this.handleChangeFor}
                        />
                    </ModalInput> */}
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
                    {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}

                </ModalForm>
            </Modal >
        )
    }
}
const mapReduxStateToProps = (reduxState) => {
    return reduxState
}
export default connect(mapReduxStateToProps)(AddRule);
