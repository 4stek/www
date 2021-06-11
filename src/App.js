import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ControlledCarousel from './Carousel';
import BottomLogo from './BottomLogo';
import MiddleContent from './MiddleContent';

function App() {
  return (
    <div style={{ userSelect: "none" }} className="App">
      <body>
      <ControlledCarousel/> 
      <p></p>
      <MiddleContent/>      
      <p></p>
      <BottomLogo/>
      </body>
    </div>
  );
}

export default App;
