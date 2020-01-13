import React, { Component } from 'react';
import { connect } from 'react-redux';

class LiteraryTechniques extends Component {
    render() {
        return (
            <div className="report__targetInfo__right">
                <table className="report__toneTable">
                    <tr><td className="label"><p className='report__goalsData__noMargin' >Literary Techniques:</p></td></tr>

                    {this.props.reportReducer.literaryTechniques &&
                        this.props.reportReducer.literaryTechniques[0] &&
                        this.props.reportReducer.literaryTechniques.map(lit => {
                            return <tr><td className="datum">{lit.replace(/^\w/, c => c.toUpperCase())}</td></tr>
                        })}
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(LiteraryTechniques);