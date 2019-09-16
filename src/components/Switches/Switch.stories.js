import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Switch, { SwitchComponent } from "./Switch";

export const actions = {
  onClick: action("onClick")
};

const addinTheme = createMuiTheme({
  venaTheme: "addin"
});

const webTheme = createMuiTheme({
  venaTheme: "web"
});

class SwitchDemo extends React.Component {
  state = {
    checked: false
  };

  handleChange = () => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    return (
      <div>
        <Switch checked={this.state.checked} onChange={this.handleChange} />
      </div>
    );
  }
}

storiesOf("Switch", module).add(
  "Default",
  withInfo({
    source: false,
    propTables: [SwitchComponent],
    propTablesExclude: [Switch, SwitchDemo, MuiThemeProvider]
  })(() => (
    <div>
      <h2>Standard Switch (Web)</h2>
      <MuiThemeProvider theme={webTheme}>
        <SwitchDemo />
      </MuiThemeProvider>
    </div>
  ))
);
