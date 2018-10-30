import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./Message.css";
import FormMessage from "./Form/FormMessage";
import CodeSelector from "./CodeSelector/CodeSelector";

class Message extends Component {
  render() {
    return (
      <div className={classes.Message}>
        <CodeSelector />
        <FormMessage />
      </div>
    );
  }
}

Message.propTypes = {};

export default Message;
