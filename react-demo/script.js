console.log("React demo");

const jsContainer = document.getElementById("js");
const reactContainer = document.getElementById("react");

const render = () => {

  // Throws away the entire DOM and re-renders every time 'render' is called
  // We won't be able to type in the 'input' box
  jsContainer.innerHTML = `
    <div class="demo">
      Hello JS
      <input />
      <p>
        ${new Date()}
      </p>
    </div>
  `;

  // Smartly updates only the changed component
  // We will be able to type in the 'input' box
  ReactDOM.render(
    // React works with objects rather than strings
    React.createElement(
      "div",
      {className: "demo"},
      "Hello React",
      React.createElement("input"),
      React.createElement(
        "p",
        null,
        new Date().toString()
      )
    ),
    reactContainer
  );

}

setInterval(render, 1000);
