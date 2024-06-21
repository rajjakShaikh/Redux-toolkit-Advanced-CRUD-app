import React, { useState, useEffect } from "react";
import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { EyeInvisibleOutline } from "./Pages/svg/EyeInvisibleOutline";
import { EyeOutlined } from "./Pages/svg/EyeOutlined";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const Navigate = useNavigate();

  const predefinedEmail = "razzakshaikh8800@gmail.com";
  const predefinedPassword = "Admin@123";

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (email === predefinedEmail && password === predefinedPassword) {
      console.log("email is:", email, "password is:", password);
      window.location.href = "/";
      toast.success("Login successful. Redirecting...", {
        autoClose: 2000,
        position: "top-center",
      });
    } else {
      toast.error("Invalid email or password", {
        autoClose: 2000,
        position: "top-center",
      });
    }
    console.log("error while navigate");
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      Navigate("/"); // Redirect to home page after successful Google sign-in
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full bg-gray-400">
      <div className="py-5 text-center">
        <h3 className="font-bold text-[20px] text-white">
          Welcome to the Advanced CRUD Web Application
        </h3>
      </div>
      <div className="min-h-screen bg-center flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <ToastContainer />
          <h2 className="text-2xl font-bold mb-8 text-center">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email.."
                autoComplete="email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6 relative">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type={visible ? "text" : "password"}
                placeholder="Password.."
                autoComplete="current-password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                onClick={() => setVisible(!visible)}
                className="absolute right-3 top-10 transform -translate-y-1/2 cursor-pointer"
              >
                {visible ? <EyeOutlined /> : <EyeInvisibleOutline />}
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors mb-4"
            >
              Sign in
            </button>
          </form>
          <button
            onClick={signInWithGoogle}
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
