import React, { Component } from 'react';
import { connect } from 'react-redux';

class Report extends Component {

    componentDidMount = () => {
        console.log(this.props.match.params.id);
        this.props.dispatch({type:"GET_BIAS_DATA",payload:{id:this.props.match.params.id}});
        this.props.dispatch({type:"GET_FLAGS",payload:{id:this.props.match.params.id}});
        this.props.dispatch({type:"GET_SPECIFIC_PROJECT",payload:{id:this.props.match.params.id}});
    }
    render() {
        return (
            <div className='page__pad' >
               <h1>Report Number {this.props.match.params.id} </h1>
                <pre>{JSON.stringify(this.props.reportReducer,null,2)}</pre>
                
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Report);
