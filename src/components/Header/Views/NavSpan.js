import React from "react";

export const NavSpan = ({
  rotation,
  scaleAndFadeAnimation,
  children,
  ...props
}) => (
  <span rotation={rotation} {...props}>
    {children}
  </span>
);
