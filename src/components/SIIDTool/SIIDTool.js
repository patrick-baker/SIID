import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class SIIDTool extends Component {
  state = {
    text: "",
  }

  addText = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  analyze = () => {
    this.props.dispatch({
      type: "CREATE_PROJECT", payload: {
        ...this.props.form,
        text: this.state.text
      }
    })
  }



  componentDidUpdate() {
    if (this.props.reportReducer.id && this.props.reportReducer.project_token && !this.state.analyze) {
      this.props.history.push(`/report/${this.props.reportReducer.id}/${this.props.reportReducer.project_token}`);
    }
  }

  render() {
    return (
      <div style={{ height: '90vh', width: '100%' }} >
        <textarea
          // className='formInput__large' 
          style={{
            width: '90%',
            height: '100%',
            borderColor: '#422997'
          }}
          value={this.state.text}
          onChange={(event) => this.addText(event)} />


        <button className="button button__analyze" onClick={this.analyze}><i class="fas fa-cog"></i> Analyze</button>

      </div>

    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default withRouter(connect(mapStateToProps)(SIIDTool));;

