import React, { Component } from 'react'
import { connect } from 'react-redux';


class DeleteProject extends Component {
    handleDeleteConfirmation = () => {
        console.log("in handleDelete Confirmation with project", this.props.specificProject.title, this.props.specificProject.client)
        this.props.dispatch({ type: "DELETE_PROJECT", payload: this.props.specificProject.id })
    }
    render() {
        return (
            <div className="modal__structure">
                <div className="modal__modal-content-small" >
                    <i onClick={this.props.handleDeleteModal} className="fas fa-times fa-2x modal__cancelIcon"></i>
                    <div className="modal__deleteBody">
                        {/* Regular Body of Delete Modal */}

                        {this.props.project.projectDeleteStatus.messageFromServer === '' &&
                            <>
                                <h2 className="heading-secondary">Are you sure you want to delete this project?</h2>
                                <br />
                                <h3 className="heading-tertiary">Title: {this.props.specificProject.title}</h3>
                                <br />
                                <p className="body-normal">Client: {this.props.specificProject.client}</p>
                                <p></p>
                                <div className="modal__centeredButtons">
                                    <button className="button__generic" onClick={this.props.handleDeleteModal}>Cancel</button>
                                    <button className="button__generic" onClick={this.handleDeleteConfirmation}>Delete</button>
                                </div>
                            </>
                        }
                        {/*  Success */}
                        {this.props.project.projectDeleteStatus.messageFromServer === 'delete success' &&
                            <>
                                <h2 className="heading-secondary">Delete Successful</h2>
                                <div className="modal__centeredButtons">
                                    <button className="button__generic" onClick={this.props.handleDeleteModal}>Close</button>
                                </div>
                            </>
                        }
                        {/* Error */}
                        {this.props.project.projectDeleteStatus.messageFromServer === 'delete failure' &&
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
export default connect(mapReduxStateToProps)(DeleteProject);
