import React from "react";

import classes from "./PhoneInput.css";

const PhoneInput = props => {
  return (
    <div>
      <input
        onChange={props.onChange}
        type="tel"
        className={classes.Input}
        type="text"
      />
    </div>
  );
};

export default PhoneInput;
