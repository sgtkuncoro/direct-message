import React, { Component } from "react";
import PropTypes from "prop-types";

import Aux from "../../Hoc/Auxiliary";
import Message from "../../Components/Message/Message";

class DirectMessage extends Component {
  render() {
    return (
      <Aux>
        <Message />
      </Aux>
    );
  }
}

DirectMessage.propTypes = {};

export default DirectMessage;
