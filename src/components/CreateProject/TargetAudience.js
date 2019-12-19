import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class TargetAudience extends React.Component {

//   handleChange = name => event => {
//     this.setState({ [name]: event.target.value });
//   };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          label="Age"
          className={classes.textField}
        //   value={this.state.name}
        //   onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
          label="Race"
          className={classes.textField}
        //   value={this.state.name}
        //   onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
          label="Region"
          className={classes.textField}
        //   value={this.state.name}
        //   onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
          label="Ethnicity"
          className={classes.textField}
        //   value={this.state.name}
        //   onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
          label="Gender"
          className={classes.textField}
        //   value={this.state.name}
        //   onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
          label="Interests"
          className={classes.textField}
        //   value={this.state.name}
        //   onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
          label="Language"
          className={classes.textField}
        //   value={this.state.name}
        //   onChange={this.handleChange('name')}
          margin="normal"
        />
        {/* {this.props.step === 2 && } */}
      </form>
    );
  }
}

TargetAudience.propTypes = {
  classes: PropTypes.object.isRequired,
};

// const mapStateToProps = state => ({
//     step: state.step,
//   });

export default withStyles(styles)(TargetAudience);