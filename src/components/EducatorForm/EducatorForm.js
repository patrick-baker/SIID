import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal/Modal'
import { Checkbox } from '@material-ui/core';

class EducatorForm extends Component {
    state = {
        newEducator: {
            id: this.props.singleEducator.id || "",
            name: this.props.singleEducator.name || "",
            bio: this.props.singleEducator.bio || "",
            contact_info: this.props.singleEducator.contact_info || "",
            image_url: this.props.singleEducator.image_url || "",
            specialties: this.props.singleEducator.specialties || [],
        }
    }

    componentDidMount = () => {
        this.props.dispatch({type: "GET_CATEGORY"});
       
        console.log(this.props.singleEducator);
    }


    handleChangeFor = (property, event) => {
        this.setState({
            newEducator: {
                ...this.state.newEducator,
                [property]: event.target.value
            }
        })
    }

    // addSpecialites = (event) => {
    //     if (!this.state.newEducator.specialties.includes(event.target.value)) {
    //         this.setState({
    //             newEducator: {
    //                 ...this.state.newEducator,
    //                 specialties: [...this.state.newEducator.specialties, event.target.value]
    //             }
    //         })
    //     }
    // }

    submitEducator = () => {
        if (
            this.state.newEducator.name &&
            this.state.newEducator.bio &&
            this.state.newEducator.contact_info &&
            this.state.newEducator.specialties
        ) {

            if (this.props.singleEducator[0]) {
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

    // removeSpecialty = (specialty) => {
    //     let copySpecialties = this.state.newEducator.specialties;
    //     copySpecialties.splice(copySpecialties.indexOf(specialty), 1);

    //     this.setState({
    //         newEducator: {
    //             ...this.state.newEducator,
    //             specialties: copySpecialties
    //         }
    //     })
    // }

    flipCheck = (event) =>{
        let id=Number(event.target.name);
        console.log('in flip check', id)
        if (this.state.newEducator.specialties.includes(id)){
            this.setState({
                newEducator: {
                    ...this.state.newEducator,
                    specialties: this.state.newEducator.specialties.filter(x=>x!==id),
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



                        <div>
                            <label>
                                <div className="formInput__labelText">Image:</div>
                                <input placeholder="Image" 
                                value={this.state.newEducator.image_url} 
                                className="formInput__average" 
                                onChange={(event) => this.handleChangeFor('image_url', event)} />
                            </label>
                        </div>

                        <div className="formInput__labelText">Specialties:</div>
                        {/* <select onChange={(event) => this.addSpecialites(event)}>
                            {this.props.category.map((category)=>{
                                return <option key={category.id} value={category.id}>{category.type}</option>
                            })}
                            {/* <option value="gender">gender</option>
                            <option value="race">race</option>
                            <option value="lgbtq">lgbtq</option>
                            <option value="religion">religion</option>
                            <option value="disability">disability</option> 
                        </select>
                        <ul>
                            {this.state.newEducator.specialties.map((specialty) => {
                            return <li key={specialty.id} 
                                onClick={() => this.removeSpecialty(specialty)} 
                                className="formInput__specialtyDisplay">- {specialty.type}</li>})}
                        </ul> */}
                        <div className="checkboxArray">
                            {this.props.category.map(item => {
                                return <><label key={item.id}>
                                    {item.type}
                                    <Checkbox
                                        key={item.id}
                                        name={item.id}
                                        checked={this.state.newEducator.specialties.includes(item.id)}
                                        color="primary"
                                        variant="contained"
                                        onChange={(event) => this.flipCheck(event)} />
                                </label> <br></br> </>
                            })}
                        </div>
                        <button className="formInput__submitButton" onClick={this.submitEducator} >Submit</button>

                    </div>


                </Modal>
            </>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(EducatorForm);
