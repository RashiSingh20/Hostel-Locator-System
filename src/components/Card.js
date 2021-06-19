import React from 'react';
import "../style/Card.css"

function Card({name,imageurl}) {
    return (
        <div className="card-container">
            <div className="image_container">
                <img src={imageurl} alt=''/>
            </div>
            <div className="card-title">
                {name}
            </div>
        </div>
    )
}

export default Card