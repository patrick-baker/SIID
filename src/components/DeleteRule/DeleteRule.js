import React, { Component } from 'react'
import { connect } from 'react-redux';


class DeleteRule extends Component {
    handleDeleteConfirmation = () => {
        console.log("in handleDelete Confirmation with id", this.props.specificRule.id)
        this.props.dispatch({ type: "DELETE_RULE", payload: this.props.specificRule.id })
    }
    render() {
        return (
            <div className="modal__structure">
                <div className="modal__modal-content-small" >
                    <i onClick={this.props.handleDeleteModal} className="fas fa-times fa-2x modal__cancelIcon"></i>
                    <div className="modal__deleteBody">
                        {/* Regular Body of Delete Modal */}

                        {this.props.rule.ruleDeleteStatus.messageFromServer === '' &&
                            <>
                                <h2 className="heading-secondary">Are you sure you want to delete this rule?</h2>
                                <br />
                                <h3 className="heading-tertiary">Title: {this.props.specificRule.data.id}</h3>
                                <br />
                                <p className="body-normal">The term "{Object.keys(this.props.specificRule.data.inconsiderate)[0]}" can be inconsiderate, replace it with "{Object.keys(this.props.specificRule.data.considerate)[0]}" </p>
                                <p></p>
                                <div className="modal__centeredButtons">
                                    <button className="button__generic" onClick={this.props.handleDeleteModal}>Cancel</button>
                                    <button className="button__generic" onClick={this.handleDeleteConfirmation}>Delete</button>
                                </div>
                            </>
                        }
                        {/*  Success */}
                        {this.props.rule.ruleDeleteStatus.messageFromServer === 'delete success' &&
                            <>
                                <h2 className="heading-secondary">Delete Successful</h2>
                                <div className="modal__centeredButtons">
                                    <button className="button__generic" onClick={this.props.handleDeleteModal}>Close</button>
                                </div>
                            </>
                        }
                        {/* Error */}
                        {this.props.rule.ruleDeleteStatus.messageFromServer === 'delete failure' &&
                            <>
                                <h2 className="heading-secondary">Delete Failed, Try Again</h2>
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
export default connect(mapReduxStateToProps)(DeleteRule);
