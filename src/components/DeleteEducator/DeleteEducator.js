import React, { Component } from 'react'
import { connect } from 'react-redux';


class DeleteEducator extends Component {
    handleDeleteConfirmation = () => {
        console.log("in handleDeleteEducator Confirmation with id", this.props.specificEducator) // find
        this.props.dispatch({ type: "DELETE_EDUCATOR", payload: this.props.specificEducator }) // find
    }
    render() {
        return (
            <div className="modal__structure">
                <div className="modal__modal-content-small" >
                    <i onClick={this.props.handleDeleteModal} className="fas fa-times fa-2x modal__cancelIcon"></i>
                    <div className="modal__deleteBody">
                        {/* Regular Body of Delete Modal */}

                        {this.props.educator.educatorDeleteStatus.messageFromServer === '' &&
                            <>
                                <h2 className="heading-secondary">Are you sure you want to delete this expert?</h2>
                                <br />
                                <h3 className="heading-tertiary" >Name: {this.props.specificEducator.name}</h3> {/* FIND this  */}
                                <br />
                                
                                <div className="modal__centeredButtons">
                                    <button className="button__generic" onClick={this.props.handleDeleteModal}>Cancel</button>
                                    <button className="button__generic" onClick={this.handleDeleteConfirmation}>Delete</button>
                                </div>
                            </>
                        }
                        {/*  Success */}
                        {this.props.educator.educatorDeleteStatus.messageFromServer === 'delete success' &&
                            <>
                                <h2 className="heading-secondary">Delete Successful</h2>
                                <div className="modal__centeredButtons">
                                    <button className="button__generic" onClick={this.props.handleDeleteModal}>Close</button>
                                </div>
                            </>
                        }
                        {/* Error */}
                        {this.props.educator.educatorDeleteStatus.messageFromServer === 'delete failure' &&
                            <>
                                <h2 className="heading-secondary">Delete Failed</h2>
                                <div className="modal__centeredButtons">
                                    <button className="button__generic" onClick={this.props.handleDeleteModal}>Close</button>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
const mapReduxStateToProps = (reduxState) => {
    return reduxState
}
export default connect(mapReduxStateToProps)(DeleteEducator);
