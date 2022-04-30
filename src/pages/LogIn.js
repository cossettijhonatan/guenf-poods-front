import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../firebase/firebase";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import GoogleLogo from "../images/GoogleLogo";
import { BG, Container, Title, Input, Button } from '../components/LoginStyle'


function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/home");
  }, [user, loading]);
  return (
    <BG>
      <Container>
        <Title> Acesse sua conta</Title>
        <div>
          <Input
            type="text"
            className="login__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="exemplo@email.com"
          />
          <Input
            type="password"
            className="login__textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="*********"
          />
          <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-around" }}>
            <Button
              className="login__btn"
              onClick={() => signInWithEmailAndPassword(email, password)}
            >
              Login
            </Button>
            <Button className="login__btn login__google" onClick={signInWithGoogle}>
              <GoogleLogo /> <p style={{ paddingLeft: "8px" }}> Login com Google</p>
            </Button>
          </div>
        </div>
        <div style={{ fontSize: "12px", display: "flex", flexDirection: "column" }}>
          <Link style={{ margin: "0 8px 8px 0" }} to="/reset">Esqueceu sua senha?</Link>
          <div>Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link></div>
        </div>
      </Container>
    </BG>
  );
}
export default SignIn;


