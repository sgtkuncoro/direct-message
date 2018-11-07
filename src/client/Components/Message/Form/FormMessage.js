import React, { Component } from "react";

import classes from "./FormMessage.css";
import CountrySelect from "./CountrySelect/CountrySelect";
import PhoneInput from "./PhoneInput/PhoneInput";

class FormMessage extends Component {
  constructor() {
    super();

    this.countryOnChange = this.countryOnChange.bind(this);
    this.numberOnchange = this.numberOnchange.bind(this);
  }

  state = {
    countryCode: 62,
    phoneNumber: null
  };

  countryOnChange(event) {
    this.setState({ countryCode: event.target.value });
  }

  numberOnchange(event) {
    this.setState({
      phoneNumber: `${this.state.countryCode}${event.target.value}`
    });
  }

  handleOnClick = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=${this.state.phoneNumber}`
    );
  };

  render() {
    console.log(this.state.phoneNumber);
    return (
      <form>
        <div className={classes.FormWrapper}>
          <CountrySelect onChange={this.countryOnChange} />
          <PhoneInput onChange={this.numberOnchange} />
          <button
            onClick={this.handleOnClick}
            type="button"
            className={classes.Button}
          >
            Direct
          </button>
        </div>
      </form>
    );
  }
}

export default FormMessage;
