import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import {
  BLUE_50,
  GRAY_50,
  GRAY_90,
  GRAY_30,
  RED_50,
  WHITE,
  BLACK
} from "../../styles/colours";

const styles = theme => {
  return {
    listItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "left",
      padding: "3px 5px",
      fontSize: "14px"
    },
    paper: {
      top: "146px !important",
      left: "9px !important",
      boxShadow: `0px 1px 1px ${GRAY_50}`,
      borderRadius: 0
    },
    select: {
      display: "flex",
      justifyContent: "left",
      alignItems: "center",
      padding: 0,
      width: "275px",
      "&:focus": {
        background: WHITE
      }
    },
    listContainer: {
      padding: 0,
      width: "320px"
    },
    inputLabel: {
      fontSize: "18px",
      color: BLACK
    },
    placeholder: {
      color: GRAY_90
    },
    inputRoot: {
      width: "320px",
      backgroundColor: WHITE,
      border: `1px solid ${GRAY_50}`,
      boxSizing: "border-box",
      color: BLACK,
      fontSize: "14px",
      height: "32px",
      marginTop: "24px",
      paddingLeft: "8px",
      paddingRight: "8px",

      "&$inputFormControl": {
        marginTop: "24px"
      },
      "&:hover": {
        border: `1px solid ${GRAY_90}`
      },
      "&$inputDisabled": {
        border: `1px solid ${GRAY_50}`,
        backgroundColor: GRAY_30
      },
      "&$inputError": {
        border: `1px solid ${RED_50}`
      },
      "&$inputFocused": {
        border: `1px solid ${BLUE_50}`
      }
    },
    inputDisabled: {},
    inputError: {},
    inputFormControl: {},
    inputFocused: {},
    helperText: {
      fontStyle: "italic"
    },
    labelRoot: {
      color: BLACK,
      fontSize: "14px",
      transform: "scale(1)",

      "&$labelDisabled": {
        color: BLACK
      },
      "&$labelError": {
        color: BLACK
      },
      "&$labelFocused": {
        color: BLACK
      }
    },
    labelDisabled: {},
    labelError: {},
    labelFocused: {}
  };
};

function Dropdown({
  classes,
  placeholder,
  options,
  value,
  helperText,
  onChange,
  disabled,
  error,
  required,
  id,
  label
}) {
  let dropdownOptions = options;
  if (placeholder) {
    dropdownOptions = [
      {
        value: placeholder,
        menuListContent: (
          <div className={classes.placeholder}>{placeholder}</div>
        )
      },
      ...options
    ];
  }
  return (
    <TextField
      id={id}
      select
      label={label}
      disabled={disabled}
      error={error}
      value={value ? value : dropdownOptions[0].value}
      onChange={onChange}
      FormHelperTextProps={{
        classes: {
          root: classes.helperText
        }
      }}
      InputProps={{
        disableUnderline: true,
        classes: {
          root: classes.inputRoot,
          input: classes.inputInput,
          disabled: classes.inputDisabled,
          error: classes.inputError,
          formControl: classes.inputFormControl,
          focused: classes.inputFocused
        }
      }}
      InputLabelProps={{
        shrink: true,
        classes: {
          root: classes.inputLabel
        },
        FormLabelClasses: {
          root: classes.labelRoot,
          disabled: classes.labelDisabled,
          error: classes.labelError,
          focused: classes.labelFocused
        },
        required: required
      }}
      SelectProps={{
        classes: {
          select: classes.select
        },
        MenuProps: {
          className: classes.menu,
          classes: { paper: classes.paper },
          MenuListProps: {
            className: classes.listContainer
          }
        }
      }}
      helperText={helperText}
      margin="normal"
    >
      {dropdownOptions.map(option => (
        <MenuItem
          disableGutters
          classes={{ root: classes.listItem }}
          key={option.value}
          value={option.value}
        >
          {option.menuListContent}
        </MenuItem>
      ))}
    </TextField>
  );
}

Dropdown.defaultProps = {
  value: "",
  disabled: false,
  required: false,
  error: false
};

Dropdown.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  /** Sets the selected option of the dropdown*/
  value: PropTypes.any,
  /** Disables the dropdown*/
  disabled: PropTypes.bool,
  /** Adds an asterisk beside label */
  required: PropTypes.bool,
  /** Sets the helper text */
  helperText: PropTypes.node,
  /** These are the options to be displayed in the dropdown.
   * They are an array of objects, each object contains a value
   * and a menuListContent property
   * */
  options: PropTypes.array.isRequired,
  /** Sets the placeholder inside the dropdown */
  placeholder: PropTypes.string,
  /** Callback for when the options in the dropdown are changed */
  onChange: PropTypes.func,
  /** Passed as true or false depending on whether the error state needs to be shown */
  error: PropTypes.bool,
  /** Id of the dropdown  */
  id: PropTypes.string,
  /** Label of the dropdown if any  */
  label: PropTypes.string
};

export const DropdownComponent = Dropdown;
export default withStyles(styles)(Dropdown);
