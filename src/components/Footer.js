import React from 'react';
import "../assets/styles/components/Footer.css";

const Footer = () => (
  <footer className="App-footer">
    copy&copy;Left - {new Date().getFullYear()}
  </footer>
);

export default Footer;