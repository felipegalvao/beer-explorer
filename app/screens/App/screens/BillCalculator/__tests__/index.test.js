import React from "react";
import { expect } from "chai";
import { shallow, mount } from "enzyme";
import {BillCalculator} from "../";

describe("BillCalculator", () => {
  it("should render a AddBillItem component", () => {
    const wrapper = shallow(<BillCalculator />);
    console.log(wrapper.find("div").length);
    expect(wrapper.find("AddBillItem").length).to.equal(1);
  });
});
