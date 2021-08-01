import React, { forwardRef } from "react";
import { Link, withRouter } from "react-router-dom";

const withRouterForwardRef = (Component) => {
  const WithRouter = withRouter(({ forwardedRef, ...props }) => (
    <Component ref={forwardedRef} {...props} />
  ));

  return forwardRef(({ ...props }, ref) => (
    <WithRouter {...props} forwardedRef={ref} />
  ));
};

const StyledLink = forwardRef(
  (
    {
      to,
      show,
      fade,
      children,
      animate,
      staticContext,
      top,
      bottom,
      left,
      right,
      transformOrigin,
      backgroundColor,
      hoverColor,
      ...props
    },
    ref
  ) => {
    return (
      <Link to={to} ref={ref} {...props}>
        {children}
      </Link>
    );
  }
);

StyledLink.defaultProps = {
  top: null,
  bottom: null,
  left: null,
  right: null,
};

export const LinkWithRouteAndRef = withRouterForwardRef(StyledLink);
