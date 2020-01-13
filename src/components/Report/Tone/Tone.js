import React, { Component } from 'react';
import { connect } from 'react-redux';
import CampaignGoals from '../CampaignGoals';



class Tone extends Component {
    render() {
        return (
            // <div className='report__flexBox'>
                {/* <div style={{ width: '50%' }}> */}
                {/* <div className="report__targetContainer">
 */}

                    {/* <div>
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
                </div> */}


                {/* <div className="report__campaignContainer"> */}
                    {/* <CampaignGoals /> */}

                    {/* <div className="report__targetInfo__middle">
                        <h2 className="report__header2" >Tone</h2>
                        <ul className="report__targetInfo__list">
                            {this.props.reportReducer.formal ? <li>Formal</li> : <li>Informal</li>}
                            {this.props.reportReducer.tone &&
                                this.props.reportReducer.tone[0] &&
                                this.props.reportReducer.tone.map(type => {
                                    return <li>{type.replace(/^\w/, c => c.toUpperCase())}</li>
                                })}
                        </ul>
                    </div> */}

                    {/* <table className="report__toneTable">
                        {this.props.reportReducer.formal ?
                            <>
                                <tr><td className="label"><p className='report__goalsData__noMargin' >Tone:</p></td></tr>
                                <tr><td className="datum">Formal</td></tr>
                            </>
                            :
                            <>
                                <tr><td className="label"><p className='report__goalsData__noMargin' >Tone:</p></td></tr>
                                <tr><td className="datum">Informal</td></tr>
                            </>
                            // <li>Formal</li> : <li>Informal</li>
                        }
                        {this.props.reportReducer.tone &&
                            this.props.reportReducer.tone[0] &&
                            this.props.reportReducer.tone.map(type => {
                                return <tr><td className="datum">{type.replace(/^\w/, c => c.toUpperCase())}</td></tr>
                                // return <li>{type.replace(/^\w/, c => c.toUpperCase())}</li>
                            })}
                    </table> */}

                    {/* <div className="report__targetInfo__right">
                        <table className="report__toneTable">
                            <tr><td className="label"><p className='report__goalsData__noMargin' >Literary Techniques:</p></td></tr>

                            {this.props.reportReducer.literaryTechniques &&
                                this.props.reportReducer.literaryTechniques[0] &&
                                this.props.reportReducer.literaryTechniques.map(lit => {
                                    return <tr><td className="datum">{lit.replace(/^\w/, c => c.toUpperCase())}</td></tr>
                                })}
                        </table>
                    </div>
                </div>
            </div > */}
        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Tone);