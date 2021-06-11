import logo from './4sTek.png';
import './App.css';

function BottomLogo() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
        <p>
        <a
          className="App-link"
          href="https://4sTek.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          &copy; 4sTek LLC
        </a>
        </p>
    </div>
  );
}

export default BottomLogo;
