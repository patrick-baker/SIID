import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class ReAnalyze extends Component {

    state = {
        text: this.props.reportReducer.text || "",
        currentId:'',
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    literaryTechniquesStructure = () => {
        let literaryTechniques = {};
        for (let technique of this.props.reportReducer.literaryTechniques) {
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
            type: "UPDATE_PROJECT",
            payload: {
                ...this.props.reportReducer,
                text: this.state.text,
                literaryTechniques: this.literaryTechniquesStructure(),
                tones: this.tonesStructure()
            }
        });
    }

    // componentDidMount = () => {
    //     this.setState({
    //         currentId:this.props.reportReducer.id
    //     })

    // }


    // componentDidUpdate = () => {
    //     console.log('DJDJSKNNKJNDSJKC');
    //     if (this.state.currentId != this.props.reportReducer.id) {
    //         console.log('CURRENT ID',this.state.currentId)
    //         console.log('props id',this.props.reportReducer.id);
    //         this.props.history.push(`/report/${this.props.reportReducer.id}/${this.props.reportReducer.project_token}`);
    //     }
    // }



    render() {
        return (
            <div>
                <textarea value={this.state.text} onChange={event => this.handleChange(event)} />
                <button onClick={this.analyze}>Analyze</button>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return state;
};
export default withRouter(connect(mapStateToProps)(ReAnalyze));