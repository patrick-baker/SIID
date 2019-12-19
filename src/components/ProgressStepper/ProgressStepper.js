import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import LanguageIcon from '@material-ui/icons/Language';
import PeopleIcon from '@material-ui/icons/People';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  connectorActive: {
    '& $connectorLine': {
      backgroundImage:
        'linear-gradient( 136deg, #5B63DA 0%, #9E8DF8 100%)'
    },
  },
  connectorCompleted: {
    '& $connectorLine': {
      backgroundImage:
        'linear-gradient( 136deg, #5B63DA 0%, #9E8DF8 100%)'
    },
  },
  connectorDisabled: {
    '& $connectorLine': {
      borderColor: 'grey',
    },
  },
  connectorLine: {
    transition: theme.transitions.create('border-color'),
    height: 6,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 4,
  }
});

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, #422997 0%, #5B63DA 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, #704AD6 0%, #5B63DA 100%)',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <ThreeSixtyIcon />,
    2: <ThumbUpIcon />,
    3: <PeopleIcon />,
    4: <LanguageIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

function getSteps() {
  return ['Select Integrations.', 'Choose the Campaign Goals.', 'What is the Target Audience?', 'Style and Tone?'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'What application is the text from?';
    case 1:
      return 'What is your Campaign Goal?';
    case 2:
      return 'Who are you targeting your ad to?';
    case 3:
        return 'What is the Style and Tone of your strategy?'
    default:
      return 'Unknown stepIndex';
  }
}

class ProgressStepper extends React.Component {

  render() {
    const { classes } = this.props;
    const activeStep = this.props.step;
    const steps = getSteps();
    const connector = (
      <StepConnector
        classes={{
          active: classes.connectorActive,
          completed: classes.connectorCompleted,
          disabled: classes.connectorDisabled,
          line: classes.connectorLine,
        }}
      />
    );

    return (
      <div className={classes.root}>
        <Stepper alternativeLabel activeStep={activeStep} connector={connector}>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {/* <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              <div>
              </div>
            </div>
          )}
        </div> */}
      </div>
    );
  }
}

ProgressStepper.propTypes = {
  classes: PropTypes.object,
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(withStyles(styles)(ProgressStepper));