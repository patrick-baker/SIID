
import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

class Header extends Component {
    render() {
        return (
            <>
                <h1>{this.props.reportReducer.title} </h1>
                <h2>Date:</h2> <p>{moment(this.props.reportReducer.date_created).format("MMM Do, YYYY")}</p>
                <h2>Client:</h2> <p>{this.props.reportReducer.client}</p>
                <h2>Description:</h2> <p>{this.props.reportReducer.description}</p>
            </>
        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Header);