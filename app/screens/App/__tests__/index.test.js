import React from "react";
import { expect } from "chai";
import { shallow, mount } from "enzyme";
import { MemoryRouter, StaticRouter } from "react-router-dom";
import App from "../";

describe("App", () => {
  it("should render a Nav component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Nav").length).to.equal(1);
  });

  it("should render two Routes", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Route").length).to.equal(2);
  });

  // it("should render BillCalculator on location /", () => {
  //   const context = {};
  //   const wrapper = shallow(
  //     <StaticRouter location={{pathname: "/"}} context={context}><App /></StaticRouter>
  //   );
  //   console.log(wrapper.renderer.getRenderOutput())
  //   expect(wrapper.find("BillCalculator").length).to.equal(1);
  // });
});
