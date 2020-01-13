import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
// import CampaignGoals from './CampaignGoals';

class Header extends Component {

    state = {
        url: '',
        successMessage: '',
    }

    componentDidMount = () => {
        this.setState({
            url: this.props.url
        })
    }

    copyToClipboard = (e) => {
        this.textArea.select();
        document.execCommand('copy');
        // This is just personal preference.
        // I prefer to not show the the whole text area selected.
        e.target.focus();
        this.setState({ successMessage: 'Copied!' });
        setTimeout(() => {
            this.setState({ successMessage: ''})
        }, 1000);
    };


    render() {
        return (
            <div style={{}}>

                <h1 className="report__header1">{this.props.reportReducer.title}
                    {/* Copy link to clipboard */}
                    <div className="report__copy">
                        {this.props.user.id === this.props.reportReducer.user_id &&
                            <button onClick={(e) => this.copyToClipboard(e)} className="login__loginButton button__copyButton"> <i class="fas fa-link"></i> Copy Link</button>}
                        <p className="button__copyButton message" style={{size: '2rem', right: '15rem'}}>{this.state.successMessage}</p>
                    </div>
                </h1>




                <div className='report__flexBox'>
                    {/* <div style={{width:'50%'}}> */}
                    <div>
                        <h2 className="report__header2" >Date: <span style={{ color: '#5B63DA' }}> {moment(this.props.reportReducer.date_created).format("MMM Do, YYYY")}</span></h2>
                        <h2 className="report__header2">Client: <span style={{ color: '#5B63DA' }}>{this.props.reportReducer.client}</span></h2>
                        <h2 className="report__header2__noInline">{this.props.reportReducer.description}</h2>
                    </div>

                    {/* <CampaignGoals /> */}
                </div>


                






                {/* Holds urls value for copy to link to clipboard*/}
                <textarea className=" invisible formInput__report-textarea"
                    ref={(textarea) => this.textArea = textarea}
                    value={this.state.url} />
            </div>
        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Header);