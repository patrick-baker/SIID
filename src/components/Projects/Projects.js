import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectItem from './ProjectItem';

class Projects extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'GET_PROJECT' });
    }

    render() {
        return (
            <div>
                <h1>projects</h1>
                {this.props.project.map(item => {
                    console.log('in projects map project is: ', item)
                    return(
                        <ProjectItem key={item.id} item={item}/>
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

export default connect(mapStateToProps)(Projects)
