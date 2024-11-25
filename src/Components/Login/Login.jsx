// import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="w-full h-screen justify-center flex items-center">
      <div className="lg:w-[40%]">
        <form className="border  p-5 shadow font-serif">
          <h1 className="text-center font-medium text-lg font-serif">Sign In Now</h1>
          <div className="flex flex-col mb-2">
            <label htmlFor="email" className="pb-2">
              Email
            </label>
            <input type="text" placeholder="Email" name="email" className="text-black border p-3" />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="password" className="pb-2">
              Password
            </label>
            <input type="password" placeholder="Password" name="password" className="text-black border p-3" />
          </div>
          <div className="text-center pt-2 pb-2">
            <button className="bg-gray-800 text-white px-8 py-2">Sign In</button>
          </div>
          <p className="text-center">
            Created Account{" "}
            <span>
              <Link to="/SignUp" className="text-red-700 cursor-pointer">
                Sign Up
              </Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
