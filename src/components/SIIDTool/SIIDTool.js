import React, { Component } from 'react';
import { connect } from 'react-redux';


class SIIDTool extends Component {
    state = {
        text:""
    }
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(SIIDTool);