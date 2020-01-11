import React, { Component } from 'react';
import { connect } from 'react-redux';
import TotalBiasChart from './TotalBiasChart';

class TotalBiasChartWrapper extends Component {

    componentDidMount() {
        new TotalBiasChart(this.refs.chart, this.props.biasDataReducer.data);
    }

    render() {
        return (
            <div ref="chart" className="totalBiasChart">

            </div>
        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(TotalBiasChartWrapper);