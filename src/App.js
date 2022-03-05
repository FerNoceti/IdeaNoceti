import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Tienda de prueba
        </p>
        <a
          className="App-link"
          href="https://mercadolibre.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Compra ahora
        </a>
      </header>
    </div>
  );
}

export default App;
