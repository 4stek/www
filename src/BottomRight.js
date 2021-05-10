import logo from './4sTek.png';
import './App.css';

function BottomRight() {
  return (
    <div className="App">
      <header className="App-header">
        
        <a
          className="App-link"
          href="https://4sTek.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} className="App-logo" alt="4sTek" />
          <br/>
          <small>4sTek</small>
        </a>
      </header>
    </div>
  );
}

export default BottomRight;
