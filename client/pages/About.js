import React from "react";
import { Link } from 'react-router-dom';

const About = (props) => {
    return (
        <>
            <h1>Welcome to About Page</h1>
            <Link to="/" className="btn btn-primary">Home</Link>
        </>
    );
};

About.loadData = () => {
    return new Promise((resolve, reject) => {
        resolve(1);
    })
}

export default About