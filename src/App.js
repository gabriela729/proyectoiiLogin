import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
    <h1 className="title">
       Ingresa tu ID <span aria-label="emoji" role="img"></span>
    </h1>
    <input type="text" className="new-task"/>
    <h1 className="title">
       Ingresa tu contraseña  <span aria-label="emoji" role="img"></span>
    </h1>
    <input type="text" className="new-task"/>
    
    <input type="submit" className="campos" value="Ingresar" />
 </div>
  );
}

export default App;
