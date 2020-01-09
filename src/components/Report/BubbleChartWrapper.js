import React, { Component } from 'react';
import { connect } from 'react-redux';
import BubbleChart from './BubbleChart';

class BubbleChartWrapper extends Component {
    //set up the D3Chart instance that will render in this component
    componentDidMount(){
        // const data=this.props.flagReducer[0].messages.messages;
        // console.log('this is flag reducer data', data);
        // //grab array of distinct problem words
        // const distinctWords=[...new Set(data.map(obj=> obj.actual))];

        // //loop new array and build sub arrays for each value 
        // const newData=distinctWords.map((word,i)=>{
        //     return{[word]: data.filter(obj=>obj.actual===word)}
        // })  

        // //clean up the data by making it an object 
        // const clean=newData.map((d,i)=>{
        //     const current=d[distinctWords[i]];
        //     const newObj={
        //         actual: current[0].actual,
        //         count: current.length,
        //         expected: current[0].expected,
        //         messsage: current[0].message,
        //         note: current[0].note,
        //     } 
        //     return newObj;
        // });
        
        this.props.data[0] && new BubbleChart(this.refs.chart, this.props.data)
    }

    render() {
      return (
        <div ref="chart" className="chart">
          
         
        </div>
      );
    }
  }
  
  const mapStateToProps = state => state;

  export default connect(mapStateToProps)(BubbleChartWrapper);