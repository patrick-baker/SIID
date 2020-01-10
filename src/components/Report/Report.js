import React, { Component } from 'react';
import { connect } from 'react-redux';
import BubbleChart from './BubbleChartWrapper';
import DonutChartWrapper from './DonutChart.js/DonutChartWrapper';
import BubbleSuggestions from './BubbleSuggestions';
import Spinner from '../Spinner/Spinner';
import moment from 'moment';
import SIIDTool from '../SIIDTool/SIIDTool';
import ReAnalyze from '../ReAnalyze/ReAnalyze';
import BiasTable from '../BiasTable/BiasTable'
import ExpansionPanel from '../ExpansionPanel/ExpansionPanel';


class Report extends Component {
    state = {
        url: '',
        successMessage: '',
    }

    componentDidMount = () => {
        console.log(this.props.match.params.id);
        this.props.dispatch({ type: "GET_BIAS_DATA", payload: { id: this.props.match.params.id } });
        this.props.dispatch({ type: "GET_FLAGS", payload: { id: this.props.match.params.id } });
        this.props.dispatch({ type: "GET_SPECIFIC_PROJECT", payload: { id: this.props.match.params.id } });
        this.setState({
            url: `http://localhost:3000/#/report/${this.props.match.params.id}/${this.props.match.params.token}`
        })
        console.log(this.props);
    }

