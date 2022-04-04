import React from 'react';
import '.././App.css';

const Episodes = ({ episodes = [] }) => (
<div className='row'>
            {episodes.map((item, index) => (
                <div key={index} className='col'><hr />
                    <div className='card-episode'>
                        <div className='card-body'>
                            <h5 className='card-title'>{item.name}</h5>
                            
                            <p>Fecha de emisión: {item.air_date}</p>
                            <p>Código: {item.episode}</p>
                        </div>
                    </div><hr />
                </div>
            ))}
        </div>
  );


export default Episodes;