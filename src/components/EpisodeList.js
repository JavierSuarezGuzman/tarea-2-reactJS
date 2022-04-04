import React, { useEffect, useState } from 'react';
import Episodes from './Episodes';
import Pagination from './Pagination';

const EpisodeList = () => {
    const [episodes, setEpisodes] = useState([]);
    const [info, setInfo] = useState({});

    const initialUrl = "https://rickandmortyapi.com/api/episode";

    const fetchEpisodes = (url) => {
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                setEpisodes(data.results);
                setInfo(data.info);
            })
            .catch(err => console.log(err))
    };

    const onPrevious = () => {
        fetchEpisodes(info.prev);
    }

    const onNext = () => {
        fetchEpisodes(info.next);
    }

    useEffect(() => {
        fetchEpisodes(initialUrl);

    }, [])

    
    return (
        <div className="container">
            <Pagination
                prev={info.prev}
                next={info.next}
                onPrevious={onPrevious}
                onNext={onNext}
            />
            <Episodes episodes={episodes} />
            <Pagination
                prev={info.prev}
                next={info.next}
                onPrevious={onPrevious}
                onNext={onNext}
            />
        </div>
    );
};


export default EpisodeList;