import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  // styles for the form component
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  }
});

class IntegrationsDropdown extends React.Component {
  // dispatches corresponding form information to the formReducer
  handleChange = event => {
    this.props.dispatch({type: 'SET_FORM_METADATA', payload: {
      property: event.target.name, 
      value: event.target.value 
    }});
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off" className="flex-column">
        <FormControl variant="filled" className={classes.formControl}>
        <InputLabel style={{fontSize:'13px',color:'#5B63DA'}} id="demo-simple-select-filled-label">Choose Integration</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          name='integration'
          value={this.props.form.integration}
          onChange={this.handleChange}
          style={{width:'20rem',height:'5rem',border:'1px solid #5B63DA',borderBottom:'none',backgroundColor:'white'}}
        >
          <MenuItem style={{height:'5rem',widht:'6rem'}} value={'None'}>None</MenuItem>
          <MenuItem style={{height:'5rem',widht:'6rem'}} value={'Salesforce'}>Salesforce</MenuItem>
          <MenuItem style={{height:'5rem',widht:'6rem'}} value={'Adobe'}>Adobe Marketing</MenuItem>
          <MenuItem style={{height:'5rem',widht:'6rem'}} value={'Hubspot'}>Hubspot</MenuItem>
        </Select>
      </FormControl>
      </form>
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