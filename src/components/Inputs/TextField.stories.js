import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import TextField, { TextFieldComponent } from "./TextField";

const addinTheme = createMuiTheme({
  venaTheme: "addin"
});

const webTheme = createMuiTheme({
  venaTheme: "web"
});

class TextFieldDemo extends React.Component {
  state = {
    value: null
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div>
        <h2>TextField (Addin)</h2>
        <TextField label="First Name" style={{ marginRight: "10px" }} />

        <TextField
          label="Required"
          required={true}
          style={{ marginRight: "10px" }}
        />

        <TextField
          label="Controlled"
          helperText="Some important text"
          value={this.state.value}
          onChange={this.handleChange}
          style={{ marginRight: "10px" }}
        />

        <TextField
          label="Helper Text"
          helperText="Some important text"
          style={{ marginRight: "10px" }}
        />

        <TextField
          label="Disabled"
          value="Input Value"
          disabled={true}
          helperText="Some important text"
          style={{ marginRight: "10px" }}
        />

        <TextField
          label="Read Only"
          value="Input Value"
          readOnly={true}
          helperText="Some important text"
          style={{ marginRight: "10px" }}
        />

        <TextField
          label="With Placeholder"
          placeholder="Placeholder"
          helperText="Some important text"
          style={{ marginRight: "10px" }}
        />

        <TextField
          label="Error"
          style={{ marginRight: "10px" }}
          helperText="Some important text"
          error={true}
        />

        <TextField
          label="Number"
          style={{ marginRight: "10px" }}
          type="number"
          helperText="Some important text"
        />

        <TextField
          label="With End Adornment"
          style={{ marginRight: "10px" }}
          endAdornment={".xlsx"}
          helperText=""
        />

        <TextField
          label="Custom Width"
          style={{ minWidth: "0", width: "400px" }}
          helperText="Some important text"
        />

        <TextField
          label="Full Width"
          fullWidth={true}
          helperText="Some important text"
        />
      </div>
    );
  }
}

storiesOf("TextField", module).add(
  "Default",
  withInfo({
    source: false,
    propTables: [TextFieldComponent],
    propTablesExclude: [TextField, TextFieldDemo, MuiThemeProvider]
  })(() => (
    <div>
      <MuiThemeProvider theme={addinTheme}>
        <TextFieldDemo />
      </MuiThemeProvider>
    </div>
  ))
);
