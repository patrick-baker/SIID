import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProgressStepper from '../ProgressStepper/ProgressStepper';

import SIIDTool from '../SIIDTool/SIIDTool';

import IntegrationsDropdown from './SelectIntegrations';
import TargetAudience from './TargetAudience';
import CampaignStyle from './CampaignStyle';
import CampaignGoals from './CampaignGoals';


class CreateProject extends Component {

  componentDidMount() {
    this.props.dispatch({type: 'FETCH_TONE'});
    this.props.dispatch({type: 'FETCH_LITERARY_TECHNIQUES'});
  }

  nextStep = () => {
    this.props.dispatch({type: 'NEXT_STEP'})
  }
  render() {
    return (
      <div className="flex-column">
        <div className="project-metadata-page flex-column">
          <p className="heading-primary">Steps to Make a Project:</p>
          <div className="flex-row-center overview-boxes">
            <div className="project-box flex-column"><p className="heading-secondary">Integrations</p></div>
            <div className="project-box flex-column"><p className="heading-secondary">Campaign Goals</p></div>
            <div className="project-box flex-column"><p className="heading-secondary">Target Audience</p></div>
            <div className="project-box flex-column"><p className="heading-secondary">Tone & Style</p></div>
            <div className="project-box flex-column"><p className="heading-secondary">Analyze</p></div>
          </div>
        </div>
        <div className="flex-row-center stepper">
          <div style={{width: '100%'}}>
            <ProgressStepper />
          </div>
        </div>
        <div className="flex-row-center flex-row-center__project-form">
          <IntegrationsDropdown />
          {this.props.step === 0 && <button onClick={this.nextStep}>Stepper Button</button>}
        </div>
        {this.props.step > 0 && <div className="flex-row-center flex-row-center__project-form">
          <CampaignGoals />
          {this.props.step === 1 && <button onClick={this.nextStep}>Stepper Button</button>}
        </div> }
        {this.props.step > 1 && <div className="flex-row-center flex-row-center__project-form">
          <TargetAudience />
          {this.props.step === 2 && <button onClick={this.nextStep}>Stepper Button</button>}
        </div> }
        {this.props.step > 2 && <div className="flex-row-center flex-row-center__project-form">
          <CampaignStyle />
          {this.props.step === 3 && <button onClick={this.nextStep}>Stepper Button</button>}
        </div> }

        {this.props.step === 4 && <SIIDTool />}
      {/* <pre>{JSON.stringify(this.props)}</pre> */} 
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(CreateProject);