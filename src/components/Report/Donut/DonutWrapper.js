import React, { Component } from 'react';
import { connect } from 'react-redux';
//import Donut from './Donut';

class DonutWrapper extends Component {
    state={
        total: 0||this.props.biasDataReducer.data.total,
        bias: 0,
    }

    componentDidMount() {
        //new DonutChart(this.refs.chart, this.props.biasDataReducer.data);
       this.calcPercent(this.props.biasDataReducer.data);
       //console.log('this is the total bias:',bias)
       //console.log('this is the calculated percent', Math.floor(bias/this.props.biasDataReducer.data.total))
    }

    calcPercent=(data)=>{
        let sum = 0;
        for (let property in data) {
         if(property !== 'total') {
            sum += data[property]
          }
        }
        this.setState({
            bias: sum,
        })
        return sum;
     }

    render() {
        return (
            <div ref="chart" className="donut__total">
                {/*making sure this number and the none value percentages add to 100 even though there would be some rounding*/}
                {/* <p className="report__percent">{100-(Math.floor((this.state.total-this.state.bias)/this.state.total*100))}%</p> */}
            </div>
        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(DonutWrapper);