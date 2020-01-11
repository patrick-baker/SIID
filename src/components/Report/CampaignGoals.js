import React, { Component } from 'react';
import { connect } from 'react-redux';

class CampaignGoals extends Component {
    render() {
        return (
            <div className="report__goals__textBox">
                {/*conditionally rendered based on form selected goal*/}
                {
                    this.props.reportReducer.campaign_goals === "Lead Generation" &&
                    <><h2>CAMPAIGN GOALS: <span>Lead Generation</span></h2>
                        <p>Conversion: <span>{this.props.reportReducer.goals_conversion}</span></p>
                        <p>CTR: <span>{this.props.reportReducer.goals_ctr}</span></p></>
                }

                {
                    this.props.reportReducer.campaign_goals === "Sales Enablement" &&
                    <><h2>CAMPAIGN GOALS: <span>Sales Enablement</span></h2>
                        <p>Sales Conversion: <span>{this.props.reportReducer.goals_sales_conversion}</span></p>
                        <p>Sales Length: <span>{this.props.reportReducer.goals_sales_length}</span></p>
                        <p>Social Shares: <span>{this.props.reportReducer.goals_social_shares}</span></p></>
                }

                {
                    this.props.reportReducer.campaign_goals === "Brand Awareness" &&
                    <><h2>CAMPAIGN GOALS: <span>Brand Awareness</span></h2>
                        <p>Social Shares: <span>{this.props.reportReducer.goals_social_shares}</span></p>
                        <p>Follows: <span>{this.props.reportReducer.goals_follow}</span></p>
                        <p>Impressions: <span>{this.props.reportReducer.goals_impressions}</span></p>
                        <p>Views: <span>{this.props.reportReducer.goals_views}</span></p></>
                }

                {
                    this.props.reportReducer.campaign_goals === "Audience Engagement" &&
                    <><h2>CAMPAIGN GOALS: <span>Audience Engagement</span></h2>
                        <p>Social Shares: <span>{this.props.reportReducer.goals_social_shares}</span></p>
                        <p>Comments: <span>{this.props.reportReducer.goals_comments}</span></p>
                        <p>CTR: <span>{this.props.reportReducer.goals_ctr}</span></p></>
                }
            </div>
        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(CampaignGoals);