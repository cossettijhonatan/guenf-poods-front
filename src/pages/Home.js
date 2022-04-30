import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
// import "./Dashboard.css";
import { auth, db, logout } from "../firebase/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Header from "../components/Header";
import styled from "styled-components";

function Home() {
    console.log("carregou home")
    // const [user, loading, error] = useAuthState(auth);
    // const [name, setName] = useState("");
    // const navigate = useNavigate();
    // const fetchUserName = async () => {
    //     try {
    //         const q = query(collection(db, "users"), where("uid", "==", user?.uid));
    //         const doc = await getDocs(q);
    //         const data = doc.docs[0].data();
    //         setName(data.name);
    //     } catch (err) {
    //         console.error(err);
    //         alert("An error occured while fetching user data");
    //     }
    // };
    // useEffect(() => {
    //     if (loading) return;
    //     if (!user) return navigate("/");
    //     fetchUserName();
    // }, [user, loading]);
    return (
        <>
            <Header />
            <BG>
                <Wrapper>
                    <div>
                    </div>
                </Wrapper>
            </BG>
            {/* <div className="dashboard">
                <div className="dashboard__container">
                    Logged in as */}
            {/* <div>{name}</div>
                    <div>{user?.email}</div> */}
            {/* <button className="dashboard__btn" onClick={logout}>
                        Logout
                    </button>
                </div>
            </div> */}
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
    width: 90vw; 
    height: 600px; 
    background-color: #FFF; 
    display: flex; 
    flex-direction: column;


`


const TopContainer = styled.div`
    border-bottom: 2px solid #E5E5E5; 
    min-height: 75px; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500; 
    padding: 0 20px 0 20px; 
    font-size: 17px;
`

const BottomContainer = styled.div`
    margin: 20px;
    overflow-y: auto;
`