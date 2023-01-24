import './App.css';
import Home from './views/home/Home';
import Home2 from './views/home/Home2';

function App() {
  return (
    <div className="App">
      <Home msg="Componente home #1"></Home>
      <Home2 msg="Componente home #2"></Home2>
    </div>
  );
}

export default App;
