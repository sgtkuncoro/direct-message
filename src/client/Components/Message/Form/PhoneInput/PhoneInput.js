import React from "react";

import classes from "./PhoneInput.css";

const PhoneInput = props => {
  return (
    <div className={classes.InputGroup}>
      <span className={classes.Code}>+{props.country}</span>
      <input
        style={props.error ? { borderColor: "red" } : {}}
        onChange={props.onChange}
        type="tel"
        className={classes.Input}
        type="text"
      />
    </div>
  );
};

export default PhoneInput;
