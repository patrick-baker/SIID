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
      <div style={{textAlign:'center'}}>
        <textarea
          value={this.state.text}
          onChange={(event) => this.addText(event)} 
          className='formInput__large'
          style={{width:'80rem',height:'30rem',fontSize:'1.6rem',lineHeight:'2.15rem'}}
          />


        <button className="button__next" onClick={this.analyze}><i class="fas fa-cog"></i> Analyze</button>

      </div>

    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default withRouter(connect(mapStateToProps)(SIIDTool));;

