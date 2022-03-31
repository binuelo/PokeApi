import { HashRouter, Routes, Route,Link } from "react-router-dom";
import CharacterInfo from "./components/CharacterInfo";
import Characters from "./components/Characters";
import Login from "./components/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import imagenPok from "./assents/pok.jpg"
import './App.css';

function App() {
  return (
    
    <HashRouter>
      
    <div className="App">
    <nav> 
 
      </nav>
      
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/pokedex" element={<Characters />} />
          <Route path="/pokedex/:id" element={<CharacterInfo />} />
        </Route>
      </Routes>
    </div>
  </HashRouter>
  );
}

export default App;
