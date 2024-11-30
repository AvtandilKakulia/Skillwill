import hero from './hero.png';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <div className="txtPart">
        <h1>Hi there!</h1>
        <h3>This is test <span>page</span></h3>
      </div>
      <div className="imgPart">
        <img src={hero}></img>
      </div>
    </div>
  );
}

export default App;
