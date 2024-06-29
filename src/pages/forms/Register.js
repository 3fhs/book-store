import React, { useState } from "react";
import "./forms.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handelSend = (e) => {
    e.preventDefault();

    if (email.trim() === "") return toast.error("email is required");
    if (name.trim() === "") return toast.error("name is required");
    if (password.trim() === "") return toast.error("password is required");
  };

  //show password
  const showHandel = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="form-wrapper">
      <ToastContainer />
      <h1 className="form-title">Create new account</h1>
      <form className="form" onSubmit={handelSend}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type={show ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {show ? (
          <i
            className="bi bi-eye-fill form-show-regist"
            onClick={showHandel}
          ></i>
        ) : (
          <i
            className="bi bi-eye-slash-fill form-show-regist"
            onClick={showHandel}
          ></i>
        )}

        <button className="form-btn" type="submit">
          Register
        </button>
      </form>
      <div className="form-footer">
        Already have an account ?{" "}
        <Link to="/login" className="forms-link">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Register;
