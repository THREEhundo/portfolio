import React, { useEffect } from "react";
import Navbar from "./Views/Navbar";
import { Link } from "react-router-dom";
import { loadCSS } from "fg-loadcss";

export const Header = () => {
  useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );
    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  return (
    <div>
      <h1>
        <Link to="/" color="primary" underline="none">
          SB
        </Link>
      </h1>

      <Navbar />
    </div>
  );
};
