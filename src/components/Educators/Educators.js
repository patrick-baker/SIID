import React, { Component } from 'react';
import { connect } from 'react-redux';
import EducatorForm from '../EducatorForm/EducatorForm';

class Educators extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: "GET_EDUCATORS" });
    }
    submitEducator = () => {
        this.props.dispatch({ type: "ADD_EDUCATOR", payload: this.state.newEducator });
    }

    render() {
        return (
            <div className="educatorPage__background">
                <EducatorForm/>
                {this.props.educator[0] && this.props.educator.map((educator, i) => (
                    <div className="card__structure" key={i}>
                        <img className="card__image" src={educator.image_url} />

                        <div className="card__details" >
                            <div className="card__title">
                                {educator.name}
                            </div>

                            <div className="card__description" >
                                {educator.bio}
                            </div>


                            <ul className="card__specialties">
                                Specialties: 
                                {educator.specialties.map((specialty, i) => <li key={i} > - {specialty}</li>)}
                            </ul>


                            <div className="card__contact" >
                                <i className="far fa-envelope fa-xs"></i> {educator.contact_info}
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Educators);
