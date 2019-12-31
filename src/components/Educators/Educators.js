import React, { Component } from 'react';
import { connect } from 'react-redux';
import EducatorForm from '../EducatorForm/EducatorForm';
import AddCard from '../AddCard/AddCard';
import DeleteEducator from '../DeleteEducator/DeleteEducator'


class Educators extends Component {

    state = {
        add: false,
        edit: false,
        toEdit: {},
        deleteOpen: false,
        deleteOpenEducator: null
    }

    componentDidMount = () => {
        this.props.dispatch({ type: "GET_EDUCATORS" });

    }

    // deleteEducator = (educator) => {
    //     console.log(educator);
    //     this.props.dispatch({ type: "DELETE_EDUCATOR", payload: educator });
    // }
    handleDelete = (educator) => {
        // set current educator in local state

        // If closed, then open:
        if (!this.state.deleteOpen) {
            this.setState({
                deleteOpenEducator: educator,
                deleteOpen: true
            })
        }
        // If open, close and set ID to null
        // Pass this fuction as props to modal box
        if (this.state.deleteOpen) {
            this.setState({
                deleteOpenEducator: null,
                deleteOpen: false
            })
            this.props.dispatch({ type: "EDUCATOR_DEL_RESET" })
        }
    }

    addEducator = () => {
        this.setState({
            add: !this.state.add
        }, () => {
            console.log('add flag is:', this.state.add)
        })
    }

    editToggle = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    openEdit = (selected) => {
        this.setState({
            toEdit: selected,
        });
        this.editToggle();
    }

    render() {
        return (
            <div className="educatorPage__background">
                {this.props.user.admin && (

                    <AddCard addEducator={this.addEducator}>
                        <i class="fas fa-user-graduate fa-4x card__plusIcon"></i> <br />
                        <span>Add Educator</span>
                    </AddCard>

                )}
                {
                    this.state.add && <EducatorForm addEducator={this.addEducator} singleEducator={{}} />
                }
                {/* Show the Delete Educator Modal */}
                {
                    this.state.deleteOpen && <DeleteEducator specificEducator={this.state.deleteOpenEducator} handleDeleteModal={this.handleDelete} />
                }
                {this.props.educator.educatorReducer[0] && this.props.educator.educatorReducer.map((edu, i) => (
                    <div className="card__structure" key={i}>
                        <div className="card__imageContainer">
                            <img className="card__image" src={edu.image_url} />
                        </div>
                        <div className="card__details" >
                            <div className="card__title">
                                {edu.name}
                            </div>

                            <div className="card__description" >
                                {edu.bio}
                            </div>


                            <ul className="card__specialties">
                                Specialties:
                {edu.specialties[0][0] !== null && edu.specialties.map((specialty, i) => { return <li key={i} > - {specialty[1]}</li> })}
                            </ul>


                            <div className="card__contact" >
                                <i className="far fa-envelope fa-xs"></i> {edu.contact_info}
                            </div>

                            {
                                this.state.edit && <EducatorForm addEducator={this.editToggle} singleEducator={this.state.toEdit} />
                            }

                            {
                                this.props.user.admin &&
                                (
                                    <>
                                        <div className="card__delete">
                                            <i onClick={() => this.handleDelete(edu)} class="fas fa-trash-alt fa-lg"></i>
                                        </div>

                                        <div className="card__edit">
                                            {/*this passes the current educator to be set to the toEdit state and passed into the educatorform*/}
                                            <i onClick={() => { this.openEdit(edu) }} class="fas fa-user-edit fa-lg"></i>
                                        </div>
                                    </>
                                )
                            }


                        </div>
                    </div>
                ))}
                {/* <pre>{JSON.stringify(this.props.educator.educatorReducer, null, 2)}</pre> */}

            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Educators);
