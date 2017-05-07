import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import Nav from "../../components/Nav.jsx";

describe("Nav", () => {
  it("should render a Link to home", () => {
    const wrapper = shallow(<Nav/>);

    expect(wrapper.find({to: "/"}).length).to.equal(1);
  })

  it("should render a Link to /beer-explorer", () => {
    const wrapper = shallow(<Nav/>);

    expect(wrapper.find({to: "/beer-explorer"}).length).to.equal(1);
  })
})
