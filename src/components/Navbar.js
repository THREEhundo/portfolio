import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // eslint-disable-next-line
  const [anchorEl, setAnchorEl] = useState(null);
  const menuRef = useRef();

  const handleClick = () => {
    menuRef.current.focus();
    setAnchorEl(menuRef.current);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <navbar>
      {/* Menu Icon */}
      <svg
        aria-controls="menu"
        aria-haspopup="true"
        style={{ fontSize: "3.25rem" }}
        onClick={handleClick}
      />
      <ul id="navbarList" ref={menuRef} onClose={handleClose}>
        <li>
          <Link to="/">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link to="/work">
            <span>Work</span>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </navbar>
  );
};

export default Navbar;
