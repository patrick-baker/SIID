import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalInput from '../Modal/ModalInputAvg';

class CampaignGoalFields extends Component {

    handleChange = (name) => {
        // this.props.dispatch({ type: 'HANDLE_GOAL_FIELDS', payload: { name: name, value: event.target.value } })
    }
    // create dispatch to update redux state for given property on handleChange

    renderGoalFields = () => {
        if (this.props.Goals === 'Lead_Generation') {
            return (<>
                <ModalInput label={"CTR"} >
                    <input placeholder="CTR"
                        // value={this.state.id}
                        className="formInput__average"
                        name="CTR"
                        onChange={() => this.handleChange('CTR')}
                    />
                </ModalInput>
                <ModalInput label={"Conversion"} >
                    <input placeholder="Conversion"
                        // value={this.state.id}
                        className="formInput__average"
                        name="Conversion"
                        onChange={() => this.handleChange('Conversion')}
                    />
                </ModalInput>
            </>)
        }
        else return (
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

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(CampaignGoalFields);