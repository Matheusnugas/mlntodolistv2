import { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="App">
      <main className={!darkMode ? "pageWrapperLight" : "pageWrapperDark"}>
        <nav className={!darkMode ? "navLight" : "navDark"}>
          <h1>To-do List</h1>
          <button className="navButton">Dark Mode</button>
        </nav>
      </main>
    </div>
  );
}

export default App;
