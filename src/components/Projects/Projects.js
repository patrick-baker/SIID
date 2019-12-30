import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Projects extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'GET_PROJECT' });
    }

    render() {
        return (
            <div>
                <h1>projects</h1>
                
                <pre>{JSON.stringify(this.props.project, null, 2)}</pre>
            </div>
        )
    }
}


const mapStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapStateToProps)(Projects)
