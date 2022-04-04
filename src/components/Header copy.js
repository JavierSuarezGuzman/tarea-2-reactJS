import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Link, Route, Routes } from "react-router-dom";
import portal from "./../assets/static/images/petro-kosariekov-portal.gif";
//import portal from './assets/static/images/petro-kosariekov-portal.gif'; //cuando lo pasé así me dio error



const Header = () => (
  <div className="App">
    <header className="App-header">
      <p>Bienvenido a cualquier otro portal de información de Ricky Martin</p>
      <span className='hidden'>Si, en el universo C148 el programa se llama Ricky Martin</span>

      <a
        href="https://reactjs.org"
        rel="noopener noreferrer"
      ><img src={portal} />
      </a>


{/*       <Link to="/transition">Item</Link>

      <Link to="./transition">
        <img src={portal} />
      </Link> */}

      
{/*       <BrowserRouter>
        <Switch>
          <Route path="/transition" component={Transition} img src={portal} />

        </Switch>
      </BrowserRouter> */}

      <p>
        Pincha en el portal para entrar
      </p>
    </header>
  </div>
);

export default Header;