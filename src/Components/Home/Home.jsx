// import React from 'react'

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div>
        <h1 className="text-2xl font-medium font-serif mb-2">
          <Link to="/Login">Login</Link>
        </h1>
        <h1 className="text-2xl font-medium font-serif mb-2">
          <Link to="/SignUp">SignUp</Link>
        </h1>
        {/* <h2 className="text-xl font-medium font-serif"></h2> */}
      </div>
    </div>
  );
};

export default Home;
