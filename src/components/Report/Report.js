import React, { Component } from 'react';
import { connect } from 'react-redux';

class Report extends Component {

    componentDidMount = () => {
        console.log(this.props.match.params.id);
    }
    render() {
        return (
            <div className='page__pad' >
                <pre>{this.props.match.params.id}</pre>
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Report);
