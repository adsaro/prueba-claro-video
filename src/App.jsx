import React from 'react';
import MoviesContainer from './components/MoviesContainer';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <MoviesContainer />
      </header>
    </div>
  );
}

export default App;
