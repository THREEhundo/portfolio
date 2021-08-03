import React, { useState } from "react";
import Navbar from "./Views/Navbar";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { H1, Container } from "../../View/theme";
import ListItems from "./Views/ListItems";

const NavContainer = styled(Container)`
  display: flex;
  flex-flow: row nowrap;
  height: auto;
  align-items: baseline;
  padding: 0 1.5rem;
`;

const MenuContainer = styled(Container)`
  background-color: transparent;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
`;

export const Header = () => {
  const [show, setShow] = useState(false);
  const [startAnimationCycle, setStartAnimationCycle] = useState(false);

  const handleClick = () => {
    setShow(!show);
    return setStartAnimationCycle(true);
  };

  const handleClose = () => setShow(false);
  return (
    <NavContainer>
      <H1>
        <Link to="/">
          <span>SB</span>
        </Link>
      </H1>

      <Navbar
        show={show}
        handleClick={handleClick}
        startAnimationCycle={startAnimationCycle}
      />
      <MenuContainer>
        <ListItems
          show={show}
          handleClick={handleClick}
          handleClose={handleClose}
        />
      </MenuContainer>
    </NavContainer>
  );
};
