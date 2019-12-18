import React, { Component } from 'react';
import { connect } from 'react-redux';

class EducatorForm extends Component {
    state = {
        add: false,
        newEducator: {
            name: "",
            bio: "",
            contact_info: "",
            image_url: "",
            specialties: []
        }
    }

    addEducator = () => {
        this.setState({
            add: !this.state.add
        })
    }

    handleChangeFor = (property, event) => {
        this.setState({
            ...this.state,
            newEducator: {
                ...this.state.newEducator,
                [property]: event.target.value
            }
        })
    }

    addSpecialites = (event) => {
        if (!this.state.newEducator.specialties.includes(event.target.value)) {
            this.setState({
                newEducator: {
                    ...this.state.newEducator,
                    specialties: [...this.state.newEducator.specialties, event.target.value]
                }
            })
        }
    }

    submitEducator = () => {
        if (
            this.state.newEducator.name &&
            this.state.newEducator.bio &&
            this.state.newEducator.contact_info &&
            this.state.newEducator.specialties
        ) {
            this.props.dispatch({ type: "ADD_EDUCATOR", payload: this.state.newEducator });
        } else {
            alert('Please fill in all the fields')
        }
    }

    removeSpecialty = (specialty) => {
        let copySpecialties = this.state.newEducator.specialties;
        copySpecialties.splice(copySpecialties.indexOf(specialty), 1 );
    
        this.setState({
            newEducator: {
                ...this.state.newEducator,
                specialties:copySpecialties
            }
        })
    }

    render() {
        return (
            <>
                <div className="card__createCard" onClick={this.addEducator}>
                    <div className="card__plusIconDiv">
                        <i class="fas fa-user-graduate fa-4x card__plusIcon"></i> <br />
                        <span>Add Educator</span>
                    </div>
                </div>

                {this.state.add &&
                    (<div className="modal__structure">
                        <div className="modal__modal-content" >
                            <i onClick={this.addEducator} className="fas fa-times fa-2x modal__cancelIcon"></i>


                            <div>
                                <label>
                                    <div className="formInput__labelText" >Name:</div><input placeholder="Name" className="formInput__average" onChange={(event) => this.handleChangeFor('name', event)} />
                                </label>

                                <label>
                                    <div className="formInput__labelText" >Bio:</div><input placeholder="Bio" className="formInput__average" onChange={(event) => this.handleChangeFor('bio', event)} />
                                </label>
                                <label>
                                    <div className="formInput__labelText">Email:</div><input placeholder="Email" className="formInput__average" onChange={(event) => this.handleChangeFor('contact_info', event)} />
                                </label>

                                <label>
                                    <div className="formInput__labelText">Image:</div><input placeholder="Image" className="formInput__average" onChange={(event) => this.handleChangeFor('image_url', event)} />
                                </label>

                                <div className="formInput__labelText">Specialties:</div>
                                <select onChange={(event) => this.addSpecialites(event)}>
                                    {/* In future loop through specialties to display options */}
                                    <option value="gender">gender</option>
                                    <option value="race">race</option>
                                    <option value="lgbtq">lgbtq</option>
                                    <option value="religion">religion</option>
                                    <option value="disability">disability</option>
                                </select>
                                <ul>
                                    {this.state.newEducator.specialties.map((specialty, i) => <li key={i} onClick={() => this.removeSpecialty(specialty)} className="formInput__specialtyDisplay">- {specialty}</li>)}
                                </ul>
                                <button className="formInput__submitButton" onClick={this.submitEducator} >Submit</button>
                            </div>


                        </div>
                    </div>
                    )}
            </>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(EducatorForm);
