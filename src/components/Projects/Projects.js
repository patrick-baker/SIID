import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectItem from './ProjectItem';

class Projects extends Component {
    componentDidMount() {
        // Get all projects for this user
        this.props.dispatch({ type: 'GET_PROJECT' });
    }

    handleClick = () => {
        console.log('button clicked');
        
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

export default connect(mapStateToProps)(Projects)
