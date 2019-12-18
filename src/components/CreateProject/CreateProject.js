import React from 'react';
import { connect } from 'react-redux';
import ProgressStepper from '../ProgressStepper/ProgressStepper';

const CreateProject = (props) => (
  <div>
    <h1 id="welcome">
      Welcome, { props.user.username }!
    </h1>
    <p>Your ID is: {props.user.id}</p>
    <div className="flex">
    <div>
    <ProgressStepper />
    </div>
    </div>
  </div>
);

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(CreateProject);