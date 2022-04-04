import React from 'react';
import '.././App.css';

const Characters = ({ characters = [] }) => { //characters debe ser un child?
    return (
        <div className='row'>
            {characters.map((item, index) => (
                <div key={index} className='col'><hr />
                    <div className='card'>
                        <img src={item.image} alt='' />
                        <div className='card-body'>
                            <h5 className='card-title'>{item.name}</h5>
                            
                            <p>Location: {item.location.name}</p>
                            <p>Species: {item.species}</p>
                        </div>
                    </div><hr />
                </div> 
            ))}
        </div>
    );
};

export default Characters;