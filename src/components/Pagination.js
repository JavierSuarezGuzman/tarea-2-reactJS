import React from 'react';

//será el que nos permita hacer "páginas" con su respectivo next y previous

const Pagination = ({ prev, next, onPrevious, onNext }) => { //podemos hacerlo con props

    const handlePrevious = () => {
        //logica para enviar a la página anterior
        onPrevious();
    };

    const handleNext = () => {
        onNext();
    };

    return (
        <nav>
            <ul className='pagination justify-content-center'> {/* haremos que el botón solo aparezca si existe prev o next */}
                
                {
                    prev ? (
                        <li className='page-item'>
                            <button className='page-link' onClick={handlePrevious}>Anterior</button>
                        </li>
                    ) :
                        null
                }

                {
                    next ? (
                        <li className='page-item'>
                            <button className='page-link' onClick={handleNext}>Siguiente</button>
                        </li>
                    ) :
                        null
                }

            </ul>
        </nav>
    )
};

export default Pagination;