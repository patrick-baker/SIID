import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

class Header extends Component {
    render() {
        return (
            <>
                <h1 className="report__header1">{this.props.reportReducer.title}</h1>
                <div className="report__header__dateClient">
                    <h2 className="report__header2 uppercase">{moment(this.props.reportReducer.date_created).format("MMM Do, YYYY")} - <span>{this.props.reportReducer.client}</span></h2>
                </div>
                <h2>{this.props.reportReducer.description}</h2>
            </>
        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Header);