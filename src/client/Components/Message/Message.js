import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./Message.css";
import FormMessage from "./Form/FormMessage";

class Message extends Component {
  render() {
    return (
      <div className={classes.Message}>
        <h2>Direct Message</h2>
        <FormMessage />
      </div>
    );
  }
}

Message.propTypes = {};

export default Message;
