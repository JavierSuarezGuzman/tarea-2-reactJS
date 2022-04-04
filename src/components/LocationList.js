import React, { useEffect, useState } from 'react';
import Locations from './Locations';
import Pagination from './Pagination';

const LocationList = () => {


    const [locations, setLocations] = useState([]);
    const [info, setInfo] = useState({});

    const initialUrl = "https://rickandmortyapi.com/api/location";

    const fetchLocations = (url) => {
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                setLocations(data.results);
                setInfo(data.info);
            })
            .catch(error => console.log(error))
    };
    const onPrevious = () => {
        fetchLocations(info.prev);
    }

    const onNext = () => {
        fetchLocations(info.next);
    }
    useEffect(() => {
        fetchLocations(initialUrl);
    }, [])


    return (
        <nav>
            <div className="App">
                <header>
                <Pagination
                prev={info.prev}
                next={info.next}
                onPrevious={onPrevious}
                onNext={onNext}
            />
                    <Locations locations={locations} />
                    <Pagination
                prev={info.prev}
                next={info.next}
                onPrevious={onPrevious}
                onNext={onNext}
            />
                </header>
            </div>
        </nav>
    );
};


export default LocationList;