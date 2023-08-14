import logo from './logo.svg';
import './App.css';
import PositiveButton from './components/positiveButton/positiveButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <PositiveButton label="Hola" buttonClass="buttonClassPrimary"/>
        <PositiveButton label="Hola 2" buttonClass="buttonClassCancel"/>
        <PositiveButton label="Hola 3" buttonClass="buttonClassPrimary"/>
        <PositiveButton label="Hola 4" buttonClass="buttonClassCancel"/>
      </header>
    </div>
  );
}

export default App;
