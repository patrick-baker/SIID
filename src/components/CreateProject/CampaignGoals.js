import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import GoalFields from './CampaignGoalsFields';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class IntegrationsDropdown extends React.Component {
  state = {
    goal: '',
    labelWidth: 0,
  };

  handleChange = event => {
    this.props.dispatch({type: 'SET_FORM_METADATA', payload: {
      property: event.target.name, 
      value: event.target.value 
    }});
  };

  render() {
    const { classes } = this.props;

    return (
    <>
      <form className={classes.root} autoComplete="off">
        <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Choose Integration</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          name='goal'
          value={this.props.form.goal}
          onChange={this.handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Lead Generation'}>Lead Generation</MenuItem>
          <MenuItem value={'Sales Enablement'}>Sales Enablement</MenuItem>
          <MenuItem value={'Brand Awareness'}>Brand Awareness</MenuItem>
          <MenuItem value={'Audience Engagement'}>Audience Engagement</MenuItem>
        </Select>
      </FormControl>
      </form>
      <GoalFields Goals={this.props.form.goal} />
      </>
    );
  }
}

IntegrationsDropdown.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    form: state.form
 });

export default connect(mapStateToProps)(withStyles(styles)(IntegrationsDropdown));