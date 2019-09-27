import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import ThreeSixtyIcon from "@material-ui/icons/ThreeSixty";

import Dropdown, { DropdownComponent } from "./Dropdown";

export const actions = {
  onClick: action("onClick")
};

const addinTheme = createMuiTheme({
  venaTheme: "addin"
});

const webTheme = createMuiTheme({
  venaTheme: "web"
});

const dropdownOptions = [
  {
    value: "option1",
    menuListContent: <div>a</div>
  },
  {
    value: "option2",
    menuListContent: (
      <>
        <div style={{ display: "inline-block" }}>
          <DeleteIcon />
        </div>
        <div>Delete this option</div>
      </>
    )
  },
  {
    value: "option3",
    menuListContent: (
      <>
        <div style={{ display: "inline-block" }}>
          <ThreeSixtyIcon />
        </div>
        <div
          style={{
            display: "inline-block",
            textOverflow: "ellipsis",
            overflow: "hidden",
            paddingLeft: "5px"
          }}
        >
          This is a very very very long statment that is bigger than the
          dropdown menu
        </div>
      </>
    )
  }
];

class DropdownDemo extends React.Component {
  state = {
    value: ""
  };

  onChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <Dropdown
        placeholder={"Select an option"}
        options={dropdownOptions}
        value={this.state.value}
        onChange={this.onChange}
        required
      />
    );
  }
}

storiesOf("Dropdown", module)
  .add(
    "Default",
    withInfo({
      source: false,
      propTables: [DropdownComponent],
      propTablesExclude: [Dropdown]
    })(() => (
      <div>
        <MuiThemeProvider theme={webTheme}>
          <div>
            <h2>Standard Dropdown</h2>
            <DropdownDemo />
          </div>
        </MuiThemeProvider>
      </div>
    ))
  )
  .add("Disabled", () => (
    <div>
      <MuiThemeProvider theme={webTheme}>
        <div>
          <h2>Standard Dropdown</h2>
          <Dropdown
            placeholder={"Select an option"}
            options={dropdownOptions}
            value={""}
            disabled
          />
        </div>
      </MuiThemeProvider>
    </div>
  ))
  .add("Error", () => (
    <div>
      <MuiThemeProvider theme={webTheme}>
        <div>
          <h2>Standard Dropdown</h2>
          <Dropdown
            placeholder={"Select an option"}
            options={dropdownOptions}
            value={""}
            error
            helperText={"This is an error"}
          />
        </div>
      </MuiThemeProvider>
    </div>
  ));
