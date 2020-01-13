import React, { Component } from 'react';
import { connect } from 'react-redux';

class Tone extends Component {
    render() {
        return (
            <table className="report__toneTable">
                {this.props.reportReducer.formal ?
                    <>
                        <tr><td className="label"><p className='report__goalsData__noMargin' >Tone:</p></td></tr>
                        <tr><td className="datum">Formal</td></tr>
                    </>
                    :
                    <>
                        <tr><td className="label"><p className='report__goalsData__noMargin' >Tone:</p></td></tr>
                        <tr><td className="datum">Informal</td></tr>
                    </>
                }
                {this.props.reportReducer.tone &&
                    this.props.reportReducer.tone[0] &&
                    this.props.reportReducer.tone.map(type => {
                        return <tr><td className="datum">{type.replace(/^\w/, c => c.toUpperCase())}</td></tr>
                    })}
            </table>

        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Tone);