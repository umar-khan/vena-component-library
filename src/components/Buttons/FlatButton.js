import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MuiButton from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  BLUE_10,
  BLUE_50,
  GRAY_50,
  RED_10,
  RED_50,
  BLACK,
  WHITE
} from "../../styles/colours";

const styles = {
  root: {
    minHeight: "36px",
    minWidth: "80px",
    paddingLeft: "16px",
    paddingRight: "16px",
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: "bold",
    textTransform: "none",

    "&:disabled": {
      cursor: "not-allowed",
      pointerEvents: "auto"
    }
  },
  primary: {
    color: BLUE_50,

    "&:hover": {
      backgroundColor: BLUE_10
    },

    "&:disabled": {
      backgroundColor: WHITE,
      color: GRAY_50
    },

    "&:disabled&:hover": {
      backgroundColor: WHITE,
      color: GRAY_50
    }
  },
  secondary: {
    color: BLACK,

    "&:hover": {
      backgroundColor: GRAY_50
    },

    "&:disabled": {
      backgroundColor: WHITE,
      color: GRAY_50
    },

    "&:disabled&:hover": {
      backgroundColor: WHITE,
      color: GRAY_50
    }
  },
  danger: {
    color: RED_50,

    "&:hover": {
      backgroundColor: RED_10
    },

    "&:disabled": {
      backgroundColor: WHITE,
      color: GRAY_50
    },

    "&:disabled&:hover": {
      backgroundColor: WHITE,
      color: GRAY_50
    }
  },
  icon: {
    marginRight: "8px"
  },
  buttonLabel: {
    backgroundColor: "inherit" // We need this hear so that loadingIconContainer can inherit the button background color
  },
  loadingIconContainer: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "24px",
    color: BLACK,
    backgroundColor: "inherit"
  }
};

function FlatButton({
  classes,
  color,
  disabled,
  isLoading,
  iconClass,
  onClick,
  children,
  ...rest
}) {
  let colorClass = "";

  switch (color) {
    case "primary":
      colorClass = classes.primary;
      break;
    case "secondary":
      colorClass = classes.secondary;
      break;
    case "danger":
      colorClass = classes.danger;
      break;
    case "stuff":
      colorClass = "bb";
      break;
    default:
      colorClass = classes.primary;
      break;
  }

  return (
    <MuiButton
      classes={{
        root: classes.root,
        text: colorClass,
        label: classes.buttonLabel
      }}
      variant="text"
      disabled={disabled || isLoading}
      onClick={onClick}
      {...rest}
    >
      {iconClass && <i className={iconClass + " " + classes.icon} />}
      {children}
      {isLoading && (
        <div className={classes.loadingIconContainer}>
          <CircularProgress color="inherit" size={14} />
        </div>
      )}
    </MuiButton>
  );
}

FlatButton.defaultProps = {
  color: "primary",
  disabled: false,
  isLoading: false,
  iconClass: ""
};

FlatButton.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  /** Sets the background and text colours. */
  color: PropTypes.oneOf(["primary", "secondary", "danger"]),
  /** Disables button including all pointer events. */
  disabled: PropTypes.bool,
  /** Disables button and overlays a circular progress spinner. */
  isLoading: PropTypes.bool,
  /** Prepends the icon to the start of the button contents.
   * Expects font-awesome class values such as "`fa fa-plus`".
   * */
  iconClass: PropTypes.string,
  /** FlatButton onClick handler */
  onClick: PropTypes.func.isRequired,
  /** The content of the button. */
  children: PropTypes.node
};

export default withStyles(styles)(FlatButton);
