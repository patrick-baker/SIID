import React, { Component } from 'react';
import { connect } from 'react-redux';

class TargetAudience extends Component {

    render() {
        return (
            // <div ref="chart" className="report__targetAudience">
            <div>
                <div>
                    <i className="fas fa-users fa-2x"></i><h2 className="report__header2" >Target Audience</h2>
                    <table className="report__toneTable">
                        <tr><td className="label"><p className='report__goalsData' >Age</p></td><td className="datum">{this.props.reportReducer.target_audience_age}</td></tr>
                        <tr><td className="label"><p className='report__goalsData' >Gender</p></td><td className="datum">{this.props.reportReducer.target_audience_gender}</td></tr>
                        <tr><td className="label"><p className='report__goalsData' >Interests</p></td><td className="datum">{this.props.reportReducer.target_audience_interests}</td></tr>
                        <tr><td className="label"><p className='report__goalsData' >Race</p></td><td className="datum">{this.props.reportReducer.target_audience_race}</td></tr>
                        <tr><td className="label"><p className='report__goalsData' >Ethnicity</p></td><td className="datum">{this.props.reportReducer.target_audience_ethnicity}</td></tr>
                    </table>
                </div>
                <div >
                    <table className="report__toneTable">
                        <tr><td><i className="fas fa-globe-americas"></i></td><td className="label">Region</td><td className="datum">{this.props.reportReducer.target_audience_region}</td></tr>
                        <tr><td><i className="fas fa-language"></i></td><td className="label">Language</td><td className="datum">{this.props.reportReducer.target_audience_language}</td></tr>
                        <tr><td><i className="far fa-id-card"></i></td><td className="label">Talent Demographic</td><td className="datum">{this.props.reportReducer.talent_demographic}</td></tr>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(TargetAudience);