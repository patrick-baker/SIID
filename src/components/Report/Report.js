import React, { Component } from 'react';
import { connect } from 'react-redux';
import BubbleChart from './BubbleChartWrapper';
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
            url: `http://localhost:3000/#/report/${this.props.match.params.id}/${this.props.match.params.token}`
        })
    }

    copyToClipboard = (e) => {
        this.textArea.select();
        document.execCommand('copy');
        // This is just personal preference.
        // I prefer to not show the the whole text area selected.
        e.target.focus();
        this.setState({ successMessage: 'Copied!' });
    };

    componentWillUnmount = () => {
        this.props.dispatch({ type: "AUTO_ML_RESET" })
    }

    render() {
        return (
            <div className='page__pad' >
                {/* Only loads report if the url token matches the project token in DB */}
                {this.props.reportReducer.project_token === this.props.match.params.token &&
                    <div>
                        {this.props.user.id === this.props.reportReducer.user_id &&
                            <button onClick={(e) => this.copyToClipboard(e)}>Copy to Clipboard</button>}
                        <h4>{this.state.successMessage}</h4>
                        <h1>Report Number {this.props.match.params.id} </h1>
                        {/* {this.props.flagReducer[0] && <BubbleChart />} */}
                        <pre>
                            Report Reducer:
                        {JSON.stringify(this.props.reportReducer, null, 2)}
                            Flag Reducer:
                    {JSON.stringify(this.props.flagReducer, null, 2)}

                            Bias Reducer back from database: {this.props.biasDataReducer.status ? "YES" : "NO"}
                            {this.props.biasDataReducer.status && <>
                                {JSON.stringify(this.props.biasDataReducer.data, null, 2)}</>}

                            {/* Holds urls value */}
                            <textarea
                                ref={(textarea) => this.textArea = textarea}
                                value={this.state.url}
                            />
                        </pre>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Report);
