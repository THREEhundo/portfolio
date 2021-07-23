import React, { forwardRef, useRef, useState } from "react";
import {
  Icon,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  withStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const StyledMenu = withStyles((theme) => {
  return {
    paper: {
      height: "100%",
      width: "100%",
      maxHeight: "calc(100% - 20px)",
      border: `1px solid ${theme.palette.secondary.main}`,
      textAlign: "center",
    },
  };
})(
  forwardRef((props, ref) => (
    <Menu
      ref={ref}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      {...props}
    />
  ))
);

const StyledMenuItem = withStyles((theme) => {
  return {
    root: {
      "&:focus": {
        backgroundColor: theme.palette.primary.main,
        "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
          color: theme.palette.secondary.main,
        },
      },
      "&:hover": {
        backgroundColor: theme.palette.secondary.main,
        "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
          color: theme.palette.primary.contrastText,
        },
      },
    },
  };
})(MenuItem);

const PortfolioMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const menuRef = useRef();

  const handleClick = () => {
    menuRef.current.focus();
    setAnchorEl(menuRef.current);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Icon
        aria-controls="menu"
        aria-haspopup="true"
        className="fas fa-angle-left"
        color="primary"
        style={{ fontSize: "3.25rem" }}
        onClick={handleClick}
      />
      <StyledMenu
        id="menu"
        ref={menuRef}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItem button divider>
            <Link to="/">
              <ListItemText primary="Home" />
            </Link>
          </ListItem>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItem button divider>
            <Link to="/about">
              <ListItemText primary="About" />
            </Link>
          </ListItem>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItem button divider>
            <Link to="/work">
              <ListItemText primary="Work" />
            </Link>
          </ListItem>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItem button divider>
            <Link to="/contact">
              <ListItemText primary="Contact" />
            </Link>
          </ListItem>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
};

export default PortfolioMenu;
