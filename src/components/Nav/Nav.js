import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../../'
const logout = (props) => {
  props.dispatch({ type: 'LOGOUT' });
  props.history.push('/home');
}

const Nav = (props) => (
  <div className="navigation no-print">
    <div className="navigation__background">

      <div className="navigation__list">
        <div className="navigation__logo" >
          {/* <h1 className="heading-primary" >SIID</h1> */}
          <img src='./siidlogo.png' style={{width:"120px", paddingTop:'1rem', paddingBottom:'1.5rem'}}/>
        </div>
        <div className="navigation__item" >
          <Link className="navigation__link" to="/home">
            <i class="fas fa-th fa-2x navigation__icon"></i>{props.user.id ? 'Projects' : 'Login / Register'}
          </Link>
        </div>

        {props.user.admin === true &&
          <div className="navigation__item">
            <Link className="navigation__link" to="/rules">
              <i class="fas fa-clipboard-list fa-2x navigation__icon" ></i>Rules
            </Link>
          </div>
        }

        <div className="navigation__item">
          {props.user.id &&
            <Link className="navigation__link" to="/educators">
              <i class="fas fa-graduation-cap fa-2x navigation__icon"></i>Experts
            </Link>
          }
        </div>

        <div className="navigation__item">
          {props.user.id &&
            <Link className="navigation__link" onClick={() => logout(props)}>
              <i class="fas fa-sign-out-alt fa-2x navigation__icon"></i>Log out
            </Link>
          }
        </div>
      </div>

    </div>
  </div >
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default withRouter(connect(mapStateToProps)(Nav));
