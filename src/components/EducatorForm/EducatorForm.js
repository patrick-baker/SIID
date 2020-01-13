import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal/Modal'
import { Checkbox } from '@material-ui/core';
import UploadButton from '../UploadButton/UploadButton';


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
            specialties: this.props.singleEducator.specialties && this.props.singleEducator.specialties[0][0] !== null && this.props.singleEducator.specialties.map(x => {
                return Number(x[0]);
            }) || [],
        }
    }
    
    autoFill = () =>{
        this.setState({...this.state, newEducator: {
            ...this.state.newEducator,
            name:"Nancy McGlynn",
            bio: "MD and Educator",
            contact_info:"drnancy@juno.com",
        }})
    }
    componentDidMount = () => {
        this.props.dispatch({ type: "GET_CATEGORY" });
    }


    handleChangeFor = (property, event) => {
        this.setState({
            newEducator: {
                ...this.state.newEducator,
                [property]: event.target.value
            }
        })
    }
    handleChangeImage = (url) => {
        this.setState({
            newEducator: {
                ...this.state.newEducator,
                image_url: url
            }
        })
    }


    submitEducator = () => {
        console.log('in submitEdu')
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
            this.props.addEducator();


            this.setState({
                newEducator: {
                    id: "",
                    name: "",
                    bio: "",
                    contact_url: "",
                    image_url: "",
                    specialties: []
                }
            }, () => {
                console.log(this.state);
            })


        } else {
            alert('Please fill in all the fields')
        }
    }

    flipCheck = (event) => {
        let id = Number(event.target.name);
        console.log('in flip check', id)
        if (this.state.newEducator.specialties.includes(id)) {
            this.setState({
                newEducator: {
                    ...this.state.newEducator,
                    specialties: this.state.newEducator.specialties.filter(x => x !== id),
                }
            })
        } else {
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
                                    onClick={this.autoFill}
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
                        {/* <div>
                            <label>
                                <div className="formInput__labelText">Image:</div>
                                <input placeholder="Image"
                                    value={this.state.newEducator.image_url}
                                    className="formInput__average"
                                    onChange={(event) => this.handleChangeFor('image_url', event)} />
                            </label>
                        </div> */}

                        <div className="formInput__labelText">Specialties:</div>

                        <div className="checkboxArray">
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
