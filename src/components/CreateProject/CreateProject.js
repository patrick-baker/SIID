import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProgressStepper from '../ProgressStepper/ProgressStepper';

class CreateProject extends Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
        <div className="project-metadata-page flex-column">
          <p className="heading-primary">Steps to Make a Project:</p>
          <div className="flex-row-center overview-boxes">
            <div className="project-box flex-column"><p className="heading-secondary">Integrations</p></div>
            <div className="project-box flex-column"><p className="heading-secondary">Campaign Goals</p></div>
            <div className="project-box flex-column"><p className="heading-secondary">Target Audience</p></div>
            <div className="project-box flex-column"><p className="heading-secondary">Tone & Style</p></div>
          </div>
        </div>
        <div className="flex-row-center">
          <div className="stepper">
            <ProgressStepper />
          </div>
        </div>
        <div className="project-metadata-page">

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(CreateProject);