import React, { useEffect } from "react";
import { Link } from 'react-router-dom'

const Home = (props) => {
  return (
    <>
      <h2>Welcome to Home Page</h2>
      <Link to="/about"><button>About</button></Link>
    </>
  );
};

Home.loadData = () => {
  return new Promise((resolve, reject) => {
    resolve(1);
  })
}

export default Home