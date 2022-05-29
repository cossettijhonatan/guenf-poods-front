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

function App() {
  const [edit, setEdit] = useState("")
  const [user, setUser] = useState("")
  return (
    <div className="App">
      <Router>
        <Routes>
          < Route path="/login" element={<LogIn setUser={setUser} />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre user={user} />} />
          <Route path="/empresas" element={<Instituicoes setEdit={setEdit} user={user} />} />
          <Route path="/cadastrar-empresa" element={<InstituicaoCadastro user={user} />} />
          <Route path="/editar-empresa" element={<EditarEmpresa id={edit} user={user} />} />
          <Route path="/produtos" element={<Produtos user={user} />} />
          <Route path="/pedidos" element={<Pedidos user={user} />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;