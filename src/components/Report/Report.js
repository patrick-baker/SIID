import React, { Component } from 'react';
import { connect } from 'react-redux';
import BubbleChart from './BubbleChartWrapper';
import DonutChartWrapper from './DonutChart.js/DonutChartWrapper';
import Spinner from '../Spinner/Spinner';
import moment from 'moment';

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
            <div className="content">
            {
                this.props.reportReducer.analyzed === false &&
                <Spinner/>
            }
            {
                this.props.reportReducer.analyzed === true && 
                <div className='page__pad' style={{background: 'white'}}>
                {/* Only loads report if the url token matches the project token in DB */}
                {this.props.reportReducer.project_token === this.props.match.params.token &&
                    <div>
                        {this.props.user.id === this.props.reportReducer.user_id &&
                            <button onClick={(e) => this.copyToClipboard(e)}>Copy to Clipboard</button>}
                        <h4>{this.state.successMessage}</h4>
                        <h1>{this.props.reportReducer.title} </h1>
                        <div className="reportMeta">
                            <h2>Client:</h2><p>{this.props.reportReducer.client}</p>
                            <h2>Description:</h2><p>{this.props.reportReducer.description}</p>
                            <h2>Date:</h2><p>{moment(this.props.reportReducer.date_created).format("MMM Do, YYYY")}</p>
                            <h2>Strategy:</h2><p>{this.props.reportReducer.project_strategy}</p>
                            <h2>GOALS:</h2>
                                <p>Lead Generation</p>
                                <p>{this.props.reportReducer.goals_conversion}</p>
                                <p>{this.props.reportReducer.goals_ctr}</p>

                                <p>Sales Enablement</p>
                                <p>{this.props.reportReducer.goals_sales_conversion}</p>
                                <p>{this.props.reportReducer.goals_sales_length}</p>
                                <p>{this.props.reportReducer.goals_social_shares}</p>
                                <p>Brand Awareness </p>
                                <p>{this.props.reportReducer.goals_social_shares}</p>
                                <p>{this.props.reportReducer.goals_follow}</p>
                                <p>{this.props.reportReducer.goals_impressions}</p>
                                <p>{this.props.reportReducer.goals_views}</p>
                                <p>Audience Engagement</p>
                                <p>{this.props.reportReducer.goals_social_shares}</p>
                                <p>{this.props.reportReducer.goals_comments}</p>
                                <p>{this.props.reportReducer.goals_ctr}</p>

                            <h2>Target Audience:</h2>
                                <p>{this.props.reportReducer.target_audience_age}</p>
                                <p>{this.props.reportReducer.talent_demographic}</p>
                                <p>{this.props.reportReducer.target_audience_ethnicity}</p>
                                <p>{this.props.reportReducer.target_audience_gender}</p>
                                <p>{this.props.reportReducer.target_audience_interests}</p>
                                <p>{this.props.reportReducer.target_audience_language}</p>
                                <p>{this.props.reportReducer.target_audience_race}</p>
                                <p>{this.props.reportReducer.target_audience_region}</p>


                        </div>
                        {
                    this.props.flagReducer[0] 
                    && this.props.flagReducer[0].messages 
                    && this.props.flagReducer[0].messages.messages 
                    && <BubbleChart />
                    }

                    {this.props.biasDataReducer.status &&
                        <DonutChartWrapper />
                    }

                 {/*         <pre>
                            Report Reducer:
                        {JSON.stringify(this.props.reportReducer, null, 2)}
                            Flag Reducer:
                    {JSON.stringify(this.props.flagReducer, null, 2)}
                            Bias Reducer back from database: {this.props.biasDataReducer.status ? "YES" : "NO"}
                            {this.props.biasDataReducer.status && <>
                                {JSON.stringify(this.props.biasDataReducer.data, null, 2)}</>}

                        </pre>  */}

                            {/* Holds urls value */}
                    {/*         <textarea
                                className="formInput__report-textarea"
                                ref={(textarea) => this.textArea = textarea}
                                value={this.state.url}
                            /> */}
                    </div>
                }
            </div>
            }
        </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Report);
