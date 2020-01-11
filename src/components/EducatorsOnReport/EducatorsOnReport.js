import React from 'react'
const getRandomSubarray = (arr, size) =>{
        var shuffled = arr.slice(0), i = arr.length, temp, index;
        while (i--) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        return shuffled.slice(0, size);
    }

const EducatorsOnReport = ({ educators }) => {
    let educatorsSubArray = []
    if (educators.length>2){
        educatorsSubArray = getRandomSubarray(educators,2)
    } else if ( educators.length === 1){
        educatorsSubArray = educators
    }

    return (<div className="flex-row-space-evenly">
        {educatorsSubArray[0] && educatorsSubArray.map((edu, i) => (
            <div className="card__structure" key={i}>
                <div className="card__imageContainer">
                    <img className="card__image" src={edu.image_url} />
                </div>
                <div className="card__details" >
                    <div className="card__title">
                        {edu.name}
                    </div>

                    <div className="card__description" >
                        {edu.bio}
                    </div>
                    <ul className="card__specialties">
                        Specialties:
        {edu.specialties[0][0] !== null && edu.specialties.map((specialty, i) => { return <li key={i} > - {specialty[1]}</li> })}
                    </ul>
                    <div className="card__contact" >
                        <i className="far fa-envelope fa-xs"></i> {edu.contact_info}
                    </div>
                </div>
            </div>
        ))}</div>
    )
}


export default EducatorsOnReport