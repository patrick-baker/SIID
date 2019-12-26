import React, { Component } from 'react';
import { connect } from 'react-redux';
import MaterialTable from 'material-table'
// import AddIcon from '@material-ui/icons/Add';
// import FirstPageIcon from '@material-ui/icons/FirstPage';
// import SearchIcon from '@material-ui/icons/Search'
// import PreviousPageIcon from '@material-ui/icons/ChevronLeft'
// import ClearIcon from '@material-ui/icons/Clear'
// import NextPageIcon from '@material-ui/icons/ChevronRight'
// import LastPageIcon from '@material-ui/icons/LastPage'
import DeleteIcon from '@material-ui/icons/Delete'

import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import AddRule from '../AddRule/AddRule'
import Spinner from '../Spinner/Spinner'

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };


class RuleTable extends Component {
    state = {
        add: false,
        edit: false,
        deleteOpen:false,
    }
    componentDidMount() {
        this.props.dispatch({ type: "FETCH_RULES" })
    }
    addRule = () => {
        this.setState({
            add: !this.state.add
        })
    }

    renderContent = () => {
        if (!this.state.add && this.props.rule.ruleReducer.length > 0) {
            // Show the table
            return (<>
                <div className="page__pad">
                    <button onClick={this.addRule} >Add Rule</button>
                    <MaterialTable
                        style={{fontSize:'4rem'}}
                        icons={tableIcons}
                        // icons={{
                        //     FirstPage: FirstPageIcon,
                        //     Add: AddIcon,
                        //     Search: SearchIcon,
                        //     PreviousPage: PreviousPageIcon,
                        //     Clear: ClearIcon,
                        //     NextPage: NextPageIcon,
                        //     ResetSearch: ClearIcon,
                        //     LastPage: LastPageIcon,
                        //     Delete: DeleteIcon
                        // }}
                        title="SIID Rule Table"
                        columns={[
                            { title: 'id', field: 'id' },
                            { title: 'Name', field: 'data.id' },
                            // { title: 'Type', field: 'data.type' },
                            // { title: 'Categories', field: 'data.categories' },
                            { title: 'Considerate', field: 'data.considerate', render: rowData => rowData.data && rowData.data.considerate && Object.keys(rowData.data.considerate).join(" ") },
                            { title: 'Inconsiderate', field: 'data.inconsiderate', render: rowData => rowData.data && rowData.data.inconsiderate && Object.keys(rowData.data.inconsiderate).join(" ") },
                            { title: 'Note', field: 'data.note' },
                        ]}
                        data={this.props.rule.ruleReducer}
                        actions={[
                            {
                                icon: DeleteIcon,
                                tooltip: 'Delete Row',
                                onClick: this.props.dispatch({type:"DELETE_RULE", })
                                // onClick: (event, rowData) => this.handleClickOpen(rowData.id)
                            }
                        ]}
                        options={{
                            pageSize: 20,
                            exportButton: true
                        }}
                    />
                </div>
            </>)
        }
        if (this.state.add) {
            // Show the add Rule Modal
            return <AddRule addRule={this.addRule} />
        }
        
        return <Spinner message="Loading Table" />
    }
    render() {

        return (
            <>
                <div>{this.renderContent()}</div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(RuleTable);