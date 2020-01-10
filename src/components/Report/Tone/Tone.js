import React, { Component } from 'react';
import { connect } from 'react-redux';


class Tone extends Component {
    render() {
        return (
            <div className="report__tone">
                <h2>Target Audience:</h2>
                <p className="report__header3">Age:
                    <span className="report__text">{this.props.reportReducer.target_audience_age}</span>
                    Gender:
                    <span className="report__text">{this.props.reportReducer.target_audience_gender}</span>
                    Region:
                    <span className="report__text">    {this.props.reportReducer.target_audience_region}   </span>
                </p>
                <p>{this.props.reportReducer.talent_demographic}</p>
                <p>{this.props.reportReducer.target_audience_ethnicity}</p>
  
                <p>{this.props.reportReducer.target_audience_interests}</p>
                <p>{this.props.reportReducer.target_audience_language}</p>
                <p>{this.props.reportReducer.target_audience_race}</p>
     

                <h2>Tone</h2>
                <ul>
                    {this.props.reportReducer.formal ? <li>Formal</li> : <li>Informal</li>}
                    {this.props.reportReducer.tone.map(type => {
                        return <li>{type}</li>
                    })}
                </ul>
                <h2>Literary Techniques</h2>
                <ul>
                    {this.props.reportReducer.literaryTechniques.map(lit => {
                        return <li>{lit}</li>
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Tone);