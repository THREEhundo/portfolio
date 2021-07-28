import React, { useRef, useState } from "react";
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
// TODO [✅] ANIMATE CREATED FOR SECOND NAVBLOCK
// TODO [✅] ANIMATE CREATED FOR SECOND NAVBLOCK

// TODO [✅] ANIMATION CREATED FOR FIRST NAVBLOCK
// TODO [✅] RESET SHOW, ANIMATE, FADE STATES FOR FIRST NAVBLOCK
// TODO [✅] ANIMATION CREATED FOR SECOND NAVBLOCK
// TODO [✅] RESET SHOW, ANIMATE, FADE STATES FOR SECOND NAVBLOCK
// TODO [✅] ANIMATION CREATED FOR THIRD NAVBLOCK
// TODO [✅] RESET SHOW, ANIMATE, FADE STATES FOR THIRD NAVBLOCK
// TODO [✅] ANIMATION CREATED FOR FOURTH NAVBLOCK
// TODO [✅] RESET SHOW, ANIMATE, FADE STATES FOR FOURTH NAVBLOCK

const NavBlock = styled(NavBlockTemplate)`
  animation: ${(props) =>
    props.animateFirstBlock
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
    props.animateSecondBlock
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
  animation: ${(props) =>
    props.animateThirdBlock
      ? css`3s ${scaleUp} cubic-bezier(0.39, 0.575, 0.565, 1)
            forwards;`
      : props.show
      ? css`2s ${fadeInFrame} forwards;`
      : undefined};

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
  animation: ${(props) =>
    props.animateFourthBlock
      ? css`3s ${scaleUp} cubic-bezier(0.39, 0.575, 0.565, 1)
            both;`
      : props.show
      ? css`2s ${fadeInFrame} forwards;`
      : undefined};

  ${(fourth) =>
    fourth &&
    css`
      bottom: 0;
      right: 0;
      transform-origin: bottom right;
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
  const [fade, setFade] = useState(false);
  const [animateFirstBlock, setAnimateFirstBlock] = useState(false);
  const [animateSecondBlock, setAnimateSecondBlock] = useState(false);
  const [animateThirdBlock, setAnimateThirdBlock] = useState(false);
  const [animateFourthBlock, setAnimateFourthBlock] = useState(false);
  const navBlockRef = useRef(null);
  const navBlock2Ref = useRef(null);
  const navBlock3Ref = useRef(null);
  const navBlock4Ref = useRef(null);

  const scaleAndFadeAnimation = (e) => {
    const parentElem = e.target.parentElement;
    parentElem === navBlockRef.current
      ? setAnimateFirstBlock(!animateFirstBlock)
      : parentElem === navBlock2Ref.current
      ? setAnimateSecondBlock(!animateSecondBlock)
      : parentElem === navBlock3Ref.current
      ? setAnimateThirdBlock(!animateThirdBlock)
      : setAnimateFourthBlock(!animateFourthBlock);

    setTimeout(() => {
      return setFade(true); // <- fades opacity of link
    }, 6000);
  };

  const triggerOnSecondAnimation = ({ show, fade }, animate) => {
    if (show && !fade && !animate) return;
    else return resetAnimation({ animate });
  };

  const resetAnimation = ({ animate }) =>
    setTimeout(() => {
      animate === animateFirstBlock
        ? setAnimateFirstBlock(!animateFirstBlock)
        : animate === animateSecondBlock
        ? setAnimateSecondBlock(!animateSecondBlock)
        : animate === animateThirdBlock
        ? setAnimateThirdBlock(!animateThirdBlock)
        : setAnimateFourthBlock(!animateFourthBlock);
      setFade(false);
      handleClose();
      console.log("States all false", Date.now());
    }, 5500);
  /**
   * * ANIMATION BUG
   * ! Animate == boolean state
   * ! Animate added to both NavBlocks
   * ! Both NavBlocks play out Animation
   * TODO [] ANIMATE EACH NAVBLOCK INDIVIDUALLY
   * ? Keep animate boolean ✅
   * ? get ref in scaleAndFadeAnimation of NavBlock ------
   * ?
   * ? add additional state for each NavBlock
   * ? turn each state on and off based on click ref?
   * ? seperate animation from each NavBlock, based on click trigger animation?
   *
   *
   */

  return (
    <NavBlocks show={show} fade={fade}>
      <NavBlock
        to="/"
        first={first}
        animateFirstBlock={animateFirstBlock}
        show={show}
        ref={navBlockRef}
        onAnimationEnd={() =>
          triggerOnSecondAnimation({ show, fade }, animateFirstBlock)
        }
      >
        <NavBlockSpan
          rotation="-45deg"
          onClick={(e) => scaleAndFadeAnimation(e)}
        >
          {links[0]}
        </NavBlockSpan>
      </NavBlock>
      <NavBlock2
        to={`/${links[1].toLowerCase()}`}
        second={second}
        animateSecondBlock={animateSecondBlock}
        show={show}
        ref={navBlock2Ref}
        onAnimationEnd={() =>
          triggerOnSecondAnimation({ show, fade }, animateSecondBlock)
        }
      >
        <NavBlockSpan
          rotation="45deg"
          onClick={(e) => scaleAndFadeAnimation(e)}
        >
          {links[1]}
        </NavBlockSpan>
      </NavBlock2>
      <NavBlock3
        to={`/${links[2].toLowerCase()}`}
        third={third}
        animateThirdBlock={animateThirdBlock}
        ref={navBlock3Ref}
        onAnimationEnd={() =>
          triggerOnSecondAnimation({ show, fade }, animateThirdBlock)
        }
      >
        <NavBlockSpan
          rotation="45deg"
          onClick={(e) => scaleAndFadeAnimation(e)}
        >
          {links[2]}
        </NavBlockSpan>
      </NavBlock3>
      <NavBlock4
        to={`/${links[3].toLowerCase()}`}
        fourth={fourth}
        animateFourthBlock={animateFourthBlock}
        ref={navBlock4Ref}
        onAnimationEnd={() =>
          triggerOnSecondAnimation({ show, fade }, animateFourthBlock)
        }
      >
        <NavBlockSpan
          rotation="-45deg"
          onClick={(e) => scaleAndFadeAnimation(e)}
        >
          {links[3]}
        </NavBlockSpan>
      </NavBlock4>
    </NavBlocks>
  );
};

export default ListItems;
