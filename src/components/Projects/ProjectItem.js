import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { withRouter } from 'react-router-dom';


class ProjectItem extends Component {

    routeToReport = () => {
        this.props.history.push(`/report/${this.props.item.id}/${this.props.item.project_token}`);
    }

    render() {
        // Create vars for project object and date
        const project = this.props.item;
        const date = project.date_created;
        return (
            // Create cards for each project
            <div>
                <h1 className="project__title">{project.title}</h1>
                <h2 className="project__client label"> Client: {project.client}</h2>

                {
                    project.description.length > 90 ? 
                    <p className="caption">{project.description.substring(0,90)}...</p> :
                    <p className="caption">{project.description}</p>
                }

                
                <h3 className="project__date">{moment(date).format("MMM Do, YYYY")}</h3>
                <button className="button__report" onClick={this.routeToReport}>REPORT</button>
                <div className="card__delete">
                    <i onClick={() => this.props.deleteProject(project)} class="fas fa-trash-alt fa-lg"></i>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState
}

export default withRouter(connect(mapStateToProps)(ProjectItem));
