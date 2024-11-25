import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  email: "",
  firstname: "",
  lastname: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [state, setState] = useState(initialState);
  const { firstname, lastname, email, password, confirmPassword } = state;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleAuth = (e) => {
    e.preventDefault();

    // Simple validation with Toastify alerts
    if (!email || !firstname || !lastname || !password || !confirmPassword) {
      toast.error("All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    // Successful submission
    toast.success("Sign Up Successful!");

    console.log("User data:", state);
    // Reset form
    setState(initialState);
  };

  return (
    <div className="w-full h-screen justify-center flex items-center">
      <div className="lg:w-[40%] w-full">
        <form onSubmit={handleAuth} className="border p-5 font-serif">
          <h1 className="text-center font-medium text-lg font-serif">Sign Up Now</h1>

          <div className="flex flex-col mb-2">
            <label htmlFor="firstname" className="pb-2">
              First Name
            </label>
            <input
              type="text"
              placeholder="First Name"
              name="firstname"
              value={firstname}
              onChange={handleInputChange}
              className="text-black border p-3"
            />
          </div>

          <div className="flex flex-col mb-2">
            <label htmlFor="lastname" className="pb-2">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Last Name"
              name="lastname"
              value={lastname}
              onChange={handleInputChange}
              className="text-black border p-3"
            />
          </div>

          <div className="flex flex-col mb-2">
            <label htmlFor="email" className="pb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleInputChange}
              className="text-black border p-3"
            />
          </div>

          <div className="flex flex-col mb-2">
            <label htmlFor="password" className="pb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleInputChange}
              className="text-black border p-3"
            />
          </div>

          <div className="flex flex-col mb-2">
            <label htmlFor="confirmPassword" className="pb-2">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleInputChange}
              className="text-black border p-3"
            />
          </div>

          <div className="text-center pt-2 pb-2">
            <button className="bg-gray-800 text-white px-8 py-2">Sign Up</button>
          </div>

          <p className="text-center">
            Created Account &nbsp;
            <span>
              <Link to="/Login" className="text-red-700 cursor-pointer">
                Sign In
              </Link>
            </span>
          </p>
        </form>

        {/* Toastify Container */}
        <ToastContainer />
      </div>
    </div>
  );
};

export default SignUp;
