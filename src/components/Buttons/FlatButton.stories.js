import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import FlatButton from "./FlatButton";

export const actions = {
  onClick: action("onClick")
};

storiesOf("FlatButton", module)
  .add("Default", () => (
    <div>
      <h1>Standard FlatButton</h1>
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
  ))
  .add("Disabled State", () => (
    <div>
      <h1>Disabled State</h1>
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
  ))
  .add("Loading State", () => (
    <div>
      <h1>Loading State</h1>
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
  ));
