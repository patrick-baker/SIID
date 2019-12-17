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
            add:!this.state.add
        })
    }

    handleChangeFor = (property,event) => {
        this.setState({
            ...this.state,
            newEducator: {
                ...this.state.newEducator,
                [property]:event.target.value
            }
        })
    }

    submitEducator = () => {
        this.props.dispatch({type:"ADD_EDUCATOR",payload:this.state.newEducator});

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
                            Name: <input onChange={(event) => this.handleChangeFor('name',event)}/>
                            Bio: <input onChange={(event) => this.handleChangeFor('bio',event)}/>
                            Contact Info:<input onChange={(event) => this.handleChangeFor('contact_info',event)}/>
                            Image: <input onChange={(event) => this.handleChangeFor('image_url',event)}/>
                            <button onClick={this.submitEducator} >Submit</button>
                        </div>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps)(Educators);
