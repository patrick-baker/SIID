import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class ReAnalyze extends Component {

    componentDidMount = () => {
        console.log('REPORT REDUCER',this.props.reportReducer);
    }

    handleChange = (event) => {
        this.props.dispatch({type:'EDIT_TEXT',payload:event.target.value})
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

    render() {
        return (
            <div>
                <textarea 
                    value={this.props.reportReducer.text} 
                    onChange={event => this.handleChange(event)} 
                    className='formInput__large'
                    // style={{width:'110rem',height:'20rem',fontSize:'1.6rem'}}
                    style={{width:'100%',height:'20rem',fontSize:'1.6rem'}}
                />
                <button className="button__next"  style={{marginLeft:'90rem'}} onClick={this.analyze}><i class="fas fa-cog"></i> Analyze</button>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return state;
};
export default withRouter(connect(mapStateToProps)(ReAnalyze));