import React from 'react'
import {useNavigate} from "react-router-dom"
import "../styles/header.css"
import logo from "../assets/logo.png"

export default function Header(props) {
  const navigate = useNavigate();
  return (
    <header className="header-container">
      <div className="header-logo">
        <img src={logo} alt="logo" />
      </div>

      <div>
        <button className="click-button" onClick={() => navigate(props.login ? "/login" : "/signup")}>
          {props.login ? "Log In" : "Sign In"}
        </button>
      </div>
    </header>
  );
}
