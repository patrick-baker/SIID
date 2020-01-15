import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal/Modal'
import { Checkbox } from '@material-ui/core';
import UploadButton from '../UploadButton/UploadButton';

//Educator was swapped to Expert on client side display values 
//This is the form opened on add new expert and to update an existing
class EducatorForm extends Component {
    state = {
        newEducator: {
            id: this.props.singleEducator.id || "",
            name: this.props.singleEducator.name || "",
            bio: this.props.singleEducator.bio || "",
            contact_info: this.props.singleEducator.contact_info || "",
            image_url: this.props.singleEducator.image_url || "",
            //if this is an existing educator clean up so it's just the id's 
            //first check if this list is populated since it's not for the add new educator action
            //then check if the specialty value is null and don't bother mapping if it is
            specialties: this.props.singleEducator.specialties 
                            && this.props.singleEducator.specialties[0][0] !== null 
                            && this.props.singleEducator.specialties.map(x => {
                                return Number(x[0]);
                            }) 
                            || [],
        }
    }

    componentDidMount = () => {
        this.props.dispatch({ type: "GET_CATEGORY" });
    }

    //update local values on user entry
    handleChangeFor = (property, event) => {
        this.setState({
            newEducator: {
                ...this.state.newEducator,
                [property]: event.target.value
            }
        })
    }
    //update local value for image upload
    handleChangeImage = (url) => {
        this.setState({
            newEducator: {
                ...this.state.newEducator,
                image_url: url
            }
        })
    }


    submitEducator = () => {
        //check each piece of the educator to make sure it is filled out
        if (
            this.state.newEducator.name &&
            this.state.newEducator.bio &&
            this.state.newEducator.contact_info &&
            this.state.newEducator.specialties
        ) {
            //check if the new educator id is blank. if blank do add and if not run an update
            if (this.state.newEducator.id !== '') {
                this.props.dispatch({ type: "UPDATE_EDUCATOR", payload: this.state.newEducator })
            } else {
                this.props.dispatch({ type: "ADD_EDUCATOR", payload: this.state.newEducator });
            }
            //close the modal
            this.props.addEducator();
            //reset state
            this.setState({
                newEducator: {
                    id: "",
                    name: "",
                    bio: "",
                    contact_url: "",
                    image_url: "",
                    specialties: []
                }
            })
        } else {
            alert('Please fill in all the fields')
        }
    }
    //set the check box values for the specialties
    flipCheck = (event) => {
        //make sure the id is a number 
        let id = Number(event.target.name);
        if (this.state.newEducator.specialties.includes(id)) {
            //remove the id from the list if it was already present
            this.setState({
                newEducator: {
                    ...this.state.newEducator,
                    specialties: this.state.newEducator.specialties.filter(x => x !== id),
                }
            })
        } else {
            //add the id to the array if it is added 
            this.setState({
                newEducator: {
                    ...this.state.newEducator,
                    specialties: [...this.state.newEducator.specialties, id]
                }
            })
        }
    }

    render() {
        return (
            <>
                <Modal>
                    <i onClick={this.props.addEducator} className="fas fa-times fa-2x modal__cancelIcon"></i>
                    <div className="modal__form">
                        <div>
                            <div className="card__centered">
                                <UploadButton currentImage={this.state.newEducator.image_url} handleChangeImage={this.handleChangeImage} />
                            </div>

                            <label>
                                <div className="formInput__labelText" >Name:</div>
                                <input placeholder="Name"
                                    value={this.state.newEducator.name}
                                    className="formInput__average"
                                    onChange={(event) => this.handleChangeFor('name', event)} />
                            </label>
                        </div>
                        <div>
                            <label>
                                <div className="formInput__labelText" >Bio:</div>
                                <input placeholder="Bio"
                                    value={this.state.newEducator.bio}
                                    className="formInput__average"
                                    onChange={(event) => this.handleChangeFor('bio', event)} />
                            </label>
                        </div>
                        <div>
                            <label>
                                <div className="formInput__labelText">Email:</div>
                                <input placeholder="Email"
                                    value={this.state.newEducator.contact_info}
                                    className="formInput__average"
                                    onChange={(event) => this.handleChangeFor('contact_info', event)} />
                            </label>
                        </div>
                        <div className="formInput__labelText">Specialties:</div>
                        <div className="checkboxArray">
                            {/*remove 'total' from the displayed checkboxes*/}
                            {this.props.category.filter(item => item.type != 'total').map(item => {
                                return <><label key={item.id}>
                                    <Checkbox
                                        key={item.id}
                                        name={item.id}
                                        checked={this.state.newEducator.specialties.includes(item.id)}
                                        color="primary"
                                        variant="contained"
                                        onChange={(event) => this.flipCheck(event)} />
                                    {item.type}
                                </label> <br></br> </>
                            })}
                        </div>
                        <div className="modal__centeredButtonsNoTop">
                            <button className="formInput__submitButton" onClick={this.submitEducator} >Submit</button>
                        </div>
                    </div>
                </Modal>
            </>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(EducatorForm);
