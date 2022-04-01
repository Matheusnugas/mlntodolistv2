import { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="App">
      <main className={!darkMode ? "pageWrapperLight" : "pageWrapperDark"}>
        <div>
        </div>
      </main>
    </div>
  );
}

export default App;
