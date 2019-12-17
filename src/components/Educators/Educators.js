import React, { Component } from 'react';
import { connect } from 'react-redux';

class Educators extends Component {

    state = {
        add:false,
        newEducator: {
            name:"",
            bio:"",
            contact_info:"",
            image_url:""
        }
    }

    addEducator = () => {
        this.setState({
            add:true
        })
    }

    handleChangeFor = (property,event) => {
        this.setState({
            [property]:event.target.value
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.addEducator}>
                    Add Educator
                </button>

                {this.state.add && 
                    (
                        <div>
                            <input onChange={(event) => this.handleChangeFor('name',event)}/>
                            <input onChange={(event) => this.handleChangeFor('bio',event)}/>
                            <input onChange={(event) => this.handleChangeFor('contact_info',event)}/>
                            <input onChange={(event) => this.handleChangeFor('image_url',event)}/>
                            <button >Submit</button>
                        </div>
                    )
                }
                <pre>
                    {JSON.stringify(this.state)}
                </pre>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps)(Educators);
