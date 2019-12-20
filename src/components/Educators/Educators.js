import React, { Component } from 'react';
import { connect } from 'react-redux';
import EducatorForm from '../EducatorForm/EducatorForm';

class Educators extends Component {

    state = {
        add: false,
        edit: false,
        toEdit: {},
    }

    componentDidMount = () => {
        this.props.dispatch({ type: "GET_EDUCATORS" });
        
    }

    deleteEducator = (educator) => {
        console.log(educator);
        this.props.dispatch({ type: "DELETE_EDUCATOR", payload: educator });
    }

    addEducator = () => {
        this.setState({
            add: !this.state.add
        })
    }

    editToggle = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    openEdit=(selected)=>{
      this.setState({
          toEdit: selected,
      });
      this.editToggle();
    }

    render() {
        return (
            <div className="educatorPage__background">
                {this.props.user.admin && (
                    <>
                        <div className="card__createCard" onClick={this.addEducator}>
                            <div className="card__plusIconDiv">
                                <i class="fas fa-user-graduate fa-4x card__plusIcon"></i> <br />
                                <span>Add Educator</span>
                            </div>
                        </div>
                    </>
                )}
                {
                    this.state.add && <EducatorForm addEducator={this.addEducator}  singleEducator={{}}/>
                }
                {this.props.educator[0] && this.props.educator.map((edu, i) => (
                    <div className="card__structure" key={i}>
                        <img className="card__image" src={edu.image_url} />

                        <div className="card__details" >
                            <div className="card__title">
                                {edu.name}
                            </div>

                            <div className="card__description" >
                                {edu.bio}
                            </div>


                            <ul className="card__specialties">
                                Specialties:
                                {edu.specialties.map((specialty, i) => <li key={i} > - {specialty[1]}</li>)}
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
                                            <i onClick={() => this.deleteEducator(edu)} class="fas fa-trash-alt fa-lg"></i>
                                        </div>

                                        <div className="card__edit">
                                            {/*this passes the current educator to be set to the toEdit state and passed into the educatorform*/} 
                                            <i onClick={()=>{this.openEdit(edu)}} class="fas fa-user-edit fa-lg"></i>
                                        </div>
                                    </>
                                )
                            }


                        </div>
                    </div>
                ))}
                <pre>{JSON.stringify(this.state,null,2)}</pre>

            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Educators);
