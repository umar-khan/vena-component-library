import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Fade from "@material-ui/core/Fade";
import MuiSwitch from "@material-ui/core/Switch";
import {
  GREEN_50,
  GREEN_70,
  GRAY_50,
  GRAY_70,
  WHITE
} from "../../styles/colours";

const styles = theme => ({
  switchBase: {
    "&$switchChecked": {
      color: WHITE,
      "& + $switchBar": {
        backgroundColor: GREEN_50
      }
    },
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.sharp
    })
  },
  switchChecked: {
    transform: "translateX(12px)",
    "& + $switchBar": {
      opacity: 1
    }
  },
  switchBar: {
    boxShadow: theme.shadows[1],
    borderRadius: 10,
    width: 30,
    height: 16,
    marginTop: -8,
    marginLeft: -4,
    backgroundColor: GRAY_50,
    opacity: 1
  },
  switchIcon: {
    width: 12,
    height: 12,
    marginLeft: 23
  },
  switchLabelOn: {
    color: GREEN_50,
    fontWeight: 700,
    fontSize: 12,
    marginTop: 1
  },
  switchLabelOff: {
    color: GRAY_70,
    fontWeight: 700,
    fontSize: 12,
    marginTop: 1
  }
});

const Switch = ({ classes, checked, onChange, enabledText, disabledText }) => (
  <FormControlLabel
    control={
      <MuiSwitch
        classes={{
          switchBase: classes.switchBase,
          bar: classes.switchBar,
          icon: classes.switchIcon,
          iconChecked: classes.switchIconChecked,
          checked: classes.switchChecked
        }}
        checked={checked}
        onChange={onChange}
      />
    }
    label={checked ? enabledText : disabledText}
    classes={{
      label: checked ? classes.switchLabelOn : classes.switchLabelOff
    }}
  />
);

Switch.defaultProps = {
  checked: false,
  onChange: () => {},
  enabledText: "ON",
  disabledText: "OFF"
};

Switch.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  /** Controlled switch value */
  checked: PropTypes.bool,
  /** Switch change handler */
  onChange: PropTypes.func.isRequired,
  /** Switch label enabled text */
  enabledText: PropTypes.string,
  /** Switch label disabled text */
  disabledText: PropTypes.string
};

export const SwitchComponent = Switch;
export default withStyles(styles)(Switch);
