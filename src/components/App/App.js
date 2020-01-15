import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import CreateProject from '../CreateProject/CreateProject';
import Educators from '../Educators/Educators';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import Nav from '../Nav/Nav';
import Projects from '../Projects/Projects';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import Report from '../Report/Report';
import ResetPassword from '../ResetPassword/ResetPassword';
import RuleTable from '../RuleTable/RuleTable'

import '../../sass/main.scss';

class App extends Component {
  componentDidMount() {
    // updates redux state with user information after login
    this.props.dispatch({ type: 'FETCH_USER' })
  }

  render() {
    return (
      <Router>
        <div className="App">
          {this.props.user.id && <Nav />}
            <Switch>
              {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
              <Redirect exact from="/" to="/home" />

              {/* Visiting forgotPassword is an open route and can be viewed by anyone */}
              <Route
                path="/forgotPassword"
                component={ForgotPassword}
              />
              {/* Visiting reset is an open route and can be viewed by anyone, but only feasibly accessible by using reset pass link in forgotPassword email */}
              <Route
                path="/reset/:token"
                component={ResetPassword}
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

              {/* createProject route accessible by pressing create link from landing page */}
              <ProtectedRoute
                exact
                path="/createProject"
                component={CreateProject}
              />

              {/* rules route brings an authorized user to the rules page */}
              <ProtectedRoute
                exact
                path="/rules"
                component={RuleTable}
              />

              {/* educators route brings an authorized user to the educators page */}
              <ProtectedRoute
                path="/educators"
                component={Educators}
              />

              {/* Unprotected report route, which is accessible to viewing past report of user or by user sharing link. */}
              <Route 
                path="/report/:id/:token"
                component={Report}
              />
              {/* If none of the other routes matched, we will show a 404. */}
              <Route render={() => <h1>404</h1>} />
            </Switch>
            {/* <pre>{JSON.stringify(this.props, null, 2)}</pre> */}
          </div>
        {/* </div> */}
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  report: state.reportReducer
});

export default connect(mapStateToProps)(App);
