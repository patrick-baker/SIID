import React, { Component } from 'react';
import { connect } from 'react-redux';


class SIIDTool extends Component {
    state = {
        text:""
    }

    addText = (event) => {
        this.setState({
            text:event.target.value
        })
    }

    analyze = () => {
        this.props.dispatch({type:"ANALYZE_TEXT",payload:this.state.text});
    }

  render() {
    return (
      <div>
        <textarea onChange={(event) => this.addText(event)}/>
        <button onClick={this.analyze}>Analyze</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(SIIDTool);