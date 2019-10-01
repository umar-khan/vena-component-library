import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import ThreeSixtyIcon from "@material-ui/icons/ThreeSixty";

import Select, { SelectComponent } from "./Select";

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
          This is a very long statment that is bigger than the dropdown menu
        </div>
      </>
    )
  }
];

class SelectDemo extends React.Component {
  state = {
    value: ""
  };

  onChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <Select
        id={"dropdown_id"}
        label={"Select Operation"}
        helperText={"Some important text"}
        placeholder={"Select an option"}
        options={dropdownOptions}
        value={this.state.value}
        onChange={this.onChange}
        required
      />
    );
  }
}

storiesOf("Select", module)
  .add(
    "Default",
    withInfo({
      source: false,
      propTables: [SelectComponent],
      propTablesExclude: [Select, SelectDemo, MuiThemeProvider]
    })(() => (
      <div>
        <MuiThemeProvider theme={addinTheme}>
          <div>
            <h2>Standard Select</h2>
            <SelectDemo />
          </div>
        </MuiThemeProvider>
      </div>
    ))
  )
  .add("Disabled", () => (
    <div>
      <MuiThemeProvider theme={addinTheme}>
        <div>
          <h2>Disabled Select</h2>
          <Select
            placeholder={"Select an option"}
            label={"Select Operation"}
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
      <MuiThemeProvider theme={addinTheme}>
        <div>
          <h2>Error Select</h2>
          <Select
            placeholder={"Select an option"}
            label={"Select Operation"}
            options={dropdownOptions}
            value={""}
            error
            helperText={"This is an error"}
          />
        </div>
      </MuiThemeProvider>
    </div>
  ));
