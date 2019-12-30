import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalInput from '../Modal/ModalInputAvg';

class CampaignGoalFields extends Component {

    handleChange = event => {
        this.props.dispatch({type: 'SET_FORM_METADATA', payload: {
          property: event.target.name, 
          value: event.target.value 
        }});
      };

    renderGoalFields = () => {
        if (this.props.form.campaign_goals === 'Lead Generation') {
            return (<>
                <ModalInput label={"CTR"} >
                    <input placeholder="Place text here..."
                        value={this.props.form.goals_ctr}
                        className="formInput__average"
                        name="goals_ctr"
                        onChange={this.handleChange}
                    />
                </ModalInput>
                <ModalInput label={"Conversion"} >
                    <input placeholder="Place text here..."
                        value={this.props.form.goals_conversion}
                        className="formInput__average"
                        name="goals_conversion"
                        onChange={this.handleChange}
                    />
                </ModalInput>
            </>)
        }
        else if (this.props.form.campaign_goals === 'Sales Enablement') {
            return (<>
                <ModalInput label={"Sales Conversion"} >
                    <input placeholder="Place text here..."
                        value={this.props.form.goals_sales_conversion}
                        className="formInput__average"
                        name="goals_sales_conversion"
                        onChange={this.handleChange}
                    />
                </ModalInput>
                <ModalInput label={"Sales Length"} >
                    <input placeholder="Place text here..."
                        value={this.props.form.goals_sales_length}
                        className="formInput__average"
                        name="goals_sales_length"
                        onChange={this.handleChange}
                    />
                </ModalInput>
                <ModalInput label={"Revenue Goals"} >
                    <input placeholder="Place text here..."
                        value={this.props.form.goals_revenue_goals}
                        className="formInput__average"
                        name="goals_revenue_goals"
                        onChange={this.handleChange}
                    />
                </ModalInput>
            </>)
        }
        else if (this.props.form.campaign_goals === 'Brand Awareness') {
            return (<>
                <ModalInput label={"Social Share"} >
                    <input placeholder="Place text here..."
                        value={this.props.form.goals_social_shares}
                        className="formInput__average"
                        name="goals_social_shares"
                        onChange={this.handleChange}
                    />
                </ModalInput>
                <ModalInput label={"Follow"} >
                    <input placeholder="Place text here..."
                        value={this.props.form.goals_follow}
                        className="formInput__average"
                        name="goals_follow"
                        onChange={this.handleChange}
                    />
                </ModalInput>
                <ModalInput label={"Impressions"} >
                    <input placeholder="Place text here..."
                        value={this.props.form.goals_impressions}
                        className="formInput__average"
                        name="goals_impressions"
                        onChange={this.handleChange}
                    />
                </ModalInput>
                <ModalInput label={"Views"} >
                    <input placeholder="Place text here..."
                        value={this.props.form.goals_views}
                        className="formInput__average"
                        name="goals_views"
                        onChange={this.handleChange}
                    />
                </ModalInput>
            </>)
        }
        else if (this.props.form.campaign_goals === 'Audience Engagement') {
            return (<>
                <ModalInput label={"Social Share"} >
                    <input placeholder="Place text here..."
                        value={this.props.form.goals_social_shares}
                        className="formInput__average"
                        name="goals_social_shares"
                        onChange={this.handleChange}
                    />
                </ModalInput>
                <ModalInput label={"Comments"} >
                    <input placeholder="Place text here..."
                        value={this.props.form.goals_comments}
                        className="formInput__average"
                        name="goals_comments"
                        onChange={this.handleChange}
                    />
                </ModalInput>
                <ModalInput label={"CTR"} >
                    <input placeholder="Place text here..."
                        value={this.props.form.goals_ctr}
                        className="formInput__average"
                        name="goals_ctr"
                        onChange={this.handleChange}
                    />
                </ModalInput>
            </>)
        } else return (
            <div></div>
        )
    }
    render() {

        return (
            <>
                <div>{this.renderGoalFields()}</div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    form: state.form
});

export default connect(mapStateToProps)(CampaignGoalFields);