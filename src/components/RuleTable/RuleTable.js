import React, { Component } from 'react';
import { connect } from 'react-redux';
import MaterialTable from 'material-table'

class RuleTable extends Component {

    componentDidMount() {
        this.props.dispatch({type:"FETCH_RULES"})
    }

  render() {
    
    return (
      <>
      <pre>{JSON.stringify(this.props,null,2)}</pre>
      
      <MaterialTable
      title="SIID Rule Table"
      columns={[
        { title: 'id', field: 'id' },
        { title: 'Name', field: 'data.id' },
        { title: 'Type', field: 'data.type' },
        { title: 'Categories', field: 'data.categories' },
        { title: 'Considerate', field: 'data.considerate' },
        { title: 'Inconsiderate', field: 'data.inconsiderate' },
        { title: 'Note', field: 'data.note' },
       
      ]}
      data={this.props.ruleReducer}
        
      
    />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(RuleTable);