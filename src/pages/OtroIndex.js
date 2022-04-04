import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Link, Route, Routes } from "react-router-dom";
import portal from "./../assets/static/images/petro-kosariekov-portal.gif";
//import portal from './assets/static/images/petro-kosariekov-portal.gif'; //cuando lo pasé así me dio error
import HomePage from './HomePage';


const Index = () => (
  <div className="App">
    <p>Bienvenido a cualquier otro portal de información de Ricky Martin</p>
    <span className='hidden'>Si, en el universo C148 el programa se llama Ricky Martin</span>

    <Link to={HomePage}>
      <img src={portal} />
    </Link>

    {/*       <a
        href="https://reactjs.org"
        rel="noopener noreferrer"
      ><img src={portal} />
      </a> */}

    <p>
      Pincha en el portal para entrar
    </p>
  </div>
);

export default Index;