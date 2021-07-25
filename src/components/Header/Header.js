import React from "react";
import Navbar from "./Views/Navbar";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { H1, Container } from "../../View/theme";

const NavContainer = styled(Container)`
  display: flex;
  flex-flow: row nowrap;
  height: auto;
  align-items: baseline;
  padding: 0 1.5rem;
`;

export const Header = () => {
  return (
    <NavContainer>
      <H1>
        <Link to="/">
          <span>SB</span>
        </Link>
      </H1>

      <Navbar />
    </NavContainer>
  );
};

// useEffect(() => {
//   const node = loadCSS(
//     "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
//     document.querySelector("#font-awesome-css")
//   );
//   return () => {
//     node.parentNode.removeChild(node);
//   };
// }, []);
