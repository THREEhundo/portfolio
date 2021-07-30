import React, { useEffect, createRef, useState } from "react";
import {
  NavBlocks,
  NavBlock,
  NavBlock2,
  NavBlock3,
  NavBlock4,
  NavBlockSpan,
} from "../../../View/theme";

const ListItems = ({ show, handleClick, handleClose }) => {
  const links = ["Home", "About", "Work", "Contact"];
  const [fade, setFade] = useState(false);
  const [animateFirstBlock, setAnimateFirstBlock] = useState(false);
  const [animateSecondBlock, setAnimateSecondBlock] = useState(false);
  const [animateThirdBlock, setAnimateThirdBlock] = useState(false);
  const [animateFourthBlock, setAnimateFourthBlock] = useState(false);

  const navBlockRef = createRef(null);
  const navBlock2Ref = createRef(null);
  const navBlock3Ref = createRef(null);
  const navBlock4Ref = createRef(null);

  useEffect(() => {
    navBlockRef && console.log(`useEffect navBlockRef: `, navBlockRef.current);
  }, [navBlockRef]);

  const scaleAndFadeAnimation = (e) => {
    const parentEl = e.target.parentElement;

    parentEl === navBlockRef.current
      ? setAnimateFirstBlock(!animateFirstBlock)
      : parentEl === navBlock2Ref.current
      ? setAnimateSecondBlock(!animateSecondBlock)
      : parentEl === navBlock3Ref.current
      ? setAnimateThirdBlock(!animateThirdBlock)
      : setAnimateFourthBlock(!animateFourthBlock);

    setTimeout(() => setFade(true), 5000);
  };

  const triggerOnSecondAnimation = ({ show, fade }, animate) => {
    if (show && !fade && !animate) return;
    else return resetAnimation(animate);
  };

  const resetAnimation = (animate) =>
    setTimeout(() => {
      animate === animateFirstBlock
        ? setAnimateFirstBlock(false)
        : animate === animateSecondBlock
        ? setAnimateSecondBlock(false)
        : animate === animateThirdBlock
        ? setAnimateThirdBlock(false)
        : setAnimateFourthBlock(false);
      setFade(false);
      handleClose();
    }, 7000);

  return (
    <NavBlocks show={show} fade={fade}>
      <NavBlock
        to="/"
        id="home"
        animate={animateFirstBlock}
        show={show}
        fade={fade}
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
        id="about"
        animate={animateSecondBlock}
        show={show}
        fade={fade}
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
        id="work"
        show={show}
        fade={fade}
        animate={animateThirdBlock}
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
        id="contact"
        show={show}
        fade={fade}
        animate={animateFourthBlock}
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
