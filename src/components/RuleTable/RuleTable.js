import React, { Component } from 'react';
import { connect } from 'react-redux';
import MaterialTable from 'material-table'
import AddIcon from '@material-ui/icons/Add';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import SearchIcon from '@material-ui/icons/Search'
import PreviousPageIcon from '@material-ui/icons/ChevronLeft' 
import ClearIcon from '@material-ui/icons/Clear'
import NextPageIcon from '@material-ui/icons/ChevronRight'
import LastPageIcon from '@material-ui/icons/LastPage'

class RuleTable extends Component {

    componentDidMount() {
        this.props.dispatch({type:"FETCH_RULES"})
    }

  render() {
    
    return (
      <>
      {/* <pre>{JSON.stringify(this.props,null,2)}</pre>
       */}
       {/* <button onClick={this.addRuleModal} >Add Rule</button> */}
      <MaterialTable
      icons={{
        FirstPage: FirstPageIcon,
        Add: AddIcon,
        Search: SearchIcon,
        PreviousPage: PreviousPageIcon,
        Clear: ClearIcon,
        NextPage: NextPageIcon,
        ResetSearch: ClearIcon,
        LastPage: LastPageIcon

      }}
      title="SIID Rule Table"
      columns={[
        { title: 'id', field: 'id' },
        { title: 'Name', field: 'data.id' },
        { title: 'Type', field: 'data.type' },
        { title: 'Categories', field: 'data.categories' },
        { title: 'Considerate', field: 'data.considerate', render: rowData => rowData.data && rowData.data.considerate && Object.keys(rowData.data.considerate).join(" ")},
        { title: 'Inconsiderate', field: 'data.inconsiderate', render: rowData =>rowData.data && rowData.data.inconsiderate && Object.keys(rowData.data.inconsiderate).join(" ")},
        { title: 'Note', field: 'data.note' },
       
      ]}
      data={this.props.rule.ruleReducer}
        
    
    />

      </>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(RuleTable);