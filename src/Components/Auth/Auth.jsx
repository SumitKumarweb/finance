import React, { useState } from "react";
import "./Auth.css";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../Firebase/Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Auth = ({setJwtToken}) => {
  const [authState, setAuthState] = useState(true);  
  const [authData, setAuthData] = useState({
    user: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleAuth = async () => {
    const { email, password, user } = authData;

    if (!email.includes("@") || password.length < 6 || (authState && !user)) {
      toast.error("Please fill all fields with valid data.", {
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

    setLoading(true);

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
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const token = await userCredential.user.getIdToken();
        localStorage.setItem("jwtToken", token);
        setJwtToken(token)
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
      const errorMessages = {
        "auth/email-already-in-use": "Email is already in use. Try logging in.",
        "auth/invalid-email": "Invalid email format.",
        "auth/user-not-found": "User not found. Please sign up first.",
        "auth/wrong-password": "Incorrect password. Try again.",
      };
      const errorMsg = errorMessages[error.code] || "Something went wrong. Try again.";

      toast.error(errorMsg, {
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
    } finally {
      setLoading(false);
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
          <button onClick={handleAuth} className="btn-login" disabled={loading}>
            {loading ? "Processing..." : authState ? "Sign Up" : "Login"}
          </button>
          <p style={{ color: "white" }}>
            {authState ? "Already have an account?" : "Don't have an account?"} {" "}
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
