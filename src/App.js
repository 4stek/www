import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './4sTek.png';
import './App.css';
import ControlledCarousel from './Carousel';

function App() {
  return (
    <div className="App">
      <body>
      <ControlledCarousel/> 
      <p></p>
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
      </body>
    </div>
  );
}

export default App;
