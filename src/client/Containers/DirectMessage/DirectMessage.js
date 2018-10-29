import React, { Component } from "react";
import PropTypes from "prop-types";

import Aux from "../../Hoc/Auxiliary";
import FormMessage from "../../Components/Message/Form/FormMessage";

class DirectMessage extends Component {
  render() {
    return (
      <Aux>
        <FormMessage />
      </Aux>
    );
  }
}

DirectMessage.propTypes = {};

export default DirectMessage;
