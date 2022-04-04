import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Header from "./../components/Header";
import Footer from './../components/Footer';

const Layout = ({ children }) => (      //prop props  
<div className='App'>
    <div>
        <Header />
            { children }
        <Footer />
        </div>
    </div>

);



export default Layout;