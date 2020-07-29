import * as React from "react";
import classNames from "classnames";

import styles from "./styles.scss";

function TextLink({
  children,
  variant,
  component,
  className,
  ...otherProps
}) {
  const Component = component || TextLink.defaultProps.component
  return (
    <Component
      className={classNames(styles.textLink, styles[variant], className)}
      {...otherProps}
    >
      {children}
    </Component>
  );
}

TextLink.defaultProps = {
  children: null,
  variant: "primary",
  component: "a",
  className: ""
};

TextLink.displayName = "TextLink";

export default TextLink;
