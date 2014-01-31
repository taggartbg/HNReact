/** @jsx React.DOM */

console.log("Test.jsx");
console.log($('.container'));

React.renderComponent(
  React.DOM.h1(null, "Hello, world!"),
  $('.container')
);

exports.test = "test";