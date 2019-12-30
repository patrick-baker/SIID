import React, { Component, forwardRef } from 'react';
import { connect } from 'react-redux';
import DeleteRule from '../DeleteRule/DeleteRule'
import AddRule from '../AddRule/AddRule'
import Spinner from '../Spinner/Spinner'

import MaterialTable from 'material-table'
import DeleteIcon from '@material-ui/icons/Delete'
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
        deleteOpen: false,
        deleteOpenRule: null
    }
    componentDidMount() {
        this.props.dispatch({ type: "FETCH_RULES" })
    }
    addRule = () => {
        this.setState({
            add: !this.state.add
        })
    }
    handleDelete = (rowData) => {
        // set current ID in local state
        // set modal to "open" Maybe in reducer

        // If closed, then open:
        if (!this.state.deleteOpen) {
            this.setState({
                deleteOpenRule: rowData,
                deleteOpen: true
            })
        }
        // If open, close and set ID to null
        // Pass this fuction as props to modal box
        if (this.state.deleteOpen) {
            this.setState({
                deleteOpenRule: null,
                deleteOpen: false
            })
            this.props.dispatch({type:"RULE_DEL_RESET"})
        }
    }

    renderContent = () => {
        if (!this.state.add && !this.state.deleteOpen && this.props.rule.ruleReducer.length > 0) {
            // Show the table
            return (<>
                <div className="page__pad" >
                    <button className="button__generic" style={{marginLeft:'0'}} onClick={this.addRule}><i class="fas fa-plus"></i><span style={{ marginLeft: '1rem' }}>Add rule</span></button>
                    {/* <pre>{JSON.stringify(this.state,null,2)}</pre> */}
                    
                </div>

                <div className="page__pad">
                    <MaterialTable
                        icons={tableIcons}
                        title="Rule Table"
                        columns={[
                            { title: 'id', field: 'id' },
                            { title: 'Name', field: 'data.id' },
                            { title: 'Considerate', field: 'data.considerate', render: rowData => rowData.data && rowData.data.considerate && Object.keys(rowData.data.considerate).join(" ") },
                            { title: 'Inconsiderate', field: 'data.inconsiderate', render: rowData => rowData.data && rowData.data.inconsiderate && Object.keys(rowData.data.inconsiderate).join(" ") },
                            { title: 'Note', field: 'data.note' },
                        ]}
                        data={this.props.rule.ruleReducer}
                        actions={[
                            {
                                icon: DeleteIcon,
                                tooltip: 'Delete Row',
                                onClick: (event, rowData) => this.handleDelete(rowData)
                            }
                        ]}
                        options={{
                            pageSize: 10,
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
        if (this.state.deleteOpen) {
            return <DeleteRule specificRule={this.state.deleteOpenRule} handleDeleteModal={this.handleDelete} />
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