import React from "react";
import API from "../../utils/API";
import ResultsContainer from "./ResultsContainer";

class search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", recomendations: "" };
    this.addValue = this.addValue.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  addValue(evt) {
    evt.preventDefault();
    if (this.state.value !== undefined) {
      API.findCountry1(this.state.value).then((response) => {
        this.setState({
          recomendations: response.data.data.US.advisory.message,
        });
        /* console.log(response); */
        console.log(this.state.recomendations);
      });
      API.findCountry2(this.state.value).then(
        (response) => console.log(response)
        /* cases: r */
      );
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
        <ResultsContainer
          recomendations={this.state.recomendations}
          /*  cases={this.state.} */
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default search;
