import React, { Component } from "react";

class PersonCard extends Component {
  constructor(props) {
    super(props);
  }
    render = () => {
      return (
        <div>
          <h1> {this.props.name}, {this.props.lastName} </h1>
          <p>Age: {this.props.age}</p>
          <p>Hair Color: {this.props.hairColor}</p>
          <button onClick={this.props.addAge}> Birthday Button for {this.props.name} {this.props.lastName} </button>
        </div>
      );
    }
}

export default PersonCard;