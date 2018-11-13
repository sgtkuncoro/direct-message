import React, { Component } from "react";

import classes from "./FormMessage.css";
import CountrySelect from "./CountrySelect/CountrySelect";
import PhoneInput from "./PhoneInput/PhoneInput";

class FormMessage extends Component {
  state = {
    countryCode: 62,
    phoneNumber: null,
    numberError: false
  };

  countryOnChange = event => {
    this.setState({ countryCode: event.target.value });
  };

  numberOnchange = event => {
    this.setState({
      phoneNumber: `${this.state.countryCode}${event.target.value}`,
      numberError: false
    });
  };

  handleOnClick = () => {
    const regex = /^([1-9]{2})(\d{11})$/g;
    const match = regex.test(this.state.phoneNumber);
    if (match) {
      window.open(
        `https://api.whatsapp.com/send?phone=${this.state.phoneNumber}`
      );
    } else {
      this.setState({ numberError: true });
      const self = this;
      setTimeout(() => {
        self.setState({ numberError: false });
      }, 5000);
    }
  };

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.handleOnClick();
        }}
      >
        <div className={classes.FormWrapper}>
          <div className={classes.FormGroup}>
            <CountrySelect onChange={this.countryOnChange} />
            <PhoneInput
              error={this.state.numberError}
              onChange={this.numberOnchange}
              country={this.state.countryCode}
            />
            <button
              onClick={this.handleOnClick}
              type="button"
              className={classes.Button}
            >
              Direct
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default FormMessage;
