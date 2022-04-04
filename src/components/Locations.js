import React from 'react';
import '.././App.css';


const Locations = ({ locations = [] }) => (
    <div className='row'>
        {locations.map((item, index) => (
            <div key={index} className='col'><hr />
                <div className='card'>
                    <div className='card-body'>
                        <h5 className='card-title'>{item.name}</h5>
                        
                        <p>Tipo: {item.type}</p>
                        <p>Dimensión: {item.dimension}</p>
                    </div>
                </div><hr />
            </div>
        ))}
    </div>
);

export default Locations;