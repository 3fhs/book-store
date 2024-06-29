import React, { useState } from "react";
import "./forms.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handelSend = (e) => {
    e.preventDefault();

    if (email.trim() === "") return toast.error("email is required");
    if (password.trim() === "") return toast.error("password is required");
  };

  //show password
  const showHandel = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="form-wrapper">
      <ToastContainer />
      <h1 className="form-title">Login to your account</h1>
      <form className="form" onSubmit={handelSend}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type={show ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {show ? (
          <i className="bi bi-eye-fill form-show" onClick={showHandel}></i>
        ) : (
          <i
            className="bi bi-eye-slash-fill form-show"
            onClick={showHandel}
          ></i>
        )}

        <button className="form-btn" type="submit">
          Login
        </button>
      </form>
      <div className="form-footer">
        Dont't have an account ?{" "}
        <Link to="/register" className="forms-link">
          Register
        </Link>
      </div>
    </div>
  );
}

export default Login;
