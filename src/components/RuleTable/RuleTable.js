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

import AddRule from '../AddRule/AddRule'
import Spinner from '../Spinner/Spinner'

class RuleTable extends Component {
    state = {
        add: false,
        edit: false,
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
                <div className="page-padding">
                    <button onClick={this.addRule} >Add Rule</button>
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
                            { title: 'Considerate', field: 'data.considerate', render: rowData => rowData.data && rowData.data.considerate && Object.keys(rowData.data.considerate).join(" ") },
                            { title: 'Inconsiderate', field: 'data.inconsiderate', render: rowData => rowData.data && rowData.data.inconsiderate && Object.keys(rowData.data.inconsiderate).join(" ") },
                            { title: 'Note', field: 'data.note' },
                        ]}
                        data={this.props.rule.ruleReducer}
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