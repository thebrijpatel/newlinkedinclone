import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">

      {/* Header */}
      <Header />

      {/* App Body */}
      <div class="app__body">
        <Sidebar />
      </div>
        {/* Sidebar */}
        {/* Feed */}
        {/* Widget */}

    </div>
  );
}

export default App;
