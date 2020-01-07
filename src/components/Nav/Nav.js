import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

const Nav = (props) => (
  <div className="navigation">
    <div className="navigation__background">

      <div className="navigation__list">
        <div className="navigation__logo" >
          <h1 className="heading-primary" >SIID</h1>
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
              <i class="fas fa-graduation-cap fa-2x navigation__icon"></i>Educators
            </Link>
          }
        </div>

        <div className="navigation__item">
          {props.user.id &&
            <Link className="navigation__link" onClick={() => props.dispatch({ type: 'LOGOUT' })}>
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

export default connect(mapStateToProps)(Nav);
