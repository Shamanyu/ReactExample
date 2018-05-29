console.log("React demo");

const jsContainer = document.getElementById("js");

jsContainer.innerHTML = `
  <div class="demo">
    Hello JS
    <input />
  </div>
`;

const reactContainer = document.getElementById("react");

ReactDOM.render(
  // React works with objects rather than strings
  React.createElement(
    "div",
    {className: "demo"},
    "Hello React",
    React.createElement("input")
  ),
  reactContainer
);
