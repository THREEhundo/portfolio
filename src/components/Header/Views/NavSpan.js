import React from "react";

export const NavSpan = ({
  rotation,
  scaleAndFadeAnimation,
  children,
  animate,
  ...props
}) => <span {...props}>{children}</span>;
