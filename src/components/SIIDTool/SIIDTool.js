import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';


class SIIDTool extends Component {
    state = {
        text:""
    }

    addText = (event) => {
        this.setState({
            text:event.target.value
        });
    }

    analyze = () => {
        this.props.dispatch({type:"CREATE_PROJECT",payload:{
            ...this.props.form,
            text:this.state.text
        }});
        this.props.history.push(`/report/1`);
    }

  render() {
    return (
      <div className="page__pad" >
        <textarea className='formInput__large' onChange={(event) => this.addText(event)}/>
        <button className="button__analyze" onClick={this.analyze}><i class="fas fa-cog"></i> Analyze</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default withRouter(connect(mapStateToProps)(SIIDTool));