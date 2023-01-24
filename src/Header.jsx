import React, { Component } from 'react';
import logo from '../src/assets/logo.png';

function Header() {
  return (
    <header>
      <img src={logo} alt="troll face drawing" />
      <h3>Meme Generator</h3>
      <span>React applications - Project 3</span>
    </header>
  );
}

export default Header;
