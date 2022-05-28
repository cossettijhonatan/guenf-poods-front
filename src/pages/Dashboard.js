import React, { useEffect, useState } from "react";
import Statistics from "../components/Statistics";
import Tasks from "../components/Tasks";
import User from "../components/User";
import Header from "../components/Header";
import styled from "styled-components";

const Dashboard = (props) => {
    console.log("testando dash")

    return (
        <>
            <Header />
            <BG>
                <Wrapper>
                    Olá, {props.user.displayName || props.user.email}!
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Statistics />
                        <div style={{ width: "100%", display: "flex", justifyContent: "space-around", margin: "20px 0" }}>
                            <Tasks />
                            <User info={props.user} />
                        </div>
                    </div>
                    {/*
                */}
                </Wrapper>
            </BG>
        </>
    )
}



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

export default Dashboard; 