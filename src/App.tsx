import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header, Mode } from './component/Header';
import { Profile } from './Profile';

function App() {
  return (
    <div >
      <Header mode="profile" />
      <Profile />
    </div>
  );
}

export default App;
