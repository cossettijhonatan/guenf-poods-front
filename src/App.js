import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import SignIn from './pages/SignIn'
import Sobre from './pages/Sobre';
import Cadastros from './pages/Cadastros'
import Cadastrar from './pages/CadastroForm'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/welcome" element={<Home />} />
          <Route path="/singin" element={<SignIn />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/cadastros" element={<Cadastros />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;