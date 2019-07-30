import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "./Button";

export const actions = {
  onClick: action("onClick")
};

storiesOf("Button", module)
  .add("Default", () => (
    <div>
      <h1>Standard Button</h1>
      <Button
        color="primary"
        style={{ marginRight: "10px" }}
        onClick={actions.onClick}
      >
        Primary
      </Button>

      <Button
        color="secondary"
        style={{ marginRight: "10px" }}
        onClick={actions.onClick}
      >
        Secondary
      </Button>

      <Button
        color="confirmation"
        style={{ marginRight: "10px" }}
        onClick={actions.onClick}
      >
        Confirmation
      </Button>

      <Button
        color="danger"
        style={{ marginRight: "10px" }}
        onClick={actions.onClick}
      >
        Danger
      </Button>
    </div>
  ))
  .add("Disabled State", () => (
    <div>
      <h1>Disabled State</h1>
      <Button
        color="primary"
        disabled={true}
        style={{ marginRight: "10px" }}
        onClick={actions.onClick}
      >
        Primary
      </Button>

      <Button
        color="secondary"
        disabled={true}
        style={{ marginRight: "10px" }}
        onClick={actions.onClick}
      >
        Secondary
      </Button>

      <Button
        color="confirmation"
        disabled={true}
        style={{ marginRight: "10px" }}
        onClick={actions.onClick}
      >
        Confirmation
      </Button>

      <Button
        color="danger"
        disabled={true}
        style={{ marginRight: "10px" }}
        onClick={actions.onClick}
      >
        Danger
      </Button>
    </div>
  ))
  .add("Loading State", () => (
    <div>
      <h1>Loading State</h1>
      <Button
        color="primary"
        isLoading={true}
        iconClass="fa fa-plus"
        style={{ marginRight: "10px" }}
        onClick={actions.onClick}
      >
        Create
      </Button>

      <Button
        color="secondary"
        isLoading={true}
        iconClass="fa fa-cloud-upload"
        style={{ marginRight: "10px" }}
        onClick={actions.onClick}
      >
        Secondary
      </Button>

      <Button
        color="confirmation"
        isLoading={true}
        iconClass="fa fa-plus"
        style={{ marginRight: "10px" }}
        onClick={actions.onClick}
      >
        Attach
      </Button>

      <Button
        color="danger"
        isLoading={true}
        iconClass="fa fa-trash"
        style={{ marginRight: "10px" }}
        onClick={actions.onClick}
      >
        Delete
      </Button>
    </div>
  ));
