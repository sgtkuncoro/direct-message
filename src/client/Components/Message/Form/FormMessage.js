import React from "react";

const FormMessage = props => {
  return (
    <div>
      <h2>Send Message</h2>
      <form>
        <div>
          <label>Phone Number : </label>
          <input type="text" />
        </div>
        <div>
          <label>Text</label>
          <textarea />
        </div>
        <div>
          <button>Direct</button>
        </div>
      </form>
    </div>
  );
};

export default FormMessage;
