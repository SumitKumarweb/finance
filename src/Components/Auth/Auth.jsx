import React, { useState } from "react";
import "./Auth.css";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../Firebase/Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Auth = () => {
  const [authState, setAuthState] = useState(true); 
  const [authData, setAuthData] = useState({
    user: "",
    email: "",
    password: "",
  });

  const handleAuth = async () => {
    const { email, password } = authData;

    if (!email || !password || (authState && !authData.user)) {
      toast.error("All fields are required", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return;
    }

    try {
      if (authState) {
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success("Sign Up successful", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      } else {
        // Login
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Login successful", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      }

      setAuthData({
        user: "",
        email: "",
        password: "",
      });
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  return (
    <main className="main-login">
      <ToastContainer />
      <div className="right-login">
        <div className="card-login">
          <h1>{authState ? "Sign Up" : "Login"}</h1>
          {authState && (
            <div className="textfield">
              <label htmlFor="user">User</label>
              <input
                value={authData.user}
                onChange={(e) => setAuthData({ ...authData, user: e.target.value })}
                type="text"
                name="user"
                placeholder="User"
              />
            </div>
          )}
          <div className="textfield">
            <label htmlFor="email">Email</label>
            <input
              value={authData.email}
              onChange={(e) => setAuthData({ ...authData, email: e.target.value })}
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="textfield">
            <label htmlFor="password">Password</label>
            <input
              value={authData.password}
              onChange={(e) => setAuthData({ ...authData, password: e.target.value })}
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <button onClick={handleAuth} className="btn-login">
            {authState ? "Sign Up" : "Login"}
          </button>
          <p>
            {authState ? "Already have an account?" : "Don't have an account?"}{" "}
            <span
              onClick={() => setAuthState(!authState)}
              style={{ color: "blue", cursor: "pointer" }}
            >
              {authState ? "Login" : "Sign Up"}
            </span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Auth;
