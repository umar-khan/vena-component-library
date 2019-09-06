import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import FlatButton, { FlatButtonComponent } from "./FlatButton";

export const actions = {
  onClick: action("onClick")
};

const addinTheme = createMuiTheme({
  venaTheme: "addin"
});

const webTheme = createMuiTheme({
  venaTheme: "web"
});

storiesOf("FlatButton", module)
  .add(
    "Default",
    withInfo({
      source: false,
      propTables: [FlatButtonComponent],
      propTablesExclude: [FlatButton]
    })(() => (
      <div>
        <MuiThemeProvider theme={webTheme}>
          <div>
            <h2>Standard FlatButton (Web)</h2>
            <FlatButton
              color="primary"
              style={{ marginRight: "10px" }}
              onClick={actions.onClick}
            >
              Primary
            </FlatButton>

            <FlatButton
              color="secondary"
              style={{ marginRight: "10px" }}
              onClick={actions.onClick}
            >
              Secondary
            </FlatButton>

            <FlatButton
              color="danger"
              style={{ marginRight: "10px" }}
              onClick={actions.onClick}
            >
              Danger
            </FlatButton>
          </div>
        </MuiThemeProvider>
      </div>
    ))
  )
  .add("Disabled State", () => (
    <div>
      <MuiThemeProvider theme={webTheme}>
        <div>
          <h2>Disabled State (Web)</h2>
          <FlatButton
            color="primary"
            disabled={true}
            style={{ marginRight: "10px" }}
            onClick={actions.onClick}
          >
            Primary
          </FlatButton>

          <FlatButton
            color="secondary"
            disabled={true}
            style={{ marginRight: "10px" }}
            onClick={actions.onClick}
          >
            Secondary
          </FlatButton>

          <FlatButton
            color="danger"
            disabled={true}
            style={{ marginRight: "10px" }}
            onClick={actions.onClick}
          >
            Danger
          </FlatButton>
        </div>
      </MuiThemeProvider>
    </div>
  ))
  .add("Loading State", () => (
    <div>
      <MuiThemeProvider theme={webTheme}>
        <div>
          <h2>Loading State (Web)</h2>
          <FlatButton
            color="primary"
            isLoading={true}
            iconClass="fa fa-plus"
            style={{ marginRight: "10px" }}
            onClick={actions.onClick}
          >
            Create
          </FlatButton>

          <FlatButton
            color="secondary"
            isLoading={true}
            iconClass="fa fa-cloud-upload"
            style={{ marginRight: "10px" }}
            onClick={actions.onClick}
          >
            Secondary
          </FlatButton>

          <FlatButton
            color="danger"
            isLoading={true}
            iconClass="fa fa-trash"
            style={{ marginRight: "10px" }}
            onClick={actions.onClick}
          >
            Delete
          </FlatButton>
        </div>
      </MuiThemeProvider>
    </div>
  ));
