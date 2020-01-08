import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class ReAnalyze extends Component {

    state = {
        text:this.props.reportReducer.text || ""
    }

    handleChange = (event) => {
        this.setState({
            text:event.target.value
        })
    }

    literaryTechniquesStructure = () => {
        let literaryTechniques = {};
        for(let technique of this.props.reportReducer.literaryTechniques) {
            literaryTechniques[technique] = true;
        }
        return literaryTechniques;
    }

    tonesStructure = () => {
        let tones = {};
        for (let tone of this.props.reportReducer.tone) {
            tones[tone] = true;
        }
        return tones;
    }

    analyze = () => {

        this.props.dispatch({
            type:"CREATE_PROJECT",
            payload:{
                ...this.props.reportReducer,
                text:this.state.text,
                literaryTechniques:this.literaryTechniquesStructure(),
                tones:this.tonesStructure()
            }
        })


        this.props.dispatch({
            type:"DELETE_PROJECT",
            payload:this.props.reportReducer.id,
        })



        this.props.dispatch({
            type:"CLEAR_REPORT"
        })
    }
    componentDidUpdate() {
        if (this.props.reportReducer.id && this.props.reportReducer.project_token && !this.state.analyze) {
          this.props.history.push(`/report/${this.props.reportReducer.id}/${this.props.reportReducer.project_token}`);
        }
      }

    render() {
        return (
            <div>
                <textarea value={this.state.text} onChange={event => this.handleChange(event)}/>
                <button onClick={this.analyze}>Analyze</button>
            </div>
        );
    }
}
const mapStateToProps = state => {
return state;
};
export default withRouter(connect(mapStateToProps)(ReAnalyze));