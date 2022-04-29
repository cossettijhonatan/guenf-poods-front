import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import SignIn from './pages/SignIn'
import Sobre from './pages/Sobre';
import Instituicoes from './pages/Instituicoes'
import InstituicaoCadastro from './pages/InstituicaoCadastro'
import Produtos from './pages/Produtos'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/welcome" element={<Home />} />
          <Route path="/singin" element={<SignIn />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/instituicoes" element={<Instituicoes />} />
          <Route path="/cadastrar-instituicao" element={<InstituicaoCadastro />} />
          <Route path="/produtos" element={<Produtos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;