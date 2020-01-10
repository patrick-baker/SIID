import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ModalInput from '../Modal/ModalInputAvg';

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

class BasicInfo extends React.Component {
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

        <ModalInput label={"Title"} >
                    <input placeholder="Campaign Title"
                        value={this.props.form.title}
                        className="formInput__average"
                        name="title"
                        onChange={this.handleChange}
                        style={{margin:'0 0 2rem 0',padding:'.75rem',width:'20rem'}}
                    />
                </ModalInput>
                <ModalInput label={"Client"} >
                    <input placeholder="Client Name"
                        value={this.props.form.client}
                        className="formInput__average"
                        name="client"
                        onChange={this.handleChange}
                        style={{margin:'0 0 2rem 0',padding:'.75rem',width:'20rem'}}
                    />
                </ModalInput>
                <ModalInput label={"Description"} >
                    <textarea placeholder="Place text here..."
                        value={this.props.form.description}
                        className="formInput__large"
                        name="description"
                        onChange={this.handleChange}
                    />
                </ModalInput>

      </form>
    );
  }
}

BasicInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
   form: state.form
});

export default connect(mapStateToProps)(withStyles(styles)(BasicInfo));