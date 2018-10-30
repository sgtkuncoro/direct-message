import React from "react";
import PropTypes from "prop-types";

import classes from "./CodeSelector.css";

const CodeSelector = props => {
  return (
    <div>
      <select className={classes.InputSelect} id="country" name="country">
        <option value="australia">Australia</option>
        <option value="canada">Canada</option>
        <option value="usa">USA</option>
      </select>
    </div>
  );
};

CodeSelector.propTypes = {};

export default CodeSelector;
