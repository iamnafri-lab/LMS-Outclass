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
  console.log("Home load data")
}

export default {
  component: Home,
  loadData
};