import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProjectItem extends Component {

    render() {
        const project = this.props.item;
        return (
            <div>
                <h1>{project.title}</h1>
                <h2>{project.client}</h2>
                <h3>{project.date_created}</h3>
                <p>{project.description}</p>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapStateToProps)(ProjectItem)
