import React, { forwardRef, useRef, useState } from "react";
import {
  Icon,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  withStyles,
} from "@material-ui/core";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid white",
  },
})(
  forwardRef((props, ref) => (
    <Menu
      ref={ref}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
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

  const handleClick = () => {
    menuRef.current.focus();
    setAnchorEl(menuRef.current);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuRef = useRef();

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
          <ListItem button>
            <ListItemText primary="About" />
          </ListItem>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItem button>
            <ListItemText primary="Work" />
          </ListItem>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItem button>
            <ListItemText primary="Contact" />
          </ListItem>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
};

export default PortfolioMenu;
