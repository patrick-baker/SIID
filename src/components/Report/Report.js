import React, { Component } from 'react';
import { connect } from 'react-redux';
import BubbleChart from './BubbleChartWrapper';

class Report extends Component {

    componentDidMount = () => {
        console.log(this.props.match.params.id);
        this.props.dispatch({ type: "GET_BIAS_DATA", payload: { id: this.props.match.params.id } });
        this.props.dispatch({ type: "GET_FLAGS", payload: { id: this.props.match.params.id } });
        this.props.dispatch({ type: "GET_SPECIFIC_PROJECT", payload: { id: this.props.match.params.id } });
    }
    render() {
        return (
            <div className='page__pad' >
                 <h1>Report Number {this.props.match.params.id} </h1>
                <pre>
                    Report Reducer:
                    {JSON.stringify(this.props.reportReducer, null, 2)}
                    Flag Reducer:
                {JSON.stringify(this.props.flagReducer, null, 2)}
                    Bias Reducer back from database:
                {JSON.stringify(this.props.biasDataReducer, null, 2)}</pre>

                <BubbleChart />
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Report);
