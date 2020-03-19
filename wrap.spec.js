const { expect } = require("chai");
const wrap = require("./wrap");

describe("wrap", () => {
  it("Returns empty string if empty string was provided", () => {
    expect(wrap("", 10)).to.equal("");
  });

  it("If the string length is less than the max length", () =>{
      expect(wrap("hello", 7)).to.equal("hello");
  });

  it("if the string length is greater than the max length", () =>{
      expect(wrap("Tiffany says hello", 8)).to.equal(`Tiffany\nsays\nhello`)
  })
});
