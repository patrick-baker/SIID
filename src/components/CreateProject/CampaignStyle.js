import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
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
  // sets an initial state of false for each tone and literary technique, to be togglable on component load
  componentDidMount() {
    this.props.tone.forEach(tone => {
      this.props.dispatch({ type: 'INITIALIZE_FORM_TONE', payload: { property: tone.type } });
    });
    this.props.literaryTechnique.forEach(technique => {
      this.props.dispatch({ type: 'INITIALIZE_FORM_LITERARY_TECHNIQUES', payload: { property: technique.type } });
    });
  }


  handleToneChange = event => {
    this.props.dispatch({
      type: 'FLIP_FORM_TONE', payload: {
        property: event.target.name,
      }
    });
  };

  handleLiteraryTechniqueChange = event => {
    this.props.dispatch({
      type: 'FLIP_FORM_LITERARY_TECHNIQUES', payload: {
        property: event.target.name,
      }
    });
  };

  handleRadioChange = event => {
    this.props.dispatch({
      type: 'SET_FORM_METADATA', payload: {
        property: 'formal', 
        value: event.target.value 
      }
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        {this.props.form.tones &&
          <FormGroup row>
            <p className="heading-tertiary">Select the Strategy's Tones</p>
            {this.props.tone[0] &&
              this.props.tone.map(item =>
                <FormControlLabel
                  key={item.id}
                  control={
                    <Checkbox
                      name={item.type}
                      value={this.props.form.tones[item.type]}
                      onChange={this.handleToneChange}
                      classes={{
                        root: classes.root,
                        checked: classes.checked,
                      }}
                    />
                  }
                  label={item.type}
                />)}
          </FormGroup>}
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Formality</FormLabel>
            <RadioGroup
              aria-label="Formality"
              name="formality"
              value={this.props.form.formal}
              className={classes.group}
              onChange={this.handleRadioChange}
            >
              <FormControlLabel value= "true" control={<Radio />} label="Formal" />
              <FormControlLabel value= "false" control={<Radio />} label="Informal" />
            </RadioGroup>
          </FormControl>
          {this.props.form.literaryTechniques &&
          <FormGroup row>
            <p className="heading-tertiary">Select the Strategy's Literary Techniques</p>
            {this.props.literaryTechnique[0] &&
              this.props.literaryTechnique.map(item =>
                <FormControlLabel
                  key={item.id}
                  control={
                    <Checkbox
                      name={item.type}
                      onChange={this.handleLiteraryTechniqueChange}
                      value={this.props.form.literaryTechniques[item.type]}
                      classes={{
                        root: classes.root,
                        checked: classes.checked,
                      }}
                    />
                  }
                  label={item.type}
                />)}
          </FormGroup>
          }
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
  form: state.form
});

export default connect(mapStateToProps)(withStyles(styles)(CampaignStyle));