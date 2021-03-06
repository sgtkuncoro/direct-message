import React from "react";
import { shallow } from "enzyme";

import App from "./App";

describe("App", () => {
  test("should match snapshot", () => {
    let wrapper = shallow(<App />);
    expect(wrapper.find("div").text()).toBe("Welcome to React Boilerplate App");
    expect(wrapper).toMatchSnapshot();
  });
});