    cleanBubbleData = (data) => {
        //const data=this.props.flagReducer[0].messages.messages;
        console.log('this is flag reducer data', data);
        //grab array of distinct problem words
        const distinctWords = [...new Set(data.map(obj => obj.actual))];

        //loop new array and build sub arrays for each value 
        const newData = distinctWords.map((word, i) => {
            return { [word]: data.filter(obj => obj.actual === word) }
        })

        //clean up the data by making it an object 
        const clean = newData.map((d, i) => {
            const current = d[distinctWords[i]];
            const newObj = {
                actual: current[0].actual,
                count: current.length,
                expected: current[0].expected,
                messsage: current[0].message,
                note: current[0].note,
            }
            return newObj;
        });
        return clean;
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
                {this.props.reportReducer.analyzed === false && <Spinner />}
                {this.props.reportReducer.analyzed === true &&
                    // <div className='page__pad' style={{ background: 'white' }}>
                    <div>
                        {/* Only loads report if the url token matches the project token in DB */}
                        {this.props.reportReducer.project_token === this.props.match.params.token &&
                            <div className="report">
                                <div className="report__header">

                                    <h1 className="heading__noMargin">{this.props.reportReducer.title} </h1>
                                    <h2>Date:</h2><p>{moment(this.props.reportReducer.date_created).format("MMM Do, YYYY")}</p>
                                    <h2>Client:</h2><p>{this.props.reportReducer.client}</p>
                                    <h2>Description:</h2><p>{this.props.reportReducer.description}</p>

                                    <h2>GOALS:</h2>
                                    {/*conditionally rendered based on form selected goal*/}
                                    {this.props.reportReducer.campaign_goals === "Lead Generation" &&
                                        <><p>Lead Generation</p>
                                            <p>{this.props.reportReducer.goals_conversion}</p>
                                            <p>{this.props.reportReducer.goals_ctr}</p></>}

                                    {this.props.reportReducer.campaign_goals === "Sales Enablement" &&
                                        <><p>Sales Enablement</p>
                                            <p>{this.props.reportReducer.goals_sales_conversion}</p>
                                            <p>{this.props.reportReducer.goals_sales_length}</p>
                                            <p>{this.props.reportReducer.goals_social_shares}</p></>}

                                    {this.props.reportReducer.campaign_goals === "Brand Awareness" &&
                                        <><p>Brand Awareness </p>
                                            <p>{this.props.reportReducer.goals_social_shares}</p>
                                            <p>{this.props.reportReducer.goals_follow}</p>
                                            <p>{this.props.reportReducer.goals_impressions}</p>
                                            <p>{this.props.reportReducer.goals_views}</p></>}

                                    {this.props.reportReducer.campaign_goals === "Audience Engagement" &&
                                        <><p>Audience Engagement</p>
                                            <p>{this.props.reportReducer.goals_social_shares}</p>
                                            <p>{this.props.reportReducer.goals_comments}</p>
                                            <p>{this.props.reportReducer.goals_ctr}</p></>}
                                </div>


                                <div className="report__bubble__chart">
                                    {this.props.flagReducer[0]
                                        && this.props.flagReducer[0].messages
                                        && this.props.flagReducer[0].messages.messages
                                        && <BubbleChart data={this.cleanBubbleData(this.props.flagReducer[0].messages.messages)} />}
                                </div>
                                <div className="report__bubble__text">
                                    <h2>This is text in bubble</h2>
                                    {this.props.flagReducer[0]
                                        && this.props.flagReducer[0].messages
                                        && this.props.flagReducer[0].messages.messages
                                        && <BubbleSuggestions data={this.cleanBubbleData(this.props.flagReducer[0].messages.messages)} />
                                    }

                                </div>

                                <div className="report__donut__text">
                                    <h2>Target Audience:</h2>
                                    <p>{this.props.reportReducer.target_audience_age}</p>
                                    <p>{this.props.reportReducer.talent_demographic}</p>
                                    <p>{this.props.reportReducer.target_audience_ethnicity}</p>
                                    <p>{this.props.reportReducer.target_audience_gender}</p>
                                    <p>{this.props.reportReducer.target_audience_interests}</p>
                                    <p>{this.props.reportReducer.target_audience_language}</p>
                                    <p>{this.props.reportReducer.target_audience_race}</p>
                                    <p>{this.props.reportReducer.target_audience_region}</p>

                                    <h2>Tone</h2>
                                    <ul>
                                        {this.props.reportReducer.formal ? <li>Formal</li> : <li>Informal</li>}
                                        {this.props.reportReducer.tone.map(type => {
                                            return <li>{type}</li>
                                        })}
                                    </ul>
                                    <h2>Literary Techniques</h2>
                                    <ul>
                                        {this.props.reportReducer.literaryTechniques.map(lit => {
                                            return <li>{lit}</li>
                                        })}
                                    </ul>
                                </div>
                                <div className="report__donut__chart">
                                    {this.props.biasDataReducer.status && <DonutChartWrapper />}
                                </div>
                                <div className="report__educator"></div>
                                {/*    <div className="report__reanlyze">
                            <ReAnalyze />
                        </div> */}
                                {/*    <div className="report__copy">
                            {this.props.user.id === this.props.reportReducer.user_id &&
                            <button onClick={(e) => this.copyToClipboard(e)}>Copy to Clipboard</button>}
                        </div> */}


                                {/*     <div className="report__bubble__chart">
                                    {this.props.flagReducer[0] && this.props.flagReducer[0].messages
                                        && this.props.flagReducer[0].messages.messages
                                        && <BubbleChart data={this.cleanBubbleData(this.props.flagReducer[0].messages.messages)} />}
                                </div>
                                <div className="report__bubble__text">
                                    <h2>This is text in bubble</h2>
                                </div>

                                <div className="report__donut__text">
                                    <h2>Target Audience:</h2>
                                    <p>{this.props.reportReducer.target_audience_age}</p>
                                    <p>{this.props.reportReducer.talent_demographic}</p>
                                    <p>{this.props.reportReducer.target_audience_ethnicity}</p>
                                    <p>{this.props.reportReducer.target_audience_gender}</p>
                                    <p>{this.props.reportReducer.target_audience_interests}</p>
                                    <p>{this.props.reportReducer.target_audience_language}</p>
                                    <p>{this.props.reportReducer.target_audience_race}</p>
                                    <p>{this.props.reportReducer.target_audience_region}</p>

                                    <h2>Tone</h2>
                                    <ul>
                                        {this.props.reportReducer.formal ? <li>Formal</li> : <li>Informal</li>}
                                        {this.props.reportReducer.tone && this.props.reportReducer.tone.map(type => {
                                            return <li>{type}</li>
                                        })}
                                    </ul>
                                    <h2>Literary Techniques</h2>
                                    <ul>
                                        {this.props.reportReducer.literaryTechniques && this.props.reportReducer.literaryTechniques.map(lit => {
                                            return <li>{lit}</li>
                                        })}
                                    </ul>
                                </div>
                                <div className="report__donut__chart">
                                    {this.props.biasDataReducer.status && <DonutChartWrapper />}
                                </div> */}


                                {/* Holds urls value */}
                                <textarea className="formInput__report-textarea"
                                    ref={(textarea) => this.textArea = textarea}
                                    value={this.state.url} />

                            </div>
                        }
                    </div>
                }


                

                <BiasTable data={this.props.biasDataReducer.data} />
                  <ExpansionPanel />

            </div>


        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Report);
