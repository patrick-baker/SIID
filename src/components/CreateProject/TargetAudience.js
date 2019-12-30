import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ModalInput from '../Modal/ModalInputAvg';

const styles = () => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  }
});

class TargetAudience extends React.Component {

  handleChange = event => {
    this.props.dispatch({type: 'SET_FORM_METADATA', payload: {
      property: event.target.name, 
      value: event.target.value 
    }});
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <ModalInput label={"Age"} >
                    <input placeholder="Place text here..."
                        value={this.props.form.target_audience_age}
                        className="formInput__average"
                        name="target_audience_age"
                        onChange={this.handleChange}
                    />
                </ModalInput>
                <ModalInput label={"Race"} >
                    <input placeholder="Place text here..."
                        value={this.props.form.target_audience_race}
                        className="formInput__average"
                        name="target_audience_race"
                        onChange={this.handleChange}
                    />
                </ModalInput>
                <ModalInput label={"Region"} >
                    <input placeholder="Place text here..."
                        value={this.props.form.target_audience_region}
                        className="formInput__average"
                        name="target_audience_region"
                        onChange={this.handleChange}
                    />
                </ModalInput>
                <ModalInput label={"Ethnicity"} >
                    <input placeholder="Place text here..."
                        value={this.props.form.target_audience_ethnicity}
                        className="formInput__average"
                        name="target_audience_ethnicity"
                        onChange={this.handleChange}
                    />
                </ModalInput>
                <ModalInput label={"Gender"} >
                    <input placeholder="Place text here..."
                        value={this.props.form.target_audience_gender}
                        className="formInput__average"
                        name="target_audience_gender"
                        onChange={this.handleChange}
                    />
                </ModalInput>
                <ModalInput label={"Interests"} >
                    <input placeholder="Place text here..."
                        value={this.props.form.target_audience_interests}
                        className="formInput__average"
                        name="target_audience_interests"
                        onChange={this.handleChange}
                    />
                </ModalInput>
                <ModalInput label={"Language"} >
                    <input placeholder="Place text here..."
                        value={this.props.form.target_audience_language}
                        className="formInput__average"
                        name="target_audience_language"
                        onChange={this.handleChange}
                    />
                </ModalInput>
                <ModalInput label={"Talent Demographic"} >
                    <input placeholder="Place text here..."
                        value={this.props.form.talent_demographic}
                        className="formInput__average"
                        name="talent_demographic"
                        onChange={this.handleChange}
                    />
                </ModalInput>
      </form>
    );
  }
}

TargetAudience.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    form: state.form,
  });

export default connect(mapStateToProps)(withStyles(styles)(TargetAudience));