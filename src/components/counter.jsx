import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    tags: ["Rishi", "Sneha", "Aishi", "Ankita"]
  };
  styles = {
    fontSize: 50
  };
  handleIncrement = Event => {
    // console.log("Incremented");
    // this.state.count++;
    //console.log(Event);

    this.setState({ count: this.state.count + 1 }, () => {
      console.log("state Changed");
    });
  };
  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement(10)}
          className="btn btn-secondary btn-sm"
          style={{ fontSize: 30 }}
        >
          Increment
        </button>
        <br />
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
