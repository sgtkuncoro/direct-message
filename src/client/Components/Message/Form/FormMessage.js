import React from "react";

import classes from "./FormMessage.css";

const FormMessage = props => {
  return (
    <div>
      <h2>Send Message</h2>
      <form>
        <div>
          <label>Phone Number : </label>
          <input className={classes.Input} type="text" />
        </div>
        <div>
          <label>Text : </label>
          <textarea className={classes.Input} />
        </div>
        <div>
          <button className={classes.Button}>Direct</button>
        </div>
      </form>
    </div>
  );
};

export default FormMessage;
