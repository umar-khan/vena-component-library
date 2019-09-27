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
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      width: 300
    },
    listItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "left",
      padding: "3px 5px",
      fontSize: 14
    },
    paper: {
      top: "148px !important",
      left: "9px !important",
      boxShadow: "0px 1px 1px " + GRAY_50 + ", 0px 1px 1px " + GRAY_50,
      borderRadius: 0
    },
    select: {
      border: "solid 1px" + GRAY_50,
      padding: "2px 20px 2px 8px",
      fontSize: "14px",
      height: "32px",
      display: "flex",
      justifyContent: "left",
      alignItems: "center",
      "&:focus": {
        background: WHITE,
        border: "solid 1px " + BLUE_50
      },
      "&:hover": {
        border: "solid 1px " + GRAY_90
      }
    },
    listContainer: {
      padding: 0,
      width: 300
    },
    inputOnFocus: {
      marginTop: 8
    },
    inputLabel: {
      fontSize: 18,
      color: BLACK
    },
    placeholder: {
      color: GRAY_90
    },
    disabledSelect: {
      background: GRAY_30,
      border: 0,
      "&:hover": {
        border: 0
      },
      "&:focus": {
        background: WHITE
      }
    },
    errorSelect: {
      border: "solid 1px" + RED_50,
      padding: "2px 20px 2px 8px",
      fontSize: "14px",
      height: "28px",
      display: "flex",
      justifyContent: "left",
      alignItems: "center",
      "&:focus": {
        background: WHITE
      }
    },
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
  required
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
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="standard-select-currency"
        select
        label="Select Operation"
        className={classes.textField}
        disabled={disabled}
        value={value ? value : dropdownOptions[0].value}
        disableUnderline={true}
        onChange={onChange}
        FormHelperTextProps={{
          error: error ? true : false,
          classes: {
            root: classes.helperText
          }
        }}
        InputProps={{
          disableUnderline: true
        }}
        InputLabelProps={{
          shrink: true,
          className: classes.inputLabel,
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
            root: classes.inputOnFocus,
            select: error ? classes.errorSelect : classes.select,
            disabled: classes.disabledSelect
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
    </form>
  );
}

Dropdown.defaultProps = {
  value: "",
  disabled: false,
  required: false,
  helperText: "Some important text"
};

Dropdown.propTypes = {
  /** @ignore */
  /** Sets the background and text colours. */
  classes: PropTypes.object.isRequired,
  /** Sets the selected option of the dropdown*/
  value: PropTypes.node,
  /** Disables the dropdown*/
  disabled: PropTypes.bool,
  /** Adds an asterisk beside label */
  required: PropTypes.bool,
  /** Sets the helper text */
  helperText: PropTypes.string,
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
  error: PropTypes.bool
};

export const DropdownComponent = Dropdown;
export default withStyles(styles)(Dropdown);
