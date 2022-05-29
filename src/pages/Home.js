import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../firebase/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Dashboard from "./Dashboard";
import NotAllowed from "./NotAllowed";

function Home(props) {
    const [user, loading, error] = useAuthState(auth);
    const [loggedout, setLogout] = useState(false)
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

    useEffect(() => {
        if (!user) navigate("/login")
    }, [user])

    if (user) {
        return (<Dashboard user={user} setLogout={setLogout} />)
    }
}
export default Home;



