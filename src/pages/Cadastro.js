import React, { useEffect, useState, useHistory } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth, signInWithGoogle, registerWithEmailAndPassword } from "../firebase/firebase";
import { BG, Container, Title, Input, Button } from '../components/LoginStyle'
import GoogleLogo from "../images/GoogleLogo";

function Cadastro() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();
    const register = () => {
        if (!name) alert("Please enter name");
        registerWithEmailAndPassword(name, email, password);
    };
    useEffect(() => {
        if (loading) return;
        if (user) history.replace("/home");
    }, [user, loading]);

    console.log("aqui estou! ")

    return (
        <BG>
            <Container>
                <Title> Cadastre-se </Title>
                <div className="register__container">
                    <Input
                        type="text"
                        className="register__textBox"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nome completo"
                    />
                    <Input
                        type="text"
                        className="register__textBox"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="exemplo@email.com"
                    />
                    <Input
                        type="password"
                        className="register__textBox"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="******"
                    />
                    <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-around" }}>
                        <Button className="register__btn" onClick={register}>
                            Cadastrar
                        </Button>
                        <Button
                            className="register__btn register__google"
                            onClick={signInWithGoogle}
                        >
                            <GoogleLogo /> <p style={{ paddingLeft: "8px" }}></p> Cadastrar com Google
                        </Button>
                    </div>
                </div>
                <div style={{ fontSize: "13px" }} >
                    Já possui uma conta? <Link to="/">Entre</Link> agora.
                </div>
            </Container >
        </BG >
    );
}
export default Cadastro;