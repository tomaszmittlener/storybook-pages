/* eslint-disable no-script-url */
import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import TextLink from "./text-link";

storiesOf("TextLink", module).add("Text link", () => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap"
    }}
  >
    <TextLink
      variant="primary"
      href="javascript:void(0);"
      onClick={action("onClick")}
      style={{
        marginRight: "16px"
      }}
    >
      Text Link
    </TextLink>
    <TextLink
      variant="secondary"
      href="javascript:void(0);"
      onClick={action("onClick")}
      style={{
        marginRight: "16px"
      }}
    >
      Text Link
    </TextLink>
  </div>
));
