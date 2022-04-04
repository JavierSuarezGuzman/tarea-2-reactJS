import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CharacterList from './components/CharacterList';
import EpisodeList from "./components/EpisodeList";
import LocationList from "./components/LocationList";
import AboutPage from './pages/About';

import './App.css';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/characters" component={CharacterList} />
        <Route exact path="/episodes" component={EpisodeList} />
        <Route exact path="/locations" component={LocationList} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </Layout>
  </BrowserRouter>

);


export default App;
