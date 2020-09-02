import React from "react";
import { Link } from 'react-router-dom'

const About = (props) => {
    return (
        <>
            <h1>Welcome to About Page</h1>
            <Link to="/"><button>Home</button></Link>
        </>
    );
};

const loadData = () => {
    console.log("About load data")
}

export default {
    component: About,
    loadData
};