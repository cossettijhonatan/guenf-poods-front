import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
// import "./Dashboard.css";
import { auth, db, logout } from "../firebase/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Header from "../components/Header";
import styled from "styled-components";
import Statistics from "../components/Statistics";
import Tasks from "../components/Tasks";
import User from "../components/User"

function Home() {
    console.log("carregou home")
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setName(data.name);
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };
    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        fetchUserName();
    }, [user, loading]);

    return (
        <>
            <Header />
            <BG>
                <Wrapper>
                    Olá, {user.displayName}!
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Statistics />
                        <div style={{ width: "100%", display: "flex", justifyContent: "space-around", margin: "20px 0" }}>
                            <Tasks />
                            <User info={user} logout={logout} />
                        </div>
                    </div>
                </Wrapper>
            </BG>
        </>
    );
}
export default Home;



const BG = styled.div`
    background-color: #E5E5E5; 
    width: 100vw;
    height: 100vh; 
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; 
`

const Wrapper = styled.div`
    margin: 90px 0 0 0; 
    background-color: #E5E5E5; 
    width: 90vw; 
    height: 600px; 
    display: flex; 
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
const Info = styled.div`
`

