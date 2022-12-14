import React, { useContext } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ThemeContext } from "./ThemeProvider";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navBar">
      <Link to="/">Home</Link>
      <Link to="/fav">Favoritos</Link>
      <Link to="/contacto">Contacto</Link>
      <button onClick={toggleTheme} className="botonNavBar">
        Cambio {theme === "light" ? "dark" : "light"} mode
      </button>
    </nav>
  );
};

export default Navbar;
