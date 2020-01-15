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
  // styles checkboxes if checked
  root: {
    '&$checked': {
      color: '#422997',
    },
  },
  // for radio buttons
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

  // flips boolean state of tone checkboxes in formReducer
  handleToneChange = event => {
    this.props.dispatch({
      type: 'FLIP_FORM_TONE', payload: {
        property: event.target.name,
      }
    });
  };

  // flips boolean state of literary technique checkboxes in formReducer
  handleLiteraryTechniqueChange = event => {
    this.props.dispatch({
      type: 'FLIP_FORM_LITERARY_TECHNIQUES', payload: {
        property: event.target.name,
      }
    });
  };

  // flips boolean state of formality radio buttons in formReducer
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
      <div className="flex-row-center">
        {this.props.form.tones &&
          <>
            <div>
              <h3 className="heading-tertiary" style={{width:'20rem'}}>Select the Strategy's Tones</h3>
            
            {/* maps out all tones in database to checkboxes */}
            <FormGroup column style={{padding:'1.5rem 6rem 0 6rem',alignContent:'center',justifyContent:'center',textAlign:'center'}}>
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
              </FormGroup>
           
            </div>
          </>
        }

        {/* creates radio buttons to toggle formality of ad campaign */}
        <FormControl component="fieldset" className={classes.formControl} style={{marginTop:'.45rem'}}>
          <FormLabel component="legend" style={{ fontSize: '2rem', color: 'black',width:'20rem'}}>Formality</FormLabel>
          <RadioGroup
            aria-label="Formality"
            name="formality"
            value={this.props.form.formal}
            className={classes.group}
            onChange={this.handleRadioChange}
            style={{alignContent:'center',justifyContent:'center',textAlign:'center',marginTop:'4rem'}}
          >
            <FormControlLabel value="true" control={<Radio />} label="Formal" />
            <FormControlLabel value="false" control={<Radio />} label="Informal" />
          </RadioGroup>
        </FormControl>

        {/* maps out all literary techniques in database to checkboxes */}
        {this.props.form.literaryTechniques &&
          <div className="flex-column">
            <p className="heading-tertiary" style={{width:'20rem'}}>Select the Strategy's Literary Techniques</p>
            <FormGroup column style={{marginTop:'1.8rem'}}>
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
          </div>
        }
      </div>
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