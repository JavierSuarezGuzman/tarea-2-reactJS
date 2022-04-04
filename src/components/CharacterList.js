import React, { useState, useEffect } from 'react'; //para usar props con sus estados y ciclos de vida
import Characters from './Characters';
import Pagination from './Pagination';


const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    //poner el fetch dentro del useEffect que es un hook que nos permite manejar las llamadas
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log(error))
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  }

  const onNext = () => {
    fetchCharacters(info.next);
  }

  useEffect(() => {
    fetchCharacters(initialUrl);

  }, [])


  return (
      <div className='container'>
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />

        <Characters characters={characters} /> {/* este componenete tendrá una propiedad que recibe el array characters que obtendrá la API */}

        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
  );
};


export default CharacterList;