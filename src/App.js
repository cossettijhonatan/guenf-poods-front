import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/LogIn'
import Cadastro from './pages/Cadastro';
import Sobre from './pages/Sobre';
import Instituicoes from './pages/Instituicoes'
import InstituicaoCadastro from './pages/InstituicaoCadastro'
import EditarEmpresa from './pages/EditarEmpresa'
import Produtos from './pages/Produtos'
import Pedidos from './pages/Pedidos'
import Context from './pages/context';

function App() {
  const [edit, setEdit] = useState("")
  return (
    <div className="App">
      {console.log(edit)}
      <Router>
        <Routes>
          < Route path="/" element={<LogIn />} />
          < Route path="/login" element={<LogIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/empresas" element={<Instituicoes setEdit={setEdit} />} />
          <Route path="/cadastrar-empresa" element={<InstituicaoCadastro />} />
          <Route path="/editar-empresa" element={<EditarEmpresa id={edit} />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;