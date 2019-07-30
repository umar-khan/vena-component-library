import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MuiButton from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  GREEN_30,
  GREEN_50,
  GREEN_70,
  BLUE_30,
  BLUE_50,
  BLUE_70,
  GRAY_50,
  GRAY_70,
  RED_30,
  RED_50,
  RED_70,
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
    color: WHITE,
    textTransform: "none",

    "&:disabled": {
      cursor: "not-allowed",
      pointerEvents: "auto"
    }
  },
  primary: {
    backgroundColor: BLUE_50,

    "&:hover": {
      backgroundColor: BLUE_70
    },

    "&:disabled": {
      backgroundColor: BLUE_30,
      color: WHITE
    },

    "&:disabled&:hover": {
      backgroundColor: BLUE_30,
      color: WHITE
    }
  },
  secondary: {
    backgroundColor: GRAY_50,
    color: BLACK,

    "&:hover": {
      backgroundColor: GRAY_70
    },

    "&:disabled": {
      backgroundColor: GRAY_50,
      color: GRAY_70
    },

    "&:disabled&:hover": {
      backgroundColor: GRAY_50,
      color: GRAY_70
    }
  },
  confirmation: {
    backgroundColor: GREEN_50,

    "&:hover": {
      backgroundColor: GREEN_70
    },

    "&:disabled": {
      backgroundColor: GREEN_30,
      color: WHITE
    },

    "&:disabled&:hover": {
      backgroundColor: GREEN_30,
      color: WHITE
    }
  },
  danger: {
    backgroundColor: RED_50,

    "&:hover": {
      backgroundColor: RED_70
    },

    "&:disabled": {
      backgroundColor: RED_30,
      color: WHITE
    },

    "&:disabled&:hover": {
      backgroundColor: RED_30,
      color: WHITE
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
    backgroundColor: "inherit"
  }
};

function Button({
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
    case "confirmation":
      colorClass = classes.confirmation;
      break;
    case "danger":
      colorClass = classes.danger;
      break;
    default:
      colorClass = classes.primary;
      break;
  }

  return (
    <MuiButton
      classes={{
        root: classes.root,
        contained: colorClass,
        label: classes.buttonLabel
      }}
      variant="contained"
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

Button.defaultProps = {
  color: "primary",
  disabled: false,
  isLoading: false,
  iconClass: ""
};

Button.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  /** Sets the background and text colours. */
  color: PropTypes.oneOf(["primary", "secondary", "confirmation", "danger"]),
  /** Disables button including all pointer events. */
  disabled: PropTypes.bool,
  /** Disables button and overlays a circular progress spinner. */
  isLoading: PropTypes.bool,
  /** Prepends the icon to the start of the button contents.
   * Expects font-awesome class values such as "`fa fa-plus`".
   * */
  iconClass: PropTypes.string,
  /** Button onClick handler */
  onClick: PropTypes.func.isRequired,
  /** The content of the button. */
  children: PropTypes.node
};

export default withStyles(styles)(Button);
