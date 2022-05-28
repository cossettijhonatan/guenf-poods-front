import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
// import "./Dashboard.css";
import { auth, db, logout } from "../firebase/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Dashboard from "./Dashboard";
import Login from "./LogIn"



function Home() {
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
            // alert("An error occured while fetching user data");
        }
    };
    useEffect(() => {
        if (loading) return;
        fetchUserName();
    }, [user, loading]);

    if (user) {
        return (
            <>
                <Dashboard user={user} />
            </>
        )
    } else {
        return (
            <>
                <Login />
            </>
        )
    }
}
export default Home;



