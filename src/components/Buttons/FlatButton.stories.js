import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import FlatButton from "./FlatButton";

export const task = {
  id: "1",
  title: "Test Task",
  state: "TASK_INBOX",
  updatedAt: new Date(2018, 0, 1, 9, 0)
};

export const actions = {
  onPinTask: action("onPinTask"),
  onArchiveTask: action("onArchiveTask")
};

storiesOf("FlatButton", module)
  .add("default", () => (
    <FlatButton color="primary" onClick={() => {}}>
      Primary
    </FlatButton>
  ))
  .add("pinned", () => (
    <FlatButton color="secondary" onClick={() => {}}>
      Secondary
    </FlatButton>
  ))
  .add("archived", () => (
    <FlatButton color="danger" onClick={() => {}}>
      Danger
    </FlatButton>
  ));
