import { HashRouter, Routes, Route } from "react-router-dom";
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
    {<h1 className="home">Home</h1> }
      </nav>
      
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<CharacterInfo />} />
        </Route>
      </Routes>
    </div>
  </HashRouter>
  );
}

export default App;
