import React, { Component } from 'react';
import { connect } from 'react-redux';
import DonutChart from './DonutChart';

class DonutChartWrapper extends Component {

    componentDidMount() {
        new DonutChart(this.refs.chart, this.props.biasDataReducer.data);
    }

    render() {
        return (
            <div ref="chart" className="chart">

            </div>
        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(DonutChartWrapper);