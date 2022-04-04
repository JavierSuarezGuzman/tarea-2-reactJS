import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Portal from "./../assets/static/images/petro-kosariekov-portal.gif"


const HomePage = () => {

    return (
        <div className='App'>
            <img src={Portal} />

        </div>
    )
};


export default HomePage;