import React, { createRef, useState } from "react";
import { NavBlocks, NavBlockSpan, Block } from "../../../View/theme";
import { linkProps } from "../data/menuData";

const ListItems = ({ show, handleClose }) => {
  const [fade, setFade] = useState(false);
  const [animateFirstBlock, setAnimateFirstBlock] = useState(false);
  const [animateSecondBlock, setAnimateSecondBlock] = useState(false);
  const [animateThirdBlock, setAnimateThirdBlock] = useState(false);
  const [animateFourthBlock, setAnimateFourthBlock] = useState(false);

  const navBlockRef = createRef(null);
  const navBlock2Ref = createRef(null);
  const navBlock3Ref = createRef(null);
  const navBlock4Ref = createRef(null);

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
    }, 3000);

  return (
    <NavBlocks show={show} fade={fade}>
      {linkProps.map((link, index) => {
        const {
          id,
          top,
          bottom,
          left,
          right,
          transformOrigin,
          color,
          backgroundColor,
          hoverColor,
          delay,
        } = link;
        let chosenBlock, rotation, blockRef, address;
        index === 0
          ? (chosenBlock = animateFirstBlock)
          : index === 1
          ? (chosenBlock = animateSecondBlock)
          : index === 2
          ? (chosenBlock = animateThirdBlock)
          : (chosenBlock = animateFourthBlock);
        index === 0 || index === 2
          ? (rotation = "-45deg")
          : (rotation = "45deg");
        index === 0
          ? (blockRef = navBlockRef)
          : index === 1
          ? (blockRef = navBlock2Ref)
          : index === 2
          ? (blockRef = navBlock3Ref)
          : (blockRef = navBlock4Ref);
        index === 0
          ? (address = "/")
          : index === 1
          ? (address = "/about")
          : index === 2
          ? (address = "/work")
          : (address = "/contact");

        return (
          <Block
            to={address}
            key={index}
            ref={blockRef}
            show={show}
            fade={fade}
            top={top}
            bottom={bottom}
            left={left}
            right={right}
            transformOrigin={transformOrigin}
            color={color}
            backgroundColor={backgroundColor}
            hoverColor={hoverColor}
            animate={chosenBlock}
            delay={delay}
            onAnimationEnd={() =>
              triggerOnSecondAnimation({ show, fade }, chosenBlock)
            }
            replace
          >
            <NavBlockSpan
              rotation={rotation}
              animate={chosenBlock}
              onClick={(e) => scaleAndFadeAnimation(e)}
            >
              {id}
            </NavBlockSpan>
          </Block>
        );
      })}
    </NavBlocks>
  );
};

export default ListItems;
