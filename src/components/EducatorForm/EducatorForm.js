import React, { Component } from 'react';
import { connect } from 'react-redux';

class EducatorForm extends Component {
    state = {
        add: false,
        newEducator: {
            name: "",
            bio: "",
            contact_info: "",
            image_url: "",
            specialties: []
        }
    }

    addEducator = () => {
        this.setState({
            add: !this.state.add
        })
    }

    handleChangeFor = (property, event) => {
        this.setState({
            ...this.state,
            newEducator: {
                ...this.state.newEducator,
                [property]: event.target.value
            }
        })
    }

    addSpecialites = (event) => {
        if (!this.state.newEducator.specialties.includes(event.target.value)) {
            this.setState({
                newEducator: {
                    ...this.state.newEducator,
                    specialties: [...this.state.newEducator.specialties, event.target.value]
                }
            })
        }
    }

    submitEducator = () => {
        this.props.dispatch({ type: "ADD_EDUCATOR", payload: this.state.newEducator });
    }

    render() {
        return (
            <div className="educatorPage__createCard" >
                <div onClick={this.addEducator} >
                    Hello
                </div>
                {this.state.add &&
                    (
                        <div>
                            Name: <input onChange={(event) => this.handleChangeFor('name', event)} />
                            Bio: <input onChange={(event) => this.handleChangeFor('bio', event)} />
                            Contact Info:<input onChange={(event) => this.handleChangeFor('contact_info', event)} />
                            Image: <input onChange={(event) => this.handleChangeFor('image_url', event)} />
                            <select onChange={(event) => this.addSpecialites(event)}>
                                {/* In future loop through specialties to display options */}
                                <option value="gender">gender</option>
                                <option value="race">race</option>
                                <option value="lgbtq">lgbtq</option>
                                <option value="religion">religion</option>
                                <option value="disability">disability</option>
                            </select>
                            <ul>
                                {this.state.newEducator.specialties.map((specialty, i) => <li>{specialty}</li>)}
                            </ul>
                            <button onClick={this.submitEducator} >Submit</button>
                        </div>

                    )
                }
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(EducatorForm);
