import React from "react";

import classes from "./FormMessage.css";
import CountrySelect from "./CountrySelect/CountrySelect";
import PhoneInput from "./PhoneInput/PhoneInput";

const FormMessage = props => {
  return (
    <form>
      <div className={classes.FormWrapper}>
        <CountrySelect />
        <PhoneInput />
        <button type="button" className={classes.Button}>
          Direct
        </button>
      </div>
    </form>
  );
};

export default FormMessage;
