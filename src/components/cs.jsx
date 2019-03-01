import React, { Component } from "react";
class Cs extends Component {
  state = {
    names: ["Rishi Mukherjee", "Sneha"]
  };
  renderTags() {
    if (this.state.names.length === 0)
      return <p>There are no elements in the list</p>;
    else
      return (
        <ul>
          {this.state.names.map(name => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      );
  }
  render() {
    return (
      <React.Fragment>
        {this.state.names.length === 0 && "The list is empty"}
        {this.renderTags()}
      </React.Fragment>
    );
  }
}
export default Cs;
