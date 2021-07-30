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
  ({ show, fade, children, animate, staticContext, ...props }, ref) => {
    return (
      <Link {...props} ref={ref}>
        {children}
      </Link>
    );
  }
);

export const LinkWithRouteAndRef = withRouterForwardRef(StyledLink);
