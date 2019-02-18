import React from 'react';
import './Card.css';



const Card = ({name, email, id}) => {
    return (
            <div className='tc '>
                <div>
                    <h2 className="f2 lh-solid" >{name}</h2>
                   
                </div>
            </div>
    );
}

export default Card;