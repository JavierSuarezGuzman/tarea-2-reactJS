import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Link, Route, Routes } from "react-router-dom";
import portal from "./../assets/static/images/petro-kosariekov-portal.gif";
//import portal from './assets/static/images/petro-kosariekov-portal.gif'; //cuando lo pasé así me dio error
import Logo from "./../assets/static/images/logo.png";


const Header = () => (
  <div >
    <header className='app-header'>
      <nav className='main-menu'>
        <Link to="/"><img className='header-logo' src={Logo} /></Link>
        <ul className='menu-link'>
          <li ><Link className='links-menu' to="/characters">Personajes</Link></li>
          <li ><Link className='links-menu' to="/episodes">Episodios</Link></li>
          <li ><Link className='links-menu' to="/locations">Ubicaciones</Link></li>
          <li> <Link className='links-menu' to="/about">Acerca de la tarea</Link></li>
        </ul>
      </nav>
    </header>
  </div>

);

export default Header;