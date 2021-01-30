import React from "react";
class search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.addValue = this.addValue.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  addValue(evt) {
    evt.preventDefault();
    if (this.state.value !== undefined) {
      console.log("Your input value is: " + this.state.value);
    }
  }
  updateInput(evt) {
    this.setState({ value: evt.target.value });
  }

  render() {
    return (
      <form onSubmit={this.addValue}>
        <input type="text" onChange={this.updateInput} />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default search;