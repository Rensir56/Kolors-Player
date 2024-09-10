// src/App.js
import React from 'react';
import './App.css';
import VideoPlayer from './VideoPlayer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Video Player</h1>
        <p>Enjoy your video!</p>
      </header>
      <main>
        <VideoPlayer />
      </main>
      <footer className="App-footer">
        <p>&copy; 2023 My Video Player</p>
      </footer>
    </div>
  );
}

export default App;