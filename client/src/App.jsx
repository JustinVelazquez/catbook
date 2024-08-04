import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

//imports
import NavBar from './components/NavBar.jsx'

function App() {
  return (
    <div>
      <header>
        <nav>
          <NavBar />
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
