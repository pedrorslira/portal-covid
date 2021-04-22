import React from "react";
import logo from "../../assets/logo_portal_da_vacina.png";
import "./index.css";

export default function index() {
  return (
    <div>
      <img src={logo} alt="Logo Portal da Vacina" className="logo" />
    </div>
  );
}
