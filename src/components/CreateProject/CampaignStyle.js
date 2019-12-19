import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

const styles = theme => ({
  root: {
    '&$checked': {
      color: '#422997',
    },
  },
  checked: {},
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class CampaignStyle extends React.Component {
  state = {
    radioValue: ''
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
    console.log(this.state);
  };

  handleRadioChange = event => {
    this.setState({ radioValue: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
    <>
      <FormGroup row>
          <p className="heading-tertiary">Select the Strategy's Tones</p>
          {this.props.tone[0] && 
          this.props.tone.map(item =>
          <FormControlLabel
            key={item.id}
            control={
              <Checkbox
                onChange={this.handleChange(`${item.type}`)}
                value={`${item.type}`}
                classes={{
                  root: classes.root,
                  checked: classes.checked,
                }}
              />
            }
            label={item.type}
          />)}
      </FormGroup>
      <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Formality</FormLabel>
          <RadioGroup
            aria-label="Formality"
            name="gender1"
            value={this.state.radioValue}
            className={classes.group}
            onChange={this.handleRadioChange}
          >
            <FormControlLabel value="Formal" control={<Radio />} label="Formal" />
            <FormControlLabel value="Informal" control={<Radio />} label="Informal" />
          </RadioGroup>
        </FormControl>
      <FormGroup row>
      <p className="heading-tertiary">Select the Strategy's Literary Techniques</p>
      {this.props.literaryTechnique[0] && 
      this.props.literaryTechnique.map(item =>
      <FormControlLabel
        key={item.id}
        control={
          <Checkbox
            onChange={this.handleChange(`${item.type}`)}
            value={`${item.type}`}
            classes={{
              root: classes.root,
              checked: classes.checked,
            }}
          />
        }
        label={item.type}
      />)}
  </FormGroup>
  </>
    );
  }
}

CampaignStyle.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    tone: state.tone,
    literaryTechnique: state.literaryTechnique,
  });

export default connect(mapStateToProps)(withStyles(styles)(CampaignStyle));