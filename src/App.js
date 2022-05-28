import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/LogIn'
import Cadastro from './pages/Cadastro';
import Sobre from './pages/Sobre';
import Instituicoes from './pages/Instituicoes'
import InstituicaoCadastro from './pages/InstituicaoCadastro'
import Produtos from './pages/Produtos'
import Pedidos from './pages/Pedidos'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          < Route path="/" element={<LogIn />} />
          < Route path="/login" element={<LogIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/instituicoes" element={<Instituicoes />} />
          <Route path="/cadastrar-instituicao" element={<InstituicaoCadastro />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;