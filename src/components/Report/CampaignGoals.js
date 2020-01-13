import React, { Component } from 'react';
import { connect } from 'react-redux';

class CampaignGoals extends Component {
    render() {
        return (
            <div className="report__campaignContainer">
                {/*conditionally rendered based on form selected goal*/}
                {
                    this.props.reportReducer.campaign_goals === "Lead Generation" &&
                    <><h2 className='report__header2'>Campaign Goals: <span>Lead Generation</span></h2>
                        {/* <p>Conversion: <span>{this.props.reportReducer.goals_conversion}</span></p>
                        <p>CTR: <span>{this.props.reportReducer.goals_ctr}</span></p></> */}

                        {/* <> */}
                        <table className="report__toneTable">
                            <tr><td className="label">Conversion</td><td className="datum">{this.props.reportReducer.goals_conversion}</td></tr>
                            <tr><td className="label">CTR</td><td className="datum">{this.props.reportReducer.goals_ctr}</td></tr>
                        </table>
                    </>
                }

                {
                    this.props.reportReducer.campaign_goals === "Sales Enablement" &&
                    <><h2 className="report__header2">Campaign Goals: <span>Sales Enablement</span></h2>
                        {/* <p>Sales Conversion: <span>{this.props.reportReducer.goals_sales_conversion}</span></p>
                        <p>Sales Length: <span>{this.props.reportReducer.goals_sales_length}</span></p>
                        <p>Social Shares: <span>{this.props.reportReducer.goals_social_shares}</span></p></> */}

                        <table className="report__toneTable">
                            <tr><td className="label">Sales Conversion</td><td className="datum">{this.props.reportReducer.goals_sales_conversion}</td></tr>
                            <tr><td className="label">Sales Length</td><td className="datum">{this.props.reportReducer.goals_sales_length}</td></tr>
                            <tr><td className="label">Social Shares</td><td className="datum">{this.props.reportReducer.goals_social_shares}</td></tr>
                        </table>
                    </>
                }

                {
                    this.props.reportReducer.campaign_goals === "Brand Awareness" &&
                    <><h2 className='report__header2'>Campaign Goals: <span style={{ color: '#5B63DA' }}>Brand Awareness</span></h2>
                        {/* <p className='report__goalsData' >Social Shares: <span style={{ color: '#5B63DA' }}>{this.props.reportReducer.goals_social_shares}</span></p>
                        <p className='report__goalsData'>Follows: <span style={{ color: '#5B63DA' }}>{this.props.reportReducer.goals_follow}</span></p>
                        <p className='report__goalsData'>Impressions: <span style={{ color: '#5B63DA' }}>{this.props.reportReducer.goals_impressions}</span></p>
                        <p className='report__goalsData'>Views: <span style={{ color: '#5B63DA' }}>{this.props.reportReducer.goals_views}</span></p></> */}

                        <table className="report__toneTable">
                            <tr><td className="label">Social Shares</td><td className="datum">{this.props.reportReducer.goals_social_shares}</td></tr>
                            <tr><td className="label">Follows</td><td className="datum">{this.props.reportReducer.goals_follow}</td></tr>
                            <tr><td className="label">Impressions</td><td className="datum">{this.props.reportReducer.goals_impressions}</td></tr>
                            <tr><td className="label">Views</td><td className="datum">{this.props.reportReducer.goals_views}</td></tr>
                        </table>
                    </>
                }

                {
                    this.props.reportReducer.campaign_goals === "Audience Engagement" &&
                    <><h2 className="report__header2">Campaign Goals: <span>Audience Engagement</span></h2>
                        {/* <p>Social Shares: <span>{this.props.reportReducer.goals_social_shares}</span></p>
                        <p>Comments: <span>{this.props.reportReducer.goals_comments}</span></p>
                        <p>CTR: <span>{this.props.reportReducer.goals_ctr}</span></p></> */}
                        <table className="report__toneTable">
                            <tr><td className="label">Social Shares:</td><td className="datum">{this.props.reportReducer.goals_social_shares}</td></tr>
                            <tr><td className="label">Comments</td><td className="datum">{this.props.reportReducer.goals_comments}</td></tr>
                            <tr><td className="label">CTR</td><td className="datum">{this.props.reportReducer.goals_ctr}</td></tr>
                        </table>
                    </>
                }
            </div>
        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(CampaignGoals);