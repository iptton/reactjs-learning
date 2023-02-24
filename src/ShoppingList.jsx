import React from "react";

export default class ShppingList extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <ul>
          
        </ul>
      </div>
    );
  }
  constructor(props) {
    super(props);
    this.state = {
      items : [1,2,3]
    }
  }
}
