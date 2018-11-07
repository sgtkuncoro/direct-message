import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./CountrySelect.css";

class CountrySelect extends Component {
  render() {
    return (
      <div>
        <select
          onChange={this.props.onChange}
          className={classes.InputSelect}
          id="country"
          name="country"
        >
          <option value="62">Indonesia</option>
          <option value="65">Singapure</option>
          <option value="60">Malaysia</option>
        </select>
      </div>
    );
  }
}

CountrySelect.propTypes = {};

export default CountrySelect;
