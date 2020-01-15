import React, { Component } from 'react';
import { connect } from 'react-redux';
import { scroller } from 'react-scroll'

import BasicInfo from './BasicInfo'
import CampaignStyle from './CampaignStyle';
import CampaignGoals from './CampaignGoals';
import ProgressStepper from '../ProgressStepper/ProgressStepper';
import SIIDTool from '../SIIDTool/SIIDTool';
import SelectIntegrations from './SelectIntegrations';
import TargetAudience from './TargetAudience';

class CreateProject extends Component {

  state = {
    inputError: false
  }

  // fetches tones and literary techniques from database to be executed in toneSaga and literaryTechniqueSaga
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_TONE' });
    this.props.dispatch({ type: 'FETCH_LITERARY_TECHNIQUES' });
  }

  // function to be run on each button click, rendering the next section and furthering the stepper
  nextStep = (id) => {
    //requires the title, client, and description to have values to move on
    if (this.props.form.title &&
      this.props.form.client &&
      this.props.form.description
    ) {
      // dispatches to stepReducer to move the progress stepper forward
      this.props.dispatch({ type: 'NEXT_STEP' })
      // scrolls down the page to the next section when it renders
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
      // renders the error if the basic info section is not filled out
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

          <h3 className="heading-secondary" style={{margin:'0 0 3rem 0'}}>Where did you create your marketing strategy?</h3>
          <div className="">
            <SelectIntegrations />
            {/* renders button only if this is the current step */}
            {this.props.step === 0 && <button className="button__next" onClick={() => this.nextStep('goals')}>Continue <i class="fas fa-arrow-down"></i></button>}
            {/* <br/> */}
          </div>
        </div>
        {/* Only renders this on the previous section's completion */}
        {this.props.step > 0 &&
          <div id="goals" className="flex-column flex-column__project-form">
            <h3 className="heading-secondary" style={{margin:'3rem 0 3rem 0'}}>Please describe your campaign goals.</h3>
            <div className="">
              <CampaignGoals />
              {/* renders button only if this is the current step */}
              {this.props.step === 1 && <button className="button__next" onClick={() => this.nextStep('audience')}>Continue <i class="fas fa-arrow-down"></i></button>}
            </div>
          </div>
        }
        {/* Only renders this on the previous section's completion */}
        {this.props.step > 1 &&
          <div id="audience" className="flex-column flex-column__project-form">
            <h3 className="heading-secondary" style={{margin:'3rem 0 3rem 0'}}>Please describe your target audience.</h3>
            <div className="">
              <TargetAudience />
              {/* renders button only if this is the current step */}
              {this.props.step === 2 && <button className="button__next" onClick={() => this.nextStep('tones')}>Continue <i class="fas fa-arrow-down"></i></button>}
            </div>
          </div>
        }
        {/* Only renders this on the previous section's completion */}
        {this.props.step > 2 &&
          <div id="tones" className="flex-column flex-column__project-form">
            <h3 className="heading-secondary" style={{margin:'3rem 0 3rem 0'}}>Please choose the Tones and Techniques associated with your strategy document.</h3>
            <div className="flex-row-center flex-row-center__project-form">
              <CampaignStyle />
            </div>
            {/* renders button only if this is the current step */}
            {this.props.step === 3 && <button className="button__next" onClick={() => this.nextStep('tool')}>Continue <i class="fas fa-arrow-down"></i></button>}
          </div>}
          {/* Only renders this on the previous section's completion */}
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