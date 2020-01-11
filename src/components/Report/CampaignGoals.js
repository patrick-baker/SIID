import React, { Component } from 'react';
import { connect } from 'react-redux';

class CampaignGoals extends Component {
    render() {
        return (
            <div className="report__goals__textBox">
                <h2>CAMPAIGN GOALS:</h2>
                {/*conditionally rendered based on form selected goal*/}
                {
                    this.props.reportReducer.campaign_goals === "Lead Generation" &&
                    <><p>Lead Generation</p>
                        <p>{this.props.reportReducer.goals_conversion}</p>
                        <p>{this.props.reportReducer.goals_ctr}</p></>
                }

                {
                    this.props.reportReducer.campaign_goals === "Sales Enablement" &&
                    <><p>Sales Enablement</p>
                        <p>{this.props.reportReducer.goals_sales_conversion}</p>
                        <p>{this.props.reportReducer.goals_sales_length}</p>
                        <p>{this.props.reportReducer.goals_social_shares}</p></>
                }

                {
                    this.props.reportReducer.campaign_goals === "Brand Awareness" &&
                    <><p>Brand Awareness </p>
                        <p>{this.props.reportReducer.goals_social_shares}</p>
                        <p>{this.props.reportReducer.goals_follow}</p>
                        <p>{this.props.reportReducer.goals_impressions}</p>
                        <p>{this.props.reportReducer.goals_views}</p></>
                }

                {
                    this.props.reportReducer.campaign_goals === "Audience Engagement" &&
                    <><p>Audience Engagement</p>
                        <p>{this.props.reportReducer.goals_social_shares}</p>
                        <p>{this.props.reportReducer.goals_comments}</p>
                        <p>{this.props.reportReducer.goals_ctr}</p></>
                }
            </div>
        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(CampaignGoals);