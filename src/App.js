/* global React ReactDOM */

const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ]);
};

class App extends React.Component {
  handleClick() {
    alert("you clicked the title");
  }
  render() {
    return React.createElement(
      "div",
      {},
      React.createElement("h1", { onClick: this.handleClick }, "Adopt Me!"),
      React.createElement(Pet, {
        name: "Dane",
        animal: "dog",
        breed: "fart"
      }),
      React.createElement(Pet, {
        name: "tweetie",
        animal: "bird",
        breed: "fart2"
      }),
      React.createElement(Pet, {
        name: "tom",
        animal: "cat",
        breed: "batman"
      })
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
