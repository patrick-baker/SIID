import React, { Component } from 'react';
import { connect } from 'react-redux';
import { thisExpression } from '@babel/types';

class Report extends Component {
    state = {
        url: '',
        successMessage: ''
    }

    componentDidMount = () => {
        console.log(this.props.match.params.id);
        this.props.dispatch({ type: "GET_BIAS_DATA", payload: { id: this.props.match.params.id } });
        this.props.dispatch({ type: "GET_FLAGS", payload: { id: this.props.match.params.id } });
        this.props.dispatch({ type: "GET_SPECIFIC_PROJECT", payload: { id: this.props.match.params.id } });
        this.setState({
            url: `http://localhost:3000/#/report/${this.props.match.params.id}`
        })
    }
    render() {
        return (
            <div className='page__pad' >
                {this.props.user.id === this.props.reportReducer.user_id && 
                <button>Copy to Clipboard</button>}
                <h1>Report Number {this.props.match.params.id} </h1>
                <pre>
                    Report Reducer:
                    {JSON.stringify(this.props.reportReducer, null, 2)}
                    Flag Reducer:
                {JSON.stringify(this.props.flagReducer, null, 2)}
                    Bias Reducer back from database:
                {JSON.stringify(this.props.biasDataReducer, null, 2)}</pre>
                <h3>url: {this.state.url}</h3>
            </div>
                )
            }
        }
        
        const mapStateToProps = state => state;
        
        export default connect(mapStateToProps)(Report);
