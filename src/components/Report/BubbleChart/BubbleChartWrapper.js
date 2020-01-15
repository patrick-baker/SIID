import React, { Component } from 'react';
import { connect } from 'react-redux';
import BubbleChart from './BubbleChart';

class BubbleChartWrapper extends Component {
    //set up the D3Chart instance that will render in this component
    componentDidMount(){  
        //make sure the data passed down is populated before running the chart      
        this.props.data[0] && new BubbleChart(this.refs.chart, this.props.data)
    }
    //
    render() {
      return (
        <div ref="chart" className="chart">
          
         
        </div>
      );
    }
  }
  
  const mapStateToProps = state => state;

  export default connect(mapStateToProps)(BubbleChartWrapper);