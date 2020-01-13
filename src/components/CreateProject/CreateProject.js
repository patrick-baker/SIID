import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProgressStepper from '../ProgressStepper/ProgressStepper';
import { Events, animateScroll as scroll, scroller } from 'react-scroll'


import SIIDTool from '../SIIDTool/SIIDTool';

import SelectIntegrations from './SelectIntegrations';
import TargetAudience from './TargetAudience';
import CampaignStyle from './CampaignStyle';
import CampaignGoals from './CampaignGoals';
import BasicInfo from './BasicInfo'

class CreateProject extends Component {

    autoSubmitOne = () => {
        this.props.dispatch({
            type: 'SET_FORM_AUTOFILL', payload: {
                "title": "Bicycle Safety",
                "client": "Schwinn",
                "description": "Pushing for higher Bicycle Safety Standards",
                "integration": 'Hubspot'
            }
        });
    }
    autoSubmitTwo = () => {
        this.props.dispatch({
            type: 'SET_FORM_AUTOFILL', payload: {
                "goals_social_shares": "2,500 shares",
                "goals_follow": "5,000 new followers",
                "goals_impressions": "600,000 impressions",
                "goals_views": '500,000 unique views'
            }
        });
    }
    autoSubmitThree = () => {
        this.props.dispatch({
            type: 'SET_FORM_AUTOFILL', payload: {
                "target_audience_age": "24-36",
                "target_audience_race": "All",
                "target_audience_region": "Midwest",
                "target_audience_ethnicity": "American (US)",
                "target_audience_gender": "Male",
                "target_audience_interests": "Outdoors, Hiking, Cycling",
                "target_audience_language": "English",
                "talent_demographic":"African American and White Athletic Males"
            }
        });
    }
    state = {
        inputError: false
    }

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_TONE' });
        this.props.dispatch({ type: 'FETCH_LITERARY_TECHNIQUES' });
    }

    nextStep = (id) => {

        if (this.props.form.title &&
            this.props.form.client &&
            this.props.form.description
        ) {



            this.props.dispatch({ type: 'NEXT_STEP' })
            setTimeout(function () {
                scroller.scrollTo(id, {
                    duration: 1000,
                    delay: 0,
                    smooth: 'easeInOutCubic'
                })
            }, 0)

            this.setState({
                inputError: false
            })

        } else {

            setTimeout(function () {
                scroller.scrollTo('basic', {
                    duration: 1000,
                    delay: 0,
                    smooth: 'easeInOutCubic'
                })
            }, 0)

            this.setState({
                inputError: true
            })
        }
    }

    render() {
        return (
            <div className="flex-column content">
                <div className="project-metadata-page flex-column">
                    <p className="heading-primary">Steps to Make a Project:</p>
                    <div className="flex-row-center overview-boxes">
                        <div className="project-box flex-column"><p className="heading-secondary">Basics & Integrations</p></div>
                        <div className="project-box flex-column"><p className="heading-secondary">Campaign Goals</p></div>
                        <div className="project-box flex-column"><p className="heading-secondary">Target Audience</p></div>
                        <div className="project-box flex-column"><p className="heading-secondary">Tone & Style</p></div>
                    </div>
                </div>
                <div className="flex-row-center stepper">
                    <div style={{ width: '100%' }}>
                        <ProgressStepper />
                    </div>
                </div>
                <div className="flex-column flex-column__project-form">
                    <h3 className="heading-secondary">Campaign Basics</h3>
                    {
                        this.state.inputError && <span className="errorMessage">Campaign Basics are required</span>
                    }
                    <div className="flex-row-center flex-row-center__project-form">
                        <BasicInfo />
                    </div>

                    <h3 className="heading-secondary" style={{ margin: '0 0 3rem 0' }} onClick={this.autoSubmitOne}>Where did you create your marketing strategy?</h3>
                    <div className="">
                        <SelectIntegrations />
                        {this.props.step === 0 && <button className="button__next" onClick={() => this.nextStep('goals')}>Continue <i class="fas fa-arrow-down"></i></button>}
                        {/* <br/> */}
                    </div>
                </div>
                {this.props.step > 0 &&
                    <div id="goals" className="flex-column flex-column__project-form">
                        <h3 className="heading-secondary" style={{ margin: '3rem 0 3rem 0' }} onClick={this.autoSubmitTwo}>Please describe your campaign goals.</h3>
                        <div className="">
                            <CampaignGoals />
                            {this.props.step === 1 && <button className="button__next" onClick={() => this.nextStep('audience')}>Continue <i class="fas fa-arrow-down"></i></button>}
                        </div>
                    </div>
                }
                {this.props.step > 1 &&
                    <div id="audience" className="flex-column flex-column__project-form">
                        <h3 className="heading-secondary" style={{ margin: '3rem 0 3rem 0' }} onClick={this.autoSubmitThree}>Please describe your target audience.</h3>
                        <div className="">
                            <TargetAudience />
                            {this.props.step === 2 && <button className="button__next" onClick={() => this.nextStep('tones')}>Continue <i class="fas fa-arrow-down"></i></button>}
                        </div>
                    </div>
                }
                {this.props.step > 2 &&
                    <div id="tones" className="flex-column flex-column__project-form">
                        <h3 className="heading-secondary" style={{ margin: '3rem 0 3rem 0' }}>Please choose the Tones and Techniques associated with your strategy document.</h3>
                        <div className="flex-row-center flex-row-center__project-form">
                            <CampaignStyle />
                        </div>
                        {this.props.step === 3 && <button className="button__next" onClick={() => this.nextStep('tool')}>Continue <i class="fas fa-arrow-down"></i></button>}
                    </div>}
                {this.props.step === 4 &&
                    (
                        <div id="tool">
                            <SIIDTool />
                        </div>
                    )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps)(CreateProject);