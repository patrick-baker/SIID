import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { withRouter } from 'react-router-dom';


class ProjectItem extends Component {

    routeToReport = () => {
        this.props.history.push(`/report/${this.props.item.id}`);
    }

    handleDeleteProject = (id) => {
        this.props.dispatch({type: 'REMOVE_PROJECT', payload: id})
    }

    render() {
        // Create vars for project object and date
        const project = this.props.item;
        const date = project.date_created;
        return (
            // Create cards for each project
            <div>
                <h1 className="project__title heading-tertiary">{project.title}</h1>
                <h3 className="project__date body-bold">{moment(date).format("MMM Do, YYYY")}</h3>
                <h2 className="project__client label">{project.client}</h2>
                <p className="caption">{project.description}</p>
                <button className="button__text" onClick={this.routeToReport}>REPORT</button>
                <i onClick={() => this.handleDeleteProject(project.id)} class="fas fa-trash-alt fa-lg"></i>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState
}

export default withRouter(connect(mapStateToProps)(ProjectItem));
