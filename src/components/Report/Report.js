import React, { Component } from 'react';
import { connect } from 'react-redux';
import BubbleChart from './BubbleChartWrapper';
import PieChart from './PieChart.js/PieChartWrapper';
import TotalBias from './TotalBias.js/TotalBias';
import BubbleSuggestions from './BubbleSuggestions';
import Spinner from '../Spinner/Spinner';
import moment from 'moment';
import SIIDTool from '../SIIDTool/SIIDTool';
import ReAnalyze from '../ReAnalyze/ReAnalyze';
import BiasTable from '../BiasTable/BiasTable'
import ExpansionPanel from '../ExpansionPanel/ExpansionPanel';
import CampaignGoals from './CampaignGoals';
import Header from './Header';
// import Tone from './Tone/Tone';
import EducatorsOnReport from '../EducatorsOnReport/EducatorsOnReport';
import DonutWrapper from './TotalBias.js/TotalBias';
import TargetAudience from './TargetAudience';
import Tone from './Tone';
import LiteraryTechniques from './LiteraryTechniques';

class Report extends Component {
    state = {
        url: '',
    }

    componentDidMount = () => {
        console.log(this.props.match.params.id);
        this.props.dispatch({ type: "GET_BIAS_DATA", payload: { id: this.props.match.params.id } });
        this.props.dispatch({ type: "GET_FLAGS", payload: { id: this.props.match.params.id } });
        this.props.dispatch({ type: "GET_SPECIFIC_PROJECT", payload: { id: this.props.match.params.id } });
        this.setState({
            url: `http://localhost:3000/#/report/${this.props.match.params.id}/${this.props.match.params.token}`
        })
        this.props.dispatch({ type: "GET_PROJECT_EDUCATORS", payload: { id: this.props.match.params.id } });
        console.log(this.props);
    }

    cleanBubbleData = (data) => {
        //const data=this.props.flagReducer[0].messages.messages;
        //console.log('this is flag reducer data', data);
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
                                {/* Project title, client, date and description */}
                                <div className="report__header">
                                    <Header url={`http://localhost:3000/#/report/${this.props.match.params.id}/${this.props.match.params.token}`} />
                                </div>

                                {/* <div className="report__header__dateClient" style={{ display: 'inline-block', border: '1px solid black' }}> */}

                                {/* <div style={{ border: '1px solid black', width: '100%', gridColumnStart: '1', gridColumnEnd: '11', gridRowStart: '3', gridRowEnd: '7' }}> */}

                                {/* Re-text Bubble Chart */}
                                <div className="report__bubble__chart">
                                    {this.props.flagReducer[0]
                                        && this.props.flagReducer[0].messages
                                        && this.props.flagReducer[0].messages.messages
                                        && <BubbleChart data={this.cleanBubbleData(this.props.flagReducer[0].messages.messages)} />}
                                </div>

                                {/* Re-Text Bubble Chart Words & Suggestions */}
                                <div className="report__bubble__connector ">
                                </div>

                                <div className="report__bubble__background">
                                </div>

                                <div className="report__bubble__header">
                                    <h1 className="report__header2__noMargin">Words to Consider</h1>
                                    <h2>These words were flagged by the rules-based system as being possibly problematic if used in the wrong context.</h2>
                                </div>
                                <div className="report__bubble__text">
                                    {this.props.flagReducer[0]
                                        && this.props.flagReducer[0].messages
                                        && this.props.flagReducer[0].messages.messages
                                        && <BubbleSuggestions data={this.cleanBubbleData(this.props.flagReducer[0].messages.messages)} />
                                    }
                                </div>
                                {/* </div> */}
                                {/* Target Audience, Tone, and Literary Techniques information */}
                                {/* <div className="report__targetInfo">
                                    <Tone />
                                </div> */}

                                <div className="report__targetAudience">
                                    <TargetAudience />
                                </div>

                                <div className="report__dottedBorder">
                                    <div className="report__tone">
                                        <Tone />
                                    </div>

                                    <div className="report__literaryTechniques">
                                        <LiteraryTechniques />
                                    </div>

                                    <div className="report__campaignGoals">
                                        <CampaignGoals />
                                    </div>
                                </div>

                                {/* Header for Bias/Machine Learning section */}
                                {/* <div className="report__pie__text__header">
                                    <h1>PIE CHART OF BIASES</h1>
                                    <h2>Areas of sensitivity flagged by machine learning.</h2>
                                </div> */}


                                {/* Table of Bias breakdown */}
                                <div className="report__pie__text">
                                    <BiasTable data={this.props.biasDataReducer.data} />
                                </div>

                                {/* <div className="report__bubble__background">
                                </div> */}

                                {/* Total Percentage for Bias Counts */}
                                <div className="report__totalBias">
                                    {this.props.biasDataReducer.status && <TotalBias />}
                                </div>
                                

                                {/* Pie Chart for Bias Counts */}
                                <div className="report__pie__chart">
                                    {this.props.biasDataReducer.status && <PieChart />}
                                </div>

                                {/* List of suggested educators */}
                                <div className="report__educator__container">
                                    <div className="report__educator__heading">
                                        <h1>Experts</h1>
                                        <h2>These experts match the sensitivities in your text.</h2>
                                    </div>
                                    <div className="report__educator">
                                       {this.props.reportReducer.educators.length > 0 && <EducatorsOnReport educators={this.props.reportReducer.educators} />
     } </div>
                                </div>

                                {/* Popup to re-analyze text */}
                                <div className="report__reanalyze">
                                    <ExpansionPanel text={this.props.reportReducer.text} />
                                </div>
                            </div>
                        }

                    </div>
                }

                <pre>{JSON.stringify(this.props.reportReducer.data, 2, null)}</pre>

            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Report);
