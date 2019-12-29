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
        if (this.props.Goals === 'Lead Generation') {
            return (<>
                <ModalInput label={"CTR"} >
                    <input placeholder="Place text here..."
                        value={this.props.form.CTR}
                        className="formInput__average"
                        name="CTR"
                        onChange={this.handleChange}
                    />
                </ModalInput>
                <ModalInput label={"Conversion"} >
                    <input placeholder="Place text here..."
                        value={this.props.form.conversion}
                        className="formInput__average"
                        name="Conversion"
                        onChange={this.handleChange}
                    />
                </ModalInput>
            </>)
        }
        else if (this.props.Goals === 'Sales Enablement') {
            return (<>
                <ModalInput label={"Sales Conversion"} >
                    <input placeholder="Place text here..."
                        value={this.props.form.sales_conversion}
                        className="formInput__average"
                        name="sales_conversion"
                        onChange={this.handleChange}
                    />
                </ModalInput>
                <ModalInput label={"Conversion"} >
                    <input placeholder="Place text here..."
                        value={this.props.form.sales_length}
                        className="formInput__average"
                        name="sales_length"
                        onChange={this.handleChange}
                    />
                </ModalInput>
                <ModalInput label={"Revenue Goals"} >
                    <input placeholder="Place text here..."
                        value={this.props.form.revenue_goals}
                        className="formInput__average"
                        name="revenue_goals"
                        onChange={this.handleChange}
                    />
                </ModalInput>
            </>)
        }
        else if (this.props.Goals === 'Brand Awareness') {
            return (<>
                <ModalInput label={"Social Share"} >
                    <input placeholder="Place text here..."
                        value={this.props.form.social_share}
                        className="formInput__average"
                        name="social_share"
                        onChange={this.handleChange}
                    />
                </ModalInput>
                <ModalInput label={"Follow"} >
                    <input placeholder="Place text here..."
                        value={this.props.form.follow}
                        className="formInput__average"
                        name="follow"
                        onChange={this.handleChange}
                    />
                </ModalInput>
                <ModalInput label={"Impressions"} >
                    <input placeholder="Place text here..."
                        value={this.props.form.impressions}
                        className="formInput__average"
                        name="impressions"
                        onChange={this.handleChange}
                    />
                </ModalInput>
                <ModalInput label={"Views"} >
                    <input placeholder="Place text here..."
                        value={this.props.form.views}
                        className="formInput__average"
                        name="views"
                        onChange={this.handleChange}
                    />
                </ModalInput>
            </>)
        }
        else if (this.props.Goals === 'Audience Engagement') {
            return (<>
                <ModalInput label={"Social Share"} >
                    <input placeholder="Place text here..."
                        value={this.props.form.social_share}
                        className="formInput__average"
                        name="social_share"
                        onChange={this.handleChange}
                    />
                </ModalInput>
                <ModalInput label={"Comments"} >
                    <input placeholder="Place text here..."
                        value={this.props.form.comments}
                        className="formInput__average"
                        name="comments"
                        onChange={this.handleChange}
                    />
                </ModalInput>
                <ModalInput label={"CTR"} >
                    <input placeholder="Place text here..."
                        value={this.props.form.CTR}
                        className="formInput__average"
                        name="CTR"
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