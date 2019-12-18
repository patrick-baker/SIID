import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown } from "semantic-ui-react";

const options = [
    {key: 'salesforce', text: 'Salesforce', value: 'Salesforce'},
    {key: 'adobe', text: 'Adobe Marketing', value: 'Adobe'},
    {key: 'hubspot', text: 'Hubspot', value: 'Hubspot'},
]

const Dropdown
class SelectIntegrations extends Component {
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

export default connect(mapStateToProps)(SelectIntegrations);