import React, { Component } from 'react';
import { connect } from 'react-redux';
import PieChart from './PieChart';

class PieChartWrapper extends Component {

    componentDidMount() {
        new PieChart(this.refs.chart, this.props.biasDataReducer.data);
    }

    render() {
        return (
            <div ref="chart" className="pieChart">

            </div>
        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(PieChartWrapper);