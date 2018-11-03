import React from "react";
import PropTypes from "prop-types";

import classes from "./CountrySelect.css";

const CountrySelect = props => {
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

CountrySelect.propTypes = {};

export default CountrySelect;
