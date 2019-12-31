import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';



import Nav from '../Nav/Nav';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import UserPage from '../UserPage/UserPage';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import ResetPassword from '../ResetPassword/ResetPassword';
import CreateProject from '../CreateProject/CreateProject';
import RuleTable from '../RuleTable/RuleTable'
import SIIDTool from '../SIIDTool/SIIDTool';
import Report from '../Report/Report';
import Projects from '../Projects/Projects';

import '../../sass/main.scss';

import Educators from '../Educators/Educators';


class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' })
  }

  render() {
    return (
      <Router>
        <div className="App" >
          {this.props.user.id && <Nav />}
          <div className="content">
            <Switch>
              {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
              <Redirect exact from="/" to="/home" />
              {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
              <Route
                path="/forgotPassword"
                component={ForgotPassword}
              />
              <Route
                path="/reset/:token"
                component={ResetPassword}
              />
              <Route
                exact
                path="/createProject"
                component={CreateProject}
              />
              {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
              <ProtectedRoute
                exact
                path="/home"
                component={Projects}
              />

              <ProtectedRoute
                exact
                path="/rules"
                component={RuleTable}
              />

              <ProtectedRoute
                path="/educators"
                component={Educators}
              />

              <Route 
                path="/report/:id"
                component={Report}
              />
              {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
              {/* If none of the other routes matched, we will show a 404. */}
              <Route render={() => <h1>404</h1>} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(App);
