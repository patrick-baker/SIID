import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

const Nav = (props) => (
  <div className="navBar">
    <h1 className="navTitle" >SIID</h1>
    <ul className="navUl">


      <li className="navOption" >
        <Link className="navLink" to="/home">
          <i class="fas fa-th fa-sm navIcon"></i>{props.user.id ? 'Projects' : 'Login / Register'}
        </Link>
      </li>


      <li className="navOption">
        <Link className="navLink" to="/rules">
        <i class="fas fa-clipboard-list navIcon" ></i>Rules
        </Link>
      </li>

      <li className="navOption">
        <Link className="navLink" to="/educators">
        <i class="fas fa-graduation-cap navIcon"></i>Educators
        </Link>
      </li>



      <li className="navOption">
        {props.user.id && 
          <Link className="navLink" onClick={() => props.dispatch({ type: 'LOGOUT' })}>
            <i class="fas fa-sign-out-alt navIcon"></i>Log out
          </Link>
        }
      </li>
      
    </ul>
  </div >
);


 {/* <LogOutButton className="navLink" /> */}

// // <div className="nav">

//   {/* <div className="nav-right">
//       <Link className="nav-link" to="/home">

//         {props.user.id ? 'Home' : 'Login / Register'}
//       </Link>

//       

//     </div> */}


//   // {/* </div> */}



// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
