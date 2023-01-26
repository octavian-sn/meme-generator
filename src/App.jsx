import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Credits from './components/Credits';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Credits />
      </div>
    );
  }
}

export default App;
