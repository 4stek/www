import { Carousel } from 'bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './4sTek.png';
import './App.css';
import ControlledCarousel from './Carousel';

function App() {
  return (
    <div className="App">
{/*       <header className="App-header">

      </header> */}
      <body>
      <ControlledCarousel/> 
      <p></p>
      <img src={logo} className="App-logo" alt="logo" />
{/*         <p>
          4sTek - Home
        </p> */}
        <p>
        <a
          className="App-link"
          href="https://4sTek.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          4sTek.com
        </a>
        </p>
      </body>
    </div>
  );
}

export default App;
