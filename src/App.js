import logo from './4sTek.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          4sTek - Home
        </p>
        <a
          className="App-link"
          href="https://4sTek.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          4sTek.com
        </a>
      </header>
    </div>
  );
}

export default App;
