import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './component/Header';
import { Profile } from './Profile';

function App() {
  return (
    <div >
      <header className="App-header" >
        <Header mode="profile" />
      </header>
      <div></div>
      <Profile />
    </div>
  );
}

export default App;
