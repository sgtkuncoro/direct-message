import React from "react";

import Aux from "../../Hoc/Auxiliary";
import classes from "./Layout.css";

const Layout = props => (
  <Aux>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default Layout;
