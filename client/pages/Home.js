import React from "react";
import { Link } from 'react-router-dom'

const Home = (props) => {
  return (
    <>
      <h1>Welcome to Home Page</h1>
      <Link to="/about"><button>About</button></Link>
    </>
  );
};

const loadData = () => {
  return new Promise((resolve, reject) => {
    resolve(1);
  })
}

export default {
  component: Home,
  loadData
};