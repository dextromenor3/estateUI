import "./navbar.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="left">
        <Link to='/' className="logo">
          <img src="logo.png" alt="logo" />
          <span>VladEstate</span>
        </Link>
        <Link to='/'>Home</Link>
        <Link to='/'>About</Link>
        <Link to='/'>Contact</Link>
        <Link to='/'>Agents</Link>
      </div>
      <div className="right">
        <Link to='/'>Sign in</Link>
        <Link to='/' className="register">
          Sign up
        </Link>
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt="menu"
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to='/'>Home</Link>
          <Link to='/'>About</Link>
          <Link to='/'>Contact</Link>
          <Link to='/'>Agents</Link>
          <Link to='/'>Sign In</Link>
          <Link to='/'>Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
