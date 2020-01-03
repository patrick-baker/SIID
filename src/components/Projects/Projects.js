import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectItem from './ProjectItem';
import { withRouter } from 'react-router-dom'

class Projects extends Component {
    state={
        deleteOpen: false,
        deleteOpenProject: null
    }

    handleDelete = (project) => {
        // set current project in local state

        // If closed, then open:
        if (!this.state.deleteOpen) {
            this.setState({
                deleteOpenProject: project,
                deleteOpen: true
            })
        }
        // If open, close and set ID to null
        // Pass this fuction as props to modal box
        if (this.state.deleteOpen) {
            this.setState({
                deleteOpenProject: null,
                deleteOpen: false
            })
            this.props.dispatch({ type: "PROJECT_DEL_RESET" })
        }
    }
    componentDidMount() {
        // Get all projects for this user
        this.props.dispatch({ type: 'GET_PROJECT' });
        // Clear out reducers
        this.props.dispatch({type: 'CLEAR_PROJECT'});
        this.props.dispatch({ type: 'CLEAR_REPORT'})
        // Should clear form next but we'll keep it this way for testing.
    }

    handleClick = () => {
        // clears prior project metadata from redux when user chooses to create new project
        this.props.dispatch({ type: 'CLEAR_FORM_METADATA'});
        // resets the stepper to step 1 on create project page
        this.props.dispatch({ type: 'RESET_STEPPER'});
        this.props.history.push(`/createproject`);
    }

    render() {
        return (
            <div>
                {/* Display Create Project card */}
                <div className="card__project">
                    <div className="card__details">
                        <h1 className="heading-secondary">CREATE NEW PROJECT</h1>
                        <button onClick={this.handleClick}><i class="fas fa-plus"></i></button>
                    </div>
                </div>
                {/* Display past project cards */}
                {this.props.project.map(item => {
                    console.log('in projects map project is: ', item)
                    return (
                        <div className="card__project">
                            <ProjectItem key={item.id} item={item} />
                        </div>
                    )
                })}
                <pre>{JSON.stringify(this.props.project, null, 2)}</pre>
            </div>
        )
    }
}


const mapStateToProps = (reduxState) => {
    return reduxState
}

export default withRouter(connect(mapStateToProps)(Projects))
