import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Link, Route, Routes } from "react-router-dom";
import CharacterList from '../components/CharacterList';
import Index from './OtroIndex';

const HomePage = () => (
    <div className='App'>
        <ul className='menu'>
            <Switch>
                <li> <Route exact path="/index" component={Index} />Index</li>
                <li> <Route path={CharacterList} >Personajes</Route> </li>
                <li> <Link >Ubicaciones</Link> </li>
                <li> <Link >Episodios</Link> </li>
                <li> <Link >Acerca de mi</Link> </li>
            </Switch>
        </ul>
    </div>

);


export default HomePage;