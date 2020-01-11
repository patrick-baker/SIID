import React, { Component } from 'react';
import { connect } from 'react-redux';


class Tone extends Component {
    render() {
        return (
            <div className="report__tone">
                <div className="report__targetInfo__left">
                <h2>Target Audience:</h2>
                <table>
                <tr>
                    <td className="label">Age:</td><td>{this.props.reportReducer.target_audience_age}</td>
                    <td className="label">Gender:</td><td>{this.props.reportReducer.target_audience_gender}</td>                    
                    <td className="label">Region:</td><td>{this.props.reportReducer.target_audience_region}</td>
                    <td className="label">Language:</td><td>{this.props.reportReducer.target_audience_language}</td>
                </tr>
                <tr>
                    <td className="label">Race:</td><td>{this.props.reportReducer.target_audience_race}</td>
                    <td className="label">Ethnicity:</td><td>{this.props.reportReducer.target_audience_ethnicity}</td>                    
                    <td className="label">Interests:</td><td>{this.props.reportReducer.target_audience_interests}</td>
                    <td className="label">Talent Demographic:</td><td>{this.props.reportReducer.talent_demographic}</td>
                </tr>
                </table>
                </div>
              
     
                <div className="report__targetInfo__middle">
                <h2>Tone</h2>
                <ul className="report__targetInfo__list">
                    {this.props.reportReducer.formal ? <li>Formal</li> : <li>Informal</li>}
                    {this.props.reportReducer.tone[0] && this.props.reportReducer.tone.map(type => {
                        return <li>{type}</li>
                    })}
                </ul>
                </div>
                <div className="report__targetInfo__right">
                <h2>Literary Techniques</h2>
                <ul className="report__targetInfo__list">
                    {this.props.reportReducer.literaryTechniques[0] && this.props.reportReducer.literaryTechniques.map(lit => {
                        return <li>{lit}</li>
                    })}
                </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Tone);