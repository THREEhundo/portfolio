import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components/macro";
import {
  theme,
  NavBlocks,
  scaleUp,
  fadeInFrame,
  NavBlockTemplate,
  NavBlockSpan,
} from "../../../View/theme";

// TODO [✅] ANIMATE NAVBLOCK OPACITY ANIMATION
// TODO [] ANIMATE NAVBLOCK2 OPACITY ANIMATION
// TODO [] ANIMATE NAVBLOCK3 OPACITY ANIMATION
// TODO [] ANIMATE NAVBLOCK4 OPACITY ANIMATION
// TODO [] STAGGER OPACITY ANIMATION
// TODO [] ANIMATE CREATED FOR SECOND NAVBLOCK

// TODO [✅] ANIMATION CREATED FOR FIRST NAVBLOCK
// TODO [✅] RESET SHOW, ANIMATE, FADE STATES FOR FIRST NAVBLOCK
// TODO [] ANIMATION CREATED FOR SECOND NAVBLOCK
// TODO [] RESET SHOW, ANIMATE, FADE STATES FOR SECOND NAVBLOCK
// TODO [] ANIMATION CREATED FOR THIRD NAVBLOCK
// TODO [] RESET SHOW, ANIMATE, FADE STATES FOR THIRD NAVBLOCK
// TODO [] ANIMATION CREATED FOR FOURTH NAVBLOCK
// TODO [] RESET SHOW, ANIMATE, FADE STATES FOR FOURTH NAVBLOCK

const NavBlock = styled(NavBlockTemplate)`
  animation: ${(props) =>
    props.animate
      ? css`3s ${scaleUp} cubic-bezier(0.39, 0.575, 0.565, 1)
            forwards;`
      : props.show
      ? css`2s ${fadeInFrame} forwards;`
      : undefined};

  ${(first) =>
    first &&
    css`
      top: 0;
      left: 0;
      transform-origin: top left;
      color: ${theme.color.black};
      background-color: ${theme.primary.main};
      &:hover {
        color: ${theme.primary.main};
      }
    `};
`;

const NavBlock2 = styled(NavBlockTemplate)`
  animation: ${(props) =>
    props.animate
      ? css`3s ${scaleUp} cubic-bezier(0.39, 0.575, 0.565, 1)
            forwards;`
      : props.show
      ? css`2s ${fadeInFrame} forwards;`
      : undefined};

  ${(second) =>
    second &&
    css`
      top: 0;
      right: 0;
      transform-origin: top right;
      color: ${theme.color.white};
      background-color: ${theme.secondary.main};
      &:hover {
        color: ${theme.secondary.main};
      }
    `}
`;
const NavBlock3 = styled(NavBlockTemplate)`
  position: absolute;
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  z-index: 0;

  ${(third) =>
    third &&
    css`
      bottom: 0;
      left: 0;
      transform-origin: bottom left;
      color: ${theme.color.white};
      background-color: ${theme.secondary.light};
      &:hover {
        color: ${theme.secondary.light};
      }
    `}
`;

const NavBlock4 = styled(NavBlockTemplate)`
  position: absolute;
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;

  ${(fourth) =>
    fourth &&
    css`
      bottom: 0;
      right: 0;
      transformorigin: bottom right;
      color: ${theme.color.black};
      background-color: ${theme.primary.light};
      &:hover {
        color: ${theme.primary.light};
      }
    `}
`;

const ListItems = ({
  show,
  handleClick,
  handleClose,
  first,
  second,
  third,
  fourth,
}) => {
  const links = ["Home", "About", "Work", "Contact"];
  const [animate, setAnimate] = useState(false);
  const [fade, setFade] = useState(false);
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    console.log(` useEffect
    Show: ${show}
    Animate: ${animate}
    Fade: ${fade}
    Slide In: ${slideIn}
    `);
    // if (show) setSlideIn(true);
    // if (!show) setSlideIn(false);
  }, [show, animate, fade, slideIn]);

  const startAnimationAndFade = () => {
    const now = Date.now();
    console.log(now);
    setAnimate(!animate); // <- This starts animation

    setTimeout(() => {
      console.log("startAnimationAndFade", Date.now() - now);
      return setFade(true); // <- fades opacity of link
    }, 6000);
  };

  const secondAnimation = ({ show, animate, fade }) => {
    console.log({ show, animate, fade });
    if (show && !animate && !fade) return;
    else return showStopper();
  };

  const showStopper = () =>
    setTimeout(() => {
      setAnimate(!animate);
      setFade(false);
      handleClose();
      console.log("States all false", Date.now());
    }, 4500);

  return (
    <NavBlocks show={show} fade={fade}>
      <NavBlock
        to="/"
        first={first}
        animate={animate}
        show={show}
        onAnimationEnd={() => secondAnimation({ show, animate, fade })}
      >
        <NavBlockSpan rotation="-45deg" onClick={() => startAnimationAndFade()}>
          {links[0]}
        </NavBlockSpan>
      </NavBlock>
      <NavBlock2
        to={`/${links[1].toLowerCase()}`}
        second={second}
        // animate={animate}
      >
        <NavBlockSpan
          rotation="45deg" /* onClick={() => startAnimationAndFade()} */
        >
          {links[1]}
        </NavBlockSpan>
      </NavBlock2>
      <NavBlock3
        to={`/${links[2].toLowerCase()}`}
        third={third}
        // animate={animate}
      >
        <NavBlockSpan
          rotation="45deg" /* onClick={() => startAnimationAndFade()} */
        >
          {links[2]}
        </NavBlockSpan>
      </NavBlock3>
      <NavBlock4
        to={`/${links[3].toLowerCase()}`}
        fourth={fourth}
        // animate={animate}
      >
        <NavBlockSpan
          rotation="-45deg" /* onClick={() => startAnimationAndFade()} */
        >
          {links[3]}
        </NavBlockSpan>
      </NavBlock4>
    </NavBlocks>
  );
};

export default ListItems;
